import { Component, AfterViewInit, ViewChild, ElementRef, Injectable} from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient} from "@angular/common/http";
import {DbService} from "../../service/db.service";

@Component({
  selector: 'app-present-query2',
  templateUrl: './present-query2.component.html',
  styleUrls: ['./present-query2.component.css']
})

@Injectable()
export class PresentQuery2Component implements AfterViewInit {
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor(private http: HttpClient, private db:DbService) { }
  dbversion:string;
  data={labels:[], values:[]};

  extract_data(data){
    this.data.labels=[];
    this.data.values=[];
    for (let arr of data){
      this.data.labels.push(arr.join_mode);
      this.data.values.push(arr.avg_rsvp);
    }
  }
  mock_data(){
    this.data.labels=[1,2,3];
    this.data.values=[4,5,6];
  }
  ngOnInit(){
    this.dbversion=this.db.getDbVersion();
    this.http.get<any>(`https://adbm-final.herokuapp.com/api/database/${this.dbversion}/query/2`).subscribe(
      data =>{
        this.extract_data(data);
        this.ngAfterViewInit();

      },
      error =>{
        console.log('error');
        this.mock_data();
        this.ngAfterViewInit();

      }
    )
  }

  ngAfterViewInit() {
    //console.log(this.mycanvas);
    var ctx =  this.mycanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.labels,
        datasets: [
          {
            label: "RSVP",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: this.data.values
          }
        ]
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
          text: 'Find different group join modes'
        }
      }
    });
  }

}

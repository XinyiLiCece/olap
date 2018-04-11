import {Component, AfterViewInit, ViewChild, ElementRef, Injectable} from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from "@angular/common/http";
import {DbService} from "../../service/db.service";
@Component({
  selector: 'app-present-query8',
  templateUrl: './present-query8.component.html',
  styleUrls: ['./present-query8.component.css']
})
@Injectable()
export class PresentQuery8Component implements AfterViewInit {
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor(private http: HttpClient,private db:DbService) { }

  data={labels:[], values:[]};
  dbversion:string;
  extract_data(data){
    this.data.labels=[];
    this.data.values=[];
    for (let arr of data){
      this.data.labels.push(arr.topic);
      this.data.values.push(arr.sum_events);
    }
  }

  ngOnInit(){
    this.dbversion=this.db.getDbVersion();
    this.http.get<any>(`https://adbm-final.herokuapp.com/api/database/${this.dbversion}/query/8`).subscribe(
      data =>{
        this.extract_data(data);
        this.ngAfterViewInit();

      },
      error =>{
        console.log('error');
        // this.mock_data();
        // this.ngAfterViewInit();

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
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: this.data.values
          }
        ]
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
          text: 'Find the top 5 popular topics'
        }
      }
    });

    // var ctx =  this.mycanvas.nativeElement.getContext('2d');
    // this.chart = new Chart(ctx, {
    //   type: 'doughnut',
    //   data: {
    //     labels: ["Topic1","Topic2","Topic3"],
    //     datasets: [
    //       {
    //         label: "Population (millions)",
    //         backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    //         data: [2478,5267,734]
    //       }
    //     ]
    //   },
    //   options: {
    //     title: {
    //       display: true,
    //       text: 'Find the top 5 popular topics.'
    //     }
    //   }
    // });
  }

}

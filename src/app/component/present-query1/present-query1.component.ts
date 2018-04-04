import {Component, AfterViewInit, ViewChild, ElementRef, Injectable} from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from "@angular/common/http";
import {DbService} from "../../service/db.service";

@Component({
  selector: 'app-present-query1',
  templateUrl: './present-query1.component.html',
  styleUrls: ['./present-query1.component.css']
})
@Injectable()
export class PresentQuery1Component implements AfterViewInit {
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor(private http:HttpClient, private db:DbService) { }
  colorset=['#FF69B4','#00FF00','#8A2BE2','#0000FF','#191970','#800000'];
  data={labels:[], values:[], colors:[]};
  dbversion:string;

  extract_data(data){
    this.data.labels=[];
    let k=0;
    for (let e of data){
      this.data.labels.push("season:"+e.season+"/"+e.year);
      this.data.colors.push(this.colorset[k]);
      this.data.values.push(e.sum_events);
      k=(k+1)%this.colorset.length;
    }
  }

  ngOnInit(){
    this.dbversion=this.db.getDbVersion();
    console.log(this.dbversion);
    this.http.get<any>(`https://adbm-final.herokuapp.com/api/database/${this.dbversion}/query/1`).subscribe(
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
    console.log(this.mycanvas);
    var ctx =  this.mycanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.labels,
        datasets: [{
          label: 'event',
          borderWidth: 1,
          data: this.data.values,
          backgroundColor: this.data.colors
        }]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Find the most popular event topic of each seasons'
        }
      }
    });
  }

}

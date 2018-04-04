import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient} from "@angular/common/http";
import {DbService} from "../../service/db.service";

@Component({
  selector: 'app-present-query4',
  templateUrl: './present-query4.component.html',
  styleUrls: ['./present-query4.component.css']
})
export class PresentQuery4Component implements AfterViewInit{
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor(private http:HttpClient, private db:DbService) { }
  colorset=['#FF69B4','#00FF00','#8A2BE2','#0000FF','#191970','#800000'];
  data={labels:[], datasets:[]};
  dbversion:string;
  extract_data(data){
    this.data.labels=[];
    this.data.datasets=[];
    for (let i=0; i<data[0].month.length; i++){
      this.data.labels.push(data[0].month[i]+'/'+data[0].year[i]);
    }
    let k=0;
    for (let e of data){
      this.data.datasets.push({
        data: e.avg_rsvp,
        label: e.topic,
        borderColor: this.colorset[k],
        fill:false
      });
      k=(k+1)%this.colorset.length;
    }
  }

  ngOnInit(){
    this.http.get<any>(`https://adbm-final.herokuapp.com/api/database/${this.dbversion}/query/4`).subscribe(
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
      type: 'line',
      data: {
        labels: this.data.labels,
        datasets: this.data.datasets
      },
      options: {
        title: {
          display: true,
          text: 'Average event rsvp every month'
        }
      }
    });
  }

}

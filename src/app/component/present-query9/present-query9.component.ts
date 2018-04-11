import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AfterViewInit, ViewChild, ElementRef, Injectable} from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from "@angular/common/http";
import {DbService} from "../../service/db.service";
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-present-query9',
  templateUrl: './present-query9.component.html',
  styleUrls: ['./present-query9.component.css']
})
export class PresentQuery9Component implements AfterViewInit {
  chart1 = [];
  chart2 = [];
  chart3 = [];
  @ViewChild("mycanvas1") mycanvas1:ElementRef;
  @ViewChild("mycanvas2") mycanvas2:ElementRef;
  @ViewChild("mycanvas3") mycanvas3:ElementRef;
  constructor(private http: HttpClient, private db:DbService) { }
  dbversion:string;
  data={cityName1:'',labels1:[], values1:[];
    cityName2:'',labels2:[], values2:[];
    cityName3:'',labels3:[], values3:[];
    };

  extract_data(data){
    this.data.labels1=[];
    this.data.labels2=[];
    this.data.labels3=[];
    this.data.values1=[];
    this.data.values2=[];
    this.data.values3=[];
    this.data.cityName1='';
    this.data.cityName2='';
    this.data.cityName3='';
    for(var i=0;i<3;i++){
      this.data.cityName1=data[i].city
      this.data.labels1.push(data[i].topic);
      this.data.values1.push(data[i].sum_events);
    }
    for(var i=3;i<6;i++){
      this.data.cityName2=data[i].city
      this.data.labels2.push(data[i].topic);
      this.data.values2.push(data[i].sum_events);
    }
    for(var i=6;i<9;i++){
      this.data.cityName3=data[i].city
      this.data.labels3.push(data[i].topic);
      this.data.values3.push(data[i].sum_events);
    }
  /**  for (let arr of data){
      this.data.labels.push(arr.join_mode);
      this.data.values.push(arr.avg_rsvp);
    }**/
  }

  ngOnInit(){
    console.log(123)
    this.dbversion=this.db.getDbVersion();
    this.http.get<any>(`https://adbm-final.herokuapp.com/api/database/${this.dbversion}/query/9`).subscribe(
      data =>{
        this.extract_data(data);
        this.ngAfterViewInit();
      
      },
      error =>{
        console.log('esrror');
        
        this.ngAfterViewInit();

      }
    )
  }
 

  ngAfterViewInit() {
    //console.log(this.mycanvas);
    var ctx =  this.mycanvas1.nativeElement.getContext('2d');
    this.chart1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.labels1,
        datasets: [
          {
            label: "sum_events",
            backgroundColor: ["#3e95cd", "#8e5ea2","#FAEBD7"],
            data: this.data.values1
          }
        ]
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
          text: 'Top 3 popular topics in '+this.data.cityName1
        }
      }
    });
    var ctx =  this.mycanvas2.nativeElement.getContext('2d');
  this.chart2 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: this.data.labels2,
      datasets: [
        {
          label: "sum_events",
          backgroundColor: ["#3e95cd", "#8e5ea2","#FAEBD7"],
          data: this.data.values2
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Top 3 popular topics in '+this.data.cityName2
      }
    }
  });
  var ctx =  this.mycanvas3.nativeElement.getContext('2d');
  this.chart3 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: this.data.labels3,
      datasets: [
        {
          label: "sum_events",
          backgroundColor: ["#3e95cd", "#8e5ea2","#FAEBD7"],
          data: this.data.values3
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Top 3 popular topics in '+this.data.cityName3
      }
    }
  });
  }

  


}

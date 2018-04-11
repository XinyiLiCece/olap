import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {AfterViewInit, ViewChild, ElementRef, Injectable} from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from "@angular/common/http";
import {DbService} from "../../service/db.service";
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-present-query7',
  templateUrl: './present-query7.component.html',
  styleUrls: ['./present-query7.component.css']
})
export class PresentQuery7Component implements OnInit {
  
  selectedCity:string;
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor(private http: HttpClient,private db:DbService) { }

  data={labels:[], values:[]};
  dbversion:string;
  extract_data(data){
    this.data.labels=[];
    this.data.values=[];
    for (let arr of data){
      this.data.labels.push(arr.name);
      this.data.values.push(arr.sum_rsvp);
    }
  }

  ngOnInit(){}
  onSubmit(form: NgForm) {
    console.log(form.value.test)
    this.dbversion=this.db.getDbVersion();
    console.log(this.selectedCity);
    this.http.get<any>(`https://adbm-final.herokuapp.com/api/database/${this.dbversion}/query/6?city=${this.selectedCity}`).subscribe(
      data =>{
        console.log(data);
        this.extract_data(data);
        this.presentChart();

      },
      error =>{
        console.log('error');
        // this.mock_data();
        // this.ngAfterViewInit();

      }
    )
    }
  
    presentChart() {
    
    console.log(1223);
    //console.log(this.mycanvas);
    var ctx =  this.mycanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.data.labels,
        datasets: [
          {
            label: "sum_rsvp",
            backgroundColor: ["#3e95cd"],
            data: this.data.values
          }
        ]
      },
      options: {
        legend: { display: true },
        title: {
          display: true,
        //  text: 'Find the top 5 popular topics'
        }
      }
    });
  }
}
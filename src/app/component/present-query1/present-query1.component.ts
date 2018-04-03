import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-present-query1',
  templateUrl: './present-query1.component.html',
  styleUrls: ['./present-query1.component.css']
})
export class PresentQuery1Component implements AfterViewInit {
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.mycanvas);
    var ctx =  this.mycanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["  Spring","Summer","Fall","Winter"],
        datasets: [
          {
            label: "RSVP",
            backgroundColor: ["#3e95cd", "#8e5ea2","#e8c3b9","#c45850"],
            data: [4333,5644,4333,4322]
          }
        ]
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

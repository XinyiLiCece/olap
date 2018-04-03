import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-present-query8',
  templateUrl: './present-query8.component.html',
  styleUrls: ['./present-query8.component.css']
})
export class PresentQuery8Component implements AfterViewInit {
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.mycanvas);
    var ctx =  this.mycanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Topic1","Topic2","Topic3"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
            data: [2478,5267,734]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Find the top 5 popular topics.'
        }
      }
    });
  }

}

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-present-query4',
  templateUrl: './present-query4.component.html',
  styleUrls: ['./present-query4.component.css']
})
export class PresentQuery4Component implements AfterViewInit{
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.mycanvas);
    var ctx =  this.mycanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jul','Jun','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{ 
            data: [86,114,106,106,107,111,133,221,783,2478,478,89],
            label: "Topic1",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [282,350,411,502,635,809,947,1402,3700,5267,111,133],
            label: "Topic2",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [168,170,178,190,203,276,408,547,675,734,350,893],
            label: "Topic3",
            borderColor: "#3cba9f",
            fill: false
          }, 
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

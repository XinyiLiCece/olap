import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-present-query2',
  templateUrl: './present-query2.component.html',
  styleUrls: ['./present-query2.component.css']
})
export class PresentQuery2Component implements AfterViewInit {
  chart = [];
  @ViewChild("mycanvas") mycanvas:ElementRef;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.mycanvas);
    var ctx =  this.mycanvas.nativeElement.getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Paid","Unpaid"],
        datasets: [
          {
            label: "RSVP",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [2478,5267]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Find different group join modes' 
        }
      }
    });
  }

}

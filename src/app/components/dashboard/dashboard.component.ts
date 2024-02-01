import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isDivClicked: boolean = false;
  isLinkClicked: boolean = false;

  hideAndShowDiv(e: Event) {
    this.isDivClicked = !this.isDivClicked;
  }

  toggleLink() {
    this.isLinkClicked = !this.isLinkClicked;
  }
  title = 'ng-chart';
  chart: any = [];

  constructor() {}

  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true, // Set to true to make the chart responsive
        maintainAspectRatio: false, // Set to false to allow the chart to fill the container
        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            position: 'right', // or 'left', 'top', 'bottom'
          },
        },
      },
    });

    this.chart = new Chart('radarId', {
      type: 'radar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Maize',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(22, 91, 170, 0.2)', // #165BAA
            borderColor: '#165BAA',
            borderWidth: 1,
          },
          {
            label: 'Eggplant',
            data: [5, 8, 12, 15, 6, 10],
            backgroundColor: 'rgba(114, 101, 203, 0.2)', // #7265CB
            borderColor: '#7265CB',
            borderWidth: 1,
          },
          {
            label: 'Rice',
            data: [8, 15, 7, 10, 5, 8],
            backgroundColor: 'rgba(247, 101, 163, 0.2)', // #F765A3
            borderColor: '#F765A3',
            borderWidth: 1,
          },
          {
            label: 'Cauliflower',
            data: [16, 10, 14, 8, 12, 6],
            backgroundColor: 'rgba(22, 191, 214, 0.2)', // #16BFD6
            borderColor: '#16BFD6',
            borderWidth: 1,
          },
          {
            label: 'Beetroot',
            data: [6, 14, 18, 5, 8, 12],
            backgroundColor: 'rgba(177, 22, 214, 0.2)', // #B116D6
            borderColor: '#B116D6',
            borderWidth: 1,
          },
          {
            label: 'Potato',
            data: [10, 5, 8, 12, 15, 7],
            backgroundColor: 'rgba(214, 124, 22, 0.2)', // #D67C16
            borderColor: '#D67C16',
            borderWidth: 1,
          },
          {
            label: 'Tomato',
            data: [12, 8, 5, 16, 4, 10],
            backgroundColor: 'rgba(214, 22, 74, 0.2)', // #D6164A
            borderColor: '#D6164A',
            borderWidth: 1,
          },
          {
            label: 'Bell Pepper',
            data: [14, 6, 10, 18, 7, 15],
            backgroundColor: 'rgba(22, 214, 124, 0.2)', // #16D67C
            borderColor: '#16D67C',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            display: false,
          },
        },
        plugins: {
          legend: {
            position: 'right',
          },
        },
      },
    });

    this.chart = new Chart('linechartId', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            borderRadius: [10, 20],
            backgroundColor: '#273EA5',
            categoryPercentage: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: [
            {
              id: 'x-axis-0',
              position: 'top',
              ticks: {
                beginAtZero: true,
              },
            },
          ] as any[],
          y: [
            {
              display: false,
              ticks: {
                beginAtZero: true,
              },
              grid: {
                display: false,
              },
            },
          ] as any[],
        } as any,
        plugins: {
          legend: {
            display: true,
            position: 'left',
          },
        },
      },
    });
  }
}

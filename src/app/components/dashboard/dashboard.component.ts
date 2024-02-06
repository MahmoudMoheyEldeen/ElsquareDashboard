import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import Chart from 'chart.js/auto';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isDivClicked: boolean = false;
  isLinkClicked: boolean = false;
  cropsTypes: any;
  plannedProduction: any;
  yields: any;
  fertilizer: any;
  waterConsumption: any;
  pesticides: any;
  doughnutDataChart: [] = [];
  barDataChart: [] = [];
  radarChartData: [] = [];
  columnChartData: [] = [];
  dataForEachLabel: [] = [];
  arrayOfData: [] = [];
  arrayOfArraysForData: any[] = [];
  arrayOfArraysForLabel: any[] = [];

  hideAndShowDiv(e: Event) {
    this.isDivClicked = !this.isDivClicked;
  }

  toggleLink() {
    this.isLinkClicked = !this.isLinkClicked;
  }
  title = 'ng-chart';
  chart: any = [];

  constructor(private myApi: ApiService) {}

  ngOnInit() {
    this.getCrops();
    // this.displayDoughnutChart();
    this.getDoughnutData();
    this.getRadarchartData();
    this.getBarchartData();
  }

  getBarchartData() {
    this.myApi
      .getData(
        'https://fcc2efca-4005-4634-b75b-f14c52aa18d7.mock.pstmn.io/ColumnChart'
      )
      .subscribe((data: any) => {
        console.log('barhere', data);
        this.barDataChart = data.series;
        console.log('another here', this.barDataChart);
        this.displayBarChart();
      });
  }
  getDoughnutData() {
    this.myApi
      .getData(
        'https://fcc2efca-4005-4634-b75b-f14c52aa18d7.mock.pstmn.io/DonutChart'
      )
      .subscribe((data: any) => {
        console.log('here', data.series);
        this.doughnutDataChart = data.series;
        console.log('another here', this.doughnutDataChart);
        this.displayDoughnutChart();
      });
  }
  getRadarchartData() {
    this.myApi
      .getData(
        'https://fcc2efca-4005-4634-b75b-f14c52aa18d7.mock.pstmn.io/RadarChart'
      )
      .subscribe((data: any) => {
        for (let i = 0; i < data.series.length; i++) {
          const dataForIndex = data.series[i].data;
          const dataForName = data.series[i].name;
          console.log('Radar-here', dataForIndex);

          this.arrayOfArraysForData.push(dataForIndex);
          this.arrayOfArraysForLabel.push(dataForName);
        }
        // console.log('alldata', data.series[0].name);

        // console.log('Array of data', this.arrayOfArraysForData);
        this.displayRadarChart();
      });
  }
  displayBarChart() {
    this.chart = new Chart('linechartId', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 3, 3],
            backgroundColor: '#273EA5',
            borderWidth: 1,
            borderRadius: [10, 20],
            categoryPercentage: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y', // Set indexAxis to 'y' to display labels on the left
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
            display: false, // Hide the legend if you want to display labels on the left
          },
        },
      },
    });
  }

  displayDoughnutChart() {
    this.chart = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: this.doughnutDataChart,
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
  }
  displayRadarChart() {
    this.chart = new Chart('radarId', {
      type: 'radar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: this.arrayOfArraysForLabel[0],
            data: this.arrayOfArraysForData[0],
            backgroundColor: 'rgba(22, 91, 170, 0.2)', // #165BAA
            borderColor: '#165BAA',
            borderWidth: 1,
          },
          {
            label: this.arrayOfArraysForLabel[1],
            data: this.arrayOfArraysForData[1],
            backgroundColor: 'rgba(114, 101, 203, 0.2)', // #7265CB
            borderColor: '#7265CB',
            borderWidth: 1,
          },
          {
            label: this.arrayOfArraysForLabel[2],
            data: this.arrayOfArraysForData[2],
            backgroundColor: 'rgba(247, 101, 163, 0.2)', // #F765A3
            borderColor: '#F765A3',
            borderWidth: 1,
          },
          {
            label: this.arrayOfArraysForLabel[3],
            data: this.arrayOfArraysForData[3],
            backgroundColor: 'rgba(22, 191, 214, 0.2)', // #16BFD6
            borderColor: '#16BFD6',
            borderWidth: 1,
          },
          {
            label: this.arrayOfArraysForLabel[4],
            data: this.arrayOfArraysForData[4],
            backgroundColor: 'rgba(177, 22, 214, 0.2)', // #B116D6
            borderColor: '#B116D6',
            borderWidth: 1,
          },
          {
            label: this.arrayOfArraysForLabel[5],
            data: this.arrayOfArraysForData[5],
            backgroundColor: 'rgba(214, 124, 22, 0.2)', // #D67C16
            borderColor: '#D67C16',
            borderWidth: 1,
          },
          {
            label: this.arrayOfArraysForLabel[6],
            data: this.arrayOfArraysForData[6],
            backgroundColor: 'rgba(214, 22, 74, 0.2)', // #D6164A
            borderColor: '#D6164A',
            borderWidth: 1,
          },
          {
            label: this.arrayOfArraysForLabel[7],
            data: this.arrayOfArraysForData[7],
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
  }
  getCrops() {
    this.myApi
      .getData(
        'https://fcc2efca-4005-4634-b75b-f14c52aa18d7.mock.pstmn.io/CropDetails'
      )
      .subscribe((data: any) => {
        console.log('asdsassssssssssssssssssssssss', data);
        this.cropsTypes = data.crops.types;
        this.plannedProduction = data.crops.plannedProduction;
        this.yields = data.crops.yields;
        this.fertilizer = data.fertilizers;
        this.pesticides = data.pesticides;
        this.waterConsumption = data.waterConsumption;
      });
  }
}

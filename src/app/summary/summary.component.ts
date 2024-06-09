import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { WizardDetailsModel } from '../WizardDetails-model';
import { WizardDetails } from '../wizard-details.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  standalone:false,
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
 
  
  flatDetails: WizardDetailsModel[]=[];

key: any;
complexId: any;
flatNo:number=0;
  constructor(private WizardDetails:WizardDetails) { }

  ngOnInit(): void {
    this.generateChart();
    this.getFlatDetails();
  }

  sendEmail(owner: string): void {
    window.location.href = `mailto:${owner}@example.com?subject=Your%20Selected%20Services&body=Details%20of%20selected%20services%20and%20estimated%20costs.`;
  }
  getFlatDetails(): void {
    if(true){

    console.log("if true")
    this.WizardDetails.getflatDetails().subscribe(
      details => {
        this.flatDetails = details;
        console.log("I Got the details")
        console.log(this.flatDetails)
      },
      error => {
        console.log('Error fetching flat details:');
      }
    );
    }
    console.log("getting");
  }


  generateChart(): void {
    const ctx = document.getElementById('complexPriceChart') as HTMLCanvasElement;
    const complexPriceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Estimated Price',
          data: [300, 350, 700, 450, 500],
          backgroundColor: 'rgba(204, 85, 119,0.8)',
          borderColor: 'rgba(,238, 236, 185,1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4,
        }]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            labels: {
              color: '#000',
              font: {
                size: 14,
                weight: 'bold'
              }
            }
          },
          tooltip: {
            enabled: true,
            backgroundColor: '#000',
            titleColor: '#000',
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyColor: '#000',
            bodyFont: {
              size: 12
            },
            borderColor: '#000',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            grid: {
              display: true,
              color: 'rgba(200, 200, 200, 0.0)'
            },
            ticks: {
              color: '#333',
              font: {
                size: 12
              }
            }
          },
          y: {
            beginAtZero: true,
            grid: {
              display: true,
              color: 'rgba(000, 000, 000, 0.0)'
            },
            ticks: {
              color: '#333',
              font: {
                size: 12
              }
            }
          }
        }
      }
    });
  }
}

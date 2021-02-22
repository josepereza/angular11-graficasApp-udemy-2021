import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
     'facebook', 'youtube', 'wahtsapp', 'messenger','instagram'
  ];
  public doughnutChartData: MultiDataSet = [
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      
    }
  ]
miarray:any[]=[]
  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
    .subscribe( (data:any) => {
      console.log('este es el data ', data)
      data.forEach((item:any) => {
        this.miarray.push([item.facebook,item.youtube,item.whatsapp,item.messenger,item.instagram])
        
    });
    this.doughnutChartData=this.miarray
    })

  }

}
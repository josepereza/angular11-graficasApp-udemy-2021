import { Component, OnInit } from '@angular/core';
interface MenuItem{
  ruta:string;
  texto:string;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
menu:MenuItem[]=[
  {ruta:'/graficas/barra', texto:'Barras'},
  {ruta:'/graficas/barrasdobles', texto:'Barras Dobles'},
  {ruta:'/graficas/dona', texto:'Dona'},
  {ruta:'/graficas/donahttp',texto:'Dona Http'},
]
}

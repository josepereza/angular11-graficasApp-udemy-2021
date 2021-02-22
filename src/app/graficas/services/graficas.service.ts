import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grafica } from '../interfaces/grafica.interface';
import { tap, map, delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor(private http:HttpClient) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica')
    
  }

  // getUsuariosRedesSocialesDonaData() {
  //    this.getUsuariosRedesSociales<any[]>()
  //   .pipe(map((data)=>data[0].facec book).subscribe
  
  //       // .pipe(
  //       //   // delay(1500),
  //       //   map ( data => {
  //       //     const labels = Object.keys( data );
  //       //     const values = Object.values( data );
  //       //     return { labels, values };
  //       //   })
  //       // )
  // }
}

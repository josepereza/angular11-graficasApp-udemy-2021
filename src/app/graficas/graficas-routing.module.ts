import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';

const routes: Routes = [
  {path:'',
      children:[
        {path:'barra', component:BarrasComponent },
  {path:'barrasdobles', component:BarrasDobleComponent},
  {path:'dona', component:DonaComponent },
  {path:'donahttp', component:DonaHttpComponent},
  {path:'graficasbarra', component:GraficaBarraComponent},
  {path:'**', redirectTo:'barra'}
      ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }

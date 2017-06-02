import { Component, OnInit } from '@angular/core';
import { AlertaService } from './alerta.service';
import { Alerta } from '../model/alerta.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {


  private alertas: Array<Alerta>;
  private alerta: Alerta;

  constructor(
    private alertaService: AlertaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.onList();
  }

  onDelete(id: number){
    console.log(id);
  }

  onEdit(alerta: Alerta){
    this.router.navigate(['alertas',alerta.id,'editar']);
    this.alerta = alerta;
  }

  onNew(){
    this.router.navigate(['alertas','novo']);
  }

  onHome(){
    this.onList();
  }

  onList(){
    this.router.navigate(['alertas','lista']);
  }

}





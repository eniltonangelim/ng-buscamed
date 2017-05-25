import { Component, OnInit } from '@angular/core';
import { FarmaciaService } from './farmacia.service';
import { Farmacia } from '../model/farmacia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})
export class FarmaciaComponent implements OnInit {

  private farmacias: Array<Farmacia>;
  private farmacia: Farmacia;

  constructor(
    private farmaciaService: FarmaciaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.farmaciaService.listar().subscribe(
      data => this.farmacias = data,
      error => console.log('Error')
    );
    this.onList();
  }

  onDelete(id: number){
    console.log(id);
  }

  onEdit(farmacia: Farmacia){
    this.router.navigate(['farmacias',farmacia.id,'editar']);
    this.farmacia = farmacia;
  }

  onNew(){
    this.router.navigate(['farmacias','novo']);
  }

  onHome(){
    this.onList();
  }

  onList(){
    this.router.navigate(['farmacias','lista']);
  }

}

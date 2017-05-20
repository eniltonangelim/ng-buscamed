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
  private headers: Array<any> = [
    {'name': 'Farmacia'},
    {'name': 'Endereco'},
    {'name': 'Cidade'}
  ] ;

  constructor(
    private farmaciaService: FarmaciaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.farmaciaService.listar().subscribe(
      data => this.farmacias = data,
      error => console.log('Error')
    );
  }


  onDelete(id: number){
    console.log(id);
  }

  onEdit(farmacia: Farmacia){
    this.router.navigate(['/farmacias/', farmacia.id, '/editar']);
    console.log(farmacia)
  }

}

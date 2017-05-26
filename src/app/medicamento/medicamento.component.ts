import { Component, OnInit } from '@angular/core';
import { MedicamentoService } from './medicamento.service';
import { Medicamento } from '../model/medicamento.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicamento',
  templateUrl: './medicamento.component.html',
  styleUrls: ['./medicamento.component.css']
})
export class MedicamentoComponent implements OnInit {

  private medicamentos: Array<Medicamento>;
  private medicamento: Medicamento;

  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router
  ) { }

  ngOnInit() {
    /*this.medicamentoService.listar().subscribe(
      data => this.medicamentos = data,
      error => console.log('Error')
    );
    this.onList();*/
  }

  onDelete(id: number){
    console.log(id);
  }

  onEdit(medicamento: Medicamento){
    this.router.navigate(['medicamentos',medicamento.id,'editar']);
    this.medicamento = medicamento;
  }

  onNew(){
    this.router.navigate(['medicamentos','novo']);
  }

  onHome(){
    this.onList();
  }

  onList(){
    this.router.navigate(['medicamentos','lista']);
  }

}

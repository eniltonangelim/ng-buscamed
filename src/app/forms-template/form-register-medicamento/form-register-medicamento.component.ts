import { Component, OnInit } from '@angular/core';
import { Medicamento } from '../../model/medicamento.model';
import { Router,ActivatedRoute } from '@angular/router';
import { 
  FormBuilder, 
  FormGroup, 
  FormControl, 
  AbstractControl,
  Validators 
} from '@angular/forms';
import { MedicamentoService } from '../../medicamento/medicamento.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-form-register-medicamento',
  templateUrl: './form-register-medicamento.component.html',
  styleUrls: ['./form-register-medicamento.component.css']
})
export class FormRegisterMedicamentoComponent implements OnInit {

  medicamento: Medicamento = new Medicamento();
  inscricao: Subscription;
  myForm: FormGroup;
  showPositiveMessage: boolean = false;
  showNegativeMessage: boolean = false;

  constructor( 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private medicamentoService: MedicamentoService,
    private router: Router
   ) { 

    this.myForm = fb.group({
      'nome': ['', Validators.required],
      'laboratorio': ['', Validators.required],
      'codBarras': ['', Validators.compose([Validators.required])],
      'dosagem': ['', Validators.required],
    });

  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['id']){
          this.medicamentoService.getMedicamento(params['id']).subscribe(
            data => this.changeMedicamento(data),
          );
        }else {
          this.medicamento = new Medicamento();
        }
      }
    )
  }

  onSubmit(medicamento: Medicamento): void {
    if (!medicamento.id) {
      this.medicamentoService.cadastrar(this.medicamento).subscribe(
        data => this.showPositiveMessage = true,
        error => this.showNegativeMessage = true
      );
    } else {
      this.medicamentoService.atualizar(this.medicamento).subscribe(
        data => this.showPositiveMessage = true,
        error => this.showNegativeMessage = true
      );
    }
  }

  changeMedicamento(medicamento: Medicamento){
    this.medicamento = medicamento;
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  isNumber(c: FormControl): { [s: string]: boolean} {
    return c.value.match(/^[0-9]+$/) ? {invalidNumber: false} : {invalidNumber: true}
  }

  onHome(){
    this.router.navigate(['medicamentos']);
  }

}

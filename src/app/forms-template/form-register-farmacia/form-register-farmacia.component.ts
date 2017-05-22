import { Component, OnInit } from '@angular/core';
import { Farmacia } from '../../model/farmacia.model';
import { ActivatedRoute } from '@angular/router';
import { 
  FormBuilder, 
  FormGroup, 
  FormControl, 
  AbstractControl,
  Validators 
} from '@angular/forms';
import { CidadesService } from '../../thirdy-party-api/cidades.service';
import { FarmaciaService } from '../../farmacia/farmacia.service';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-form-register-farmacia',
  templateUrl: './form-register-farmacia.component.html',
  styleUrls: ['./form-register-farmacia.component.css']
})
export class FormRegisterFarmaciaComponent implements OnInit {

  farmacia: Farmacia = new Farmacia();
  estado: string = 'Ceará';
  inscricao: Subscription;
  myForm: FormGroup;
  cidades: string[] = ["ABAIARA","ACARAPE","ACARAU","ACOPIARA","AIUABA","ALCANTARAS","ALTANEIRA","ALTO SANTO","AMONTADA","ANTONINA DO NORTE","APUIARES","AQUIRAZ","ARACATI","ARACOIABA","ARARENDA","ARARIPE","ARATUBA","ARNEIROZ","ASSARE","AURORA","BAIXIO","BANABUIU","BARBALHA","BARREIRA","BARRO","BARROQUINHA","BATURITE","BEBERIBE","BELA CRUZ","BOA VIAGEM","BREJO SANTO","CAMOCIM","CAMPOS SALES","CANINDE","CAPISTRANO","CARIDADE","CARIRE","CARIRIACU","CARIUS","CARNAUBAL","CASCAVEL","CATARINA","CATUNDA","CAUCAIA","CEDRO","CHAVAL","CHORO","CHOROZINHO","COREAU","CRATEUS","CRATO","CROATA","CRUZ","DEPUTADO IRAPUAN PINHEIRO","ERERE","EUSEBIO","FARIAS BRITO","FORQUILHA","FORTALEZA","FORTIM","FRECHEIRINHA","GENERAL SAMPAIO","GRACA","GRANJA","GRANJEIRO","GROAIRAS","GUAIUBA","GUARACIABA DO NORTE","GUARAMIRANGA","HIDROLANDIA","HORIZONTE","IBARETAMA","IBIAPINA","IBICUITINGA","ICAPUI","ICO","IGUATU","INDEPENDENCIA","IPAPORANGA","IPAUMIRIM","IPU","IPUEIRAS","IRACEMA","IRAUCUBA","ITAICABA","ITAITINGA","ITAPAGE","ITAPIPOCA","ITAPIUNA","ITAREMA","ITATIRA","JAGUARETAMA","JAGUARIBARA","JAGUARIBE","JAGUARUANA","JARDIM","JATI","JIJOCA DE JERICOACOARA","JUAZEIRO DO NORTE","JUCAS","LAVRAS DA MANGABEIRA","LIMOEIRO DO NORTE","MADALENA","MARACANAU","MARANGUAPE","MARCO","MARTINOPOLE","MASSAPE","MAURITI","MERUOCA","MILAGRES","MILHA","MIRAIMA","MISSAO VELHA","MOMBACA","MONSENHOR TABOSA","MORADA NOVA","MORAUJO","MORRINHOS","MUCAMBO","MULUNGU","NOVA OLINDA","NOVA RUSSAS","NOVO ORIENTE","OCARA","OROS","PACAJUS","PACATUBA","PACOTI","PACUJA","PALHANO","PALMACIA","PARACURU","PARAIPABA","PARAMBU","PARAMOTI","PEDRA BRANCA","PENAFORTE","PENTECOSTE","PEREIRO","PINDORETAMA","PIQUET CARNEIRO","PIRES FERREIRA","PORANGA","PORTEIRAS","POTENGI","POTIRETAMA","QUITERIANOPOLIS","QUIXADA","QUIXELO","QUIXERAMOBIM","QUIXERE","REDENCAO","RERIUTABA","RUSSAS","SABOEIRO","SALITRE","SANTANA DO ACARAU","SANTANA DO CARIRI","SANTA QUITERIA","SAO BENEDITO","SAO GONCALO DO AMARANTE","SAO JOAO DO JAGUARIBE","SAO LUIS DO CURU","SENADOR POMPEU","SENADOR SA","SOBRAL","SOLONOPOLE","TABULEIRO DO NORTE","TAMBORIL","TARRAFAS","TAUA","TEJUCUOCA","TIANGUA","TRAIRI","TURURU","UBAJARA","UMARI","UMIRIM","URUBURETAMA","URUOCA","VARJOTA","VARZEA ALEGRE","VICOSA DO CEARA"];

  constructor( 
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private farmaciaService: FarmaciaService
   ) { 

    this.myForm = fb.group({
      'nome': ['', Validators.required],
      'rua': ['', Validators.required],
      'numero': ['', Validators.compose([Validators.required])]
    });

  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['id']){
          this.farmaciaService.getFarmacia(params['id']).subscribe(
            data => this.changeFarmacia(data),
            error => console.log("Não foi possivel editar a farmacia") 
          );
        }else {
          console.log("sem o ID");
          this.farmacia = new Farmacia();
        }
      }
    )
  }

  onSubmit(farmacia: Farmacia): void {
    if (!farmacia.id) {
      this.farmaciaService.cadastrar(this.farmacia).subscribe(
        error => console.log("Não foi possivel cadastrar a farmacia")
      );
    } else {
      this.farmaciaService.atualizar(this.farmacia).subscribe(
        error => console.log("Não foi possivel atualizar a farmacia")
      );
    }
  }

  changeFarmacia(farmacia: Farmacia){
    this.farmacia = farmacia;
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  isNumber(c: FormControl): { [s: string]: boolean} {
    return c.value.match(/^[0-9]+$/) ? {invalidNumber: false} : {invalidNumber: true}
  }

}

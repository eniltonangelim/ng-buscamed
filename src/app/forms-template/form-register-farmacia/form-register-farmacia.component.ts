import { Component, OnInit } from '@angular/core';
import { Farmacia } from '../../model/farmacia.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { CidadesService } from '../../thirdy-party-api/cidades.service';
import { FarmaciaService } from '../../farmacia/farmacia.service';

@Component({
  selector: 'app-form-register-farmacia',
  templateUrl: './form-register-farmacia.component.html',
  styleUrls: ['./form-register-farmacia.component.css']
})
export class FormRegisterFarmaciaComponent implements OnInit {

  farmacia: Farmacia;
  estado: string = 'Ceará';
  inscricao: Subscription;
  cidades: string[] = ["ABAIARA","ACARAPE","ACARAU","ACOPIARA","AIUABA","ALCANTARAS","ALTANEIRA","ALTO SANTO","AMONTADA","ANTONINA DO NORTE","APUIARES","AQUIRAZ","ARACATI","ARACOIABA","ARARENDA","ARARIPE","ARATUBA","ARNEIROZ","ASSARE","AURORA","BAIXIO","BANABUIU","BARBALHA","BARREIRA","BARRO","BARROQUINHA","BATURITE","BEBERIBE","BELA CRUZ","BOA VIAGEM","BREJO SANTO","CAMOCIM","CAMPOS SALES","CANINDE","CAPISTRANO","CARIDADE","CARIRE","CARIRIACU","CARIUS","CARNAUBAL","CASCAVEL","CATARINA","CATUNDA","CAUCAIA","CEDRO","CHAVAL","CHORO","CHOROZINHO","COREAU","CRATEUS","CRATO","CROATA","CRUZ","DEPUTADO IRAPUAN PINHEIRO","ERERE","EUSEBIO","FARIAS BRITO","FORQUILHA","FORTALEZA","FORTIM","FRECHEIRINHA","GENERAL SAMPAIO","GRACA","GRANJA","GRANJEIRO","GROAIRAS","GUAIUBA","GUARACIABA DO NORTE","GUARAMIRANGA","HIDROLANDIA","HORIZONTE","IBARETAMA","IBIAPINA","IBICUITINGA","ICAPUI","ICO","IGUATU","INDEPENDENCIA","IPAPORANGA","IPAUMIRIM","IPU","IPUEIRAS","IRACEMA","IRAUCUBA","ITAICABA","ITAITINGA","ITAPAGE","ITAPIPOCA","ITAPIUNA","ITAREMA","ITATIRA","JAGUARETAMA","JAGUARIBARA","JAGUARIBE","JAGUARUANA","JARDIM","JATI","JIJOCA DE JERICOACOARA","JUAZEIRO DO NORTE","JUCAS","LAVRAS DA MANGABEIRA","LIMOEIRO DO NORTE","MADALENA","MARACANAU","MARANGUAPE","MARCO","MARTINOPOLE","MASSAPE","MAURITI","MERUOCA","MILAGRES","MILHA","MIRAIMA","MISSAO VELHA","MOMBACA","MONSENHOR TABOSA","MORADA NOVA","MORAUJO","MORRINHOS","MUCAMBO","MULUNGU","NOVA OLINDA","NOVA RUSSAS","NOVO ORIENTE","OCARA","OROS","PACAJUS","PACATUBA","PACOTI","PACUJA","PALHANO","PALMACIA","PARACURU","PARAIPABA","PARAMBU","PARAMOTI","PEDRA BRANCA","PENAFORTE","PENTECOSTE","PEREIRO","PINDORETAMA","PIQUET CARNEIRO","PIRES FERREIRA","PORANGA","PORTEIRAS","POTENGI","POTIRETAMA","QUITERIANOPOLIS","QUIXADA","QUIXELO","QUIXERAMOBIM","QUIXERE","REDENCAO","RERIUTABA","RUSSAS","SABOEIRO","SALITRE","SANTANA DO ACARAU","SANTANA DO CARIRI","SANTA QUITERIA","SAO BENEDITO","SAO GONCALO DO AMARANTE","SAO JOAO DO JAGUARIBE","SAO LUIS DO CURU","SENADOR POMPEU","SENADOR SA","SOBRAL","SOLONOPOLE","TABULEIRO DO NORTE","TAMBORIL","TARRAFAS","TAUA","TEJUCUOCA","TIANGUA","TRAIRI","TURURU","UBAJARA","UMARI","UMIRIM","URUBURETAMA","URUOCA","VARJOTA","VARZEA ALEGRE","VICOSA DO CEARA"];

  constructor( 
    private route: ActivatedRoute,
    private farmaciaService: FarmaciaService
   ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['id']){
          this.farmaciaService.getFarmacia(params['id']).subscribe(
            data => this.farmacia = data,
            error => error = "Não foi possivel editar a farmacia" 
          );
        }else {
          this.farmacia = new Farmacia();
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}

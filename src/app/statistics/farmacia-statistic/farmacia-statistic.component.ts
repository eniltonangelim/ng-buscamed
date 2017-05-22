import { Component, OnInit, Input } from '@angular/core';

import { FarmaciaService } from '../../farmacia/farmacia.service';
import { Farmacia } from '../../model/farmacia.model';

@Component({
  selector: 'app-farmacia-statistic',
  templateUrl: './farmacia-statistic.component.html',
  styleUrls: ['./farmacia-statistic.component.css']
})
export class FarmaciaStatisticComponent implements OnInit {

  private farmacias: Array<Farmacia>;

  constructor(private farmaciaService: FarmaciaService,) { }

  ngOnInit() {
    this.farmaciaService.listar().subscribe(
      data => this.farmacias = data,
      error => console.log('Error')
    );
  }

}

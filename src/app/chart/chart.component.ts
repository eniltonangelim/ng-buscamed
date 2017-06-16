import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { modalAnimation } from '../_animations/modalAnimation';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  animations: [modalAnimation]
})
export class ChartComponent implements OnInit {

  // lineChart
  //public lineChartData:Array<any> = [
  //    [65, 59, 80, 81, 56, 55, 40],
  //  [28, 48, 40, 19, 86, 27, 90]
  //];
  //public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

  @Input() closable = true;
  @Input() visible: boolean;
  @Input() lineChartData: Array<any> ;
  @Input() lineChartLabels:Array<any> ;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() precoMin: number;
  @Input() precoMax: number;
  
  constructor() { }

  ngOnInit() {
  }

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}

import { Component ,Input , OnInit} from '@angular/core';
import { IProduct } from '../inventory.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{



  @Input()  products!:  IProduct[];
  @Input() searchTable!: IProduct | null;

  constructor(){}

}

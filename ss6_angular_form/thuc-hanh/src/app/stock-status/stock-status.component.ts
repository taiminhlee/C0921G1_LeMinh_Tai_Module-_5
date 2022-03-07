import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {
  @Input() stock = 0;
  @Input() productId = 0;
  @Output() stockValueChange = new EventEmitter();
  public color = '';
  public updatedStockValue = 0;
  constructor() { }

  ngOnInit(): void {
  }
  stockValueChanged() {
    this.stockValueChange.emit({
      id: this.productId,
      updatedStockValue: this.updatedStockValue});
    this.updatedStockValue = 0;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }

  }
}

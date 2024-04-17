import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrl: './filter-product.component.css'
})
export class FilterProductComponent {
  filterValue = ''
  @Output('filterValueChanged') filterTextChanged: EventEmitter<string> = new EventEmitter<string>()

  setFilterText(value: string) {
    this.filterValue = value
    this.filterTextChanged.emit(this.filterValue)
  }
}

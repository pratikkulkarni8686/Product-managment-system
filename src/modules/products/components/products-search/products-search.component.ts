import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent  {
  @Input('searchText') filterText = ''
  @Output('searchTextChanged') filterTextChanged = new EventEmitter<string>();

  constructor() {

  }
  onfilterTextChanged(updatedText: string) {
      this.filterText = updatedText;
      this.filterTextChanged.emit(this.filterText)
  }

}

import { Component } from '@angular/core';
import { Product } from '../../models/products.model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      name: 'Lenovo Thinkpad',
      code: 'Len',
      price: 79000,
      imagePath:
        'https://www.notebookcheck.net/fileadmin/Notebooks/Lenovo/ThinkPad_L14_G2_AMD/teaser.jpg',
      description: 'With latest technology',
      releaseDate: '26/11/2021',
      rating: 4
    },
    {
      name: 'Iphone13 Pro Max',
      code: 'Iphone',
      price: 129999,
      imagePath:
        'https://cellbuddy.in/wp-content/uploads/2021/09/Apple-iPhone-13-Pro-Smartphones-491997730-i-2-1200Wx1200H.jpeg',
      description: 'With A14 chip',
      releaseDate: '20/11/2021',
      rating: 4.5
    },
    {
        name: 'Samsung Tv',
        code: 'Sam',
        price: 59000,
        imagePath:
          'https://images.samsung.com/is/image/samsung/p6pim/in/ua65au9070ulxl/gallery/in-crystal-uhd-au9000-ua65au9070ulxl-thumb-422293445?$320_320_PNG$',
        description: 'Crystal Ultra HD Display',
        releaseDate: '26/11/2021',
        rating: 4.2
      },
      {
        name: 'Oven Toast Grill',
        code: 'Oven',
        price: 14000,
        imagePath:
          'https://images.philips.com/is/image/philipsconsumer/6b45e4c2bf7e42fbbfc6adbf0135c7ca?wid=420&hei=360&$jpglarge$',
        description: 'Multi functional modes',
        releaseDate: '20/11/2021',
        rating: 3.5
      }
  ];

  constructor() {

  }

  listFilterText = ''
  updateFilterText(filterTextData: string) {
    this.listFilterText = filterTextData
  }

}


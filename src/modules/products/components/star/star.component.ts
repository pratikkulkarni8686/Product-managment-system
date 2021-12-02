import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
    @Input('ratingValue') ratingData: number = 0;
    widthValue: number = 100;
    constructor() {

    }
    ngOnInit(): void {
        this.widthValue = 16 * this.ratingData;
    }

}
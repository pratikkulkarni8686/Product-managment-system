import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseMessage } from '../models/responsemessage.model';


@Injectable()
export class ProductsService {
    private baseUrl: string ;
    constructor(private _http : HttpClient){
        this.baseUrl = environment.restfulBaseUrl;
    }
    getProducts():Observable<ResponseMessage> {
        return this._http.get<ResponseMessage>(`${this.baseUrl}/products`)
    }
    removeProducts(id:number):Observable<ResponseMessage> {
        return this._http.delete<ResponseMessage>(`${this.baseUrl}/product/${id}`)
    }
}
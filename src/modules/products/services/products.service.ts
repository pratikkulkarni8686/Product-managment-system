import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResponseMessage } from '../models/responsemessage.model';
import { AppService } from 'src/modules/shared/models/service.models';
import { Product } from '../models/products.model';


@Injectable()
export class  ProductsService implements AppService<Product, ResponseMessage> {
    private baseUrl: string ;
    constructor(private _http : HttpClient){
        this.baseUrl = environment.restfulBaseUrl;
    }
    getAll(): Observable<ResponseMessage> | undefined {
        return this._http.get<ResponseMessage>(`${this.baseUrl}/products`)
    }
    remove<TId>(id: TId): Observable<ResponseMessage> | undefined {
        return this._http.delete<ResponseMessage>(`${this.baseUrl}/product/${id}`)
    }
    add(data: Product): Observable<ResponseMessage> | undefined {
        return this._http.post<ResponseMessage>(`${this.baseUrl}/products`, data)
    }
    get<TId>(id: TId): Observable<ResponseMessage> | undefined {
        return this._http.get<ResponseMessage>(`${this.baseUrl}/product/${id}`)
    }
    update(data: Product): Observable<ResponseMessage> | undefined {
        throw new Error('Method not implemented.');
    }
    // getProducts():Observable<ResponseMessage> {
    //     return this._http.get<ResponseMessage>(`${this.baseUrl}/products`)
    // }
    // removeProducts(id:string):Observable<ResponseMessage> {
    //     return this._http.delete<ResponseMessage>(`${this.baseUrl}/product/${id}`)
    // }
}
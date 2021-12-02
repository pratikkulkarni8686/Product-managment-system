import { Product } from 'src/modules/products/models/products.model';
export interface ResponseMessage {
    code: number;
    data?: Product | Product[] | string | undefined | null;
    errormessage?: string;
}
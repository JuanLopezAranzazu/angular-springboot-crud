import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../models/product.model';

// headers para las peticiones http
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  // obtener todos los productos
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.API_URL}/products`);
  }

  // obtener un producto por id
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.API_URL}/products/${id}`);
  }

  // crear un producto
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      `${environment.API_URL}/products`,
      product,
      httpOptions
    );
  }

  // editar un producto
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(
      `${environment.API_URL}/products/${id}`,
      product,
      httpOptions
    );
  }

  // eliminar un producto
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.API_URL}/products/${id}`);
  }
}

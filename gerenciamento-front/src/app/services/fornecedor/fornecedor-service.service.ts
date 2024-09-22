import { Injectable } from '@angular/core';
import { Fornecedor } from '../../models/fornecedor/fornecedor';
import { environment } from '../../environments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorServiceService {
  API = environment.apiUrl+'fornecedor';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  findById(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.API}/${id}`, { headers: this.getAuthHeaders() });
  }

  findAll(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.API, { headers: this.getAuthHeaders() });
  }

  cadastrar(fornecedor: Fornecedor): Observable<string> {
    return this.http.post(this.API, fornecedor, {
      headers: this.getAuthHeaders(),
      responseType: 'text'
    });
  }

  atualizar(id: number, fornecedor: Fornecedor): Observable<string> {
    const url = `${this.API}/atualizar/${id}`;
    return this.http.put(url, fornecedor, {
      headers: this.getAuthHeaders(),
      responseType: 'text'
    });
  }

  deletar(id: number): Observable<string> {
    const url = `${this.API}/deletar/${id}`;
    return this.http.delete(url, {
      headers: this.getAuthHeaders(),
      responseType: 'text'
    });
  }
}

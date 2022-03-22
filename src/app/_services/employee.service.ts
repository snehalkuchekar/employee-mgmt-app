import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../_models';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.apiUrl}/employees`;

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get<Employee[]>(baseUrl);
  }

  getById(id: string) {
    return this.http.get<Employee>(`${baseUrl}/${id}`);
  }

  create(params: any) {
    return this.http.post(baseUrl, params);
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}/${id}`, params);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  search(value: string){
    return this.http.get<Employee[]>(`${baseUrl}?fullName=${value}`);
  }
}

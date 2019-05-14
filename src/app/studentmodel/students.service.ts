import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  LIVE_URI = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}
  getStudents() {
    return this.httpClient.get(`${this.LIVE_URI}/students`);
  }
}

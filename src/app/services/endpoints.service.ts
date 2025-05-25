import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import { APPCONSTANTS } from '../constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  private backendBaseUrl: string;
  constructor(private http: HttpClient) {
    // Initialize the backend base URL from the environment configuration
    this.backendBaseUrl = environment.baseEndpointUrl;
  }

  // GET all students
  getStudents(): Observable<any[]> {
    return this.http.get<any>(this.backendBaseUrl + APPCONSTANTS.ENDPOINTS.STUDENTS);
  }

  // GET a single student by ID
  getStudentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.backendBaseUrl + APPCONSTANTS.ENDPOINTS.STUDENTS}/${id}`);
  }

  // GET a single student by Name
  getStudentByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.backendBaseUrl + APPCONSTANTS.ENDPOINTS.STUDENTSNAME}/${name}`);
  }

  // POST - create a new student
  createStudent(studentData: any): Observable<any> {
    return this.http.post<any>(this.backendBaseUrl + APPCONSTANTS.ENDPOINTS.STUDENTS, studentData);
  }

  // PUT - update an existing student
  updateStudent(id: string, studentData: any): Observable<any> {
    return this.http.put<any>(`${this.backendBaseUrl + APPCONSTANTS.ENDPOINTS.STUDENTS}/${id}`, studentData);
  }

  // DELETE - remove a student
  deleteStudent(id: string): Observable<any> {
    return this.http.delete<any>(`${this.backendBaseUrl + APPCONSTANTS.ENDPOINTS.STUDENTS}/${id}`);
  }
}

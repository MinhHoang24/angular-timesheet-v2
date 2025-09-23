import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Gửi GET request
  get<T>(url: string, options?: { params?: HttpParams, headers?: HttpHeaders }): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${url}`, options)
      .pipe(catchError(this.handleError));
  }

  // Gửi POST request
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${url}`, body)
      .pipe(catchError(this.handleError));
  }

  // Gửi PUT request
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${url}`, body)
      .pipe(catchError(this.handleError));
  }

  // Gửi DELETE request
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${url}`)
      .pipe(catchError(this.handleError));
  }

  // Hàm xử lý lỗi chung cho tất cả các request
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Lỗi xảy ra ở phía client
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      // Lỗi xảy ra ở phía server
      errorMessage = `Server error: ${error.status} - ${error.message}`;
    }
    return throwError(errorMessage);
  }
}

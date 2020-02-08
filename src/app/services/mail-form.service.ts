import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailFormService {
url = 'https://script.google.com/macros/s/AKfycbyyLtlgX7mzDTGveY1e9do7__7jLkYQyyy4J83TmTHLlG4gnQU/exec';

  constructor(private httpClient: HttpClient) {
  }
  handleFormSubmit(email): Observable<any> {
    let params = new HttpParams();

    params = params.append('email', email);

   return this.httpClient.post(this.url, 'cmvalidtoken', {params: params});
  }

  validateEmail(email): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
}

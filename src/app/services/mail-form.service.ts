import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailFormService {
url = 'https://script.google.com/macros/s/AKfycbzhqnU4SRjU5CEQIX62TTV-nMKPv9eWyNP6dkZFCBbwQkyPxtO_/exec';

  constructor(private httpClient: HttpClient) {
  }
  handleFormSubmit(email): Observable<any> {
    let params = new HttpParams();

    params = params.append('Email_Address', email);

   return this.httpClient.post(this.url, 'cmvalidtoken', {params: params});
  }

  validateEmail(email): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }
}

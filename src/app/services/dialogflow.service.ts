import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Intent } from '../types/intent.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {

  token = '9a98df5d19614990bc0e0dcdb05a8240';

  constructor(private http: HttpClient) { }

  fetchIntents(): Promise<Intent[]> {
    const headers = {
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };

    const options = { headers };

    return this.http.get('https://api.dialogflow.com/v1/intents?v=20150910', options).toPromise() as any;
  }
}

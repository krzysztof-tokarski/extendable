import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@extendable/api-interfaces';
import { environment } from '../environments/environment';

@Component({
  selector: 'extendable-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>(`${environment.API_URL}/hello`);

  constructor(private http: HttpClient) {}
}

import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('subEmail') subEmail: ElementRef;
  title = 'K&M';

  ngOnInit() {
  }

  submitEmail(event: Event) {
    const url = 'https://script.google.com/macros/s/AKfycbzhqnU4SRjU5CEQIX62TTV-nMKPv9eWyNP6dkZFCBbwQkyPxtO_/exec';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    event.preventDefault();
    
    this

  }
}

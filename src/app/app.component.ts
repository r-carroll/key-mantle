import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { MailFormService } from './services/mail-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('subEmail') subEmail: ElementRef;
  title = 'K&M';
  formService;

  ngOnInit() {
  }

  constructor(formService: MailFormService) {
    this.formService = formService;
  }

  submitEmail(event: Event) {

    this.formService.handleFormSubmit(event);
    return;
  }
}

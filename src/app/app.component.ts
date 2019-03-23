import { Component, OnInit, ViewChild, HostListener, ElementRef } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { MailFormService } from './services/mail-form.service';
import { NgbdModalBasic } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('subEmail') subEmail: ElementRef;
  title = 'K&M';
  formService;
  email;


  ngOnInit() {
  }

  constructor(formService: MailFormService, private modalComponent: NgbdModalBasic) {
    this.formService = formService;
  }

  submitEmail(event: Event) {

    this.modalComponent.open(null);
    // this.formService.handleFormSubmit(this.email).subscribe(data => {
    //   // Success message
    //   this.email = '';
    //   this.modalComponent.open(null);
    // });
    return;
  }
}

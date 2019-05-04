import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MailFormService } from '../services/mail-form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('subEmail') subEmail: ElementRef;
  @ViewChild('toggleModal') toggleModal: ElementRef;
  @ViewChild('template') modalTemplate: ElementRef;
  title = 'K&M';
  formService;
  email;
  modalRef: BsModalRef;
  validEmail = true;
  bot;
  isSubmitting = false;


  ngOnInit() {
  }

  constructor(formService: MailFormService, private modalService: BsModalService) {
    this.formService = formService;
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
}

  submitEmail(event: Event) {
    if (!this.bot) {
      if (!this.formService.validateEmail(this.email)) {
        this.validEmail = false;
      } else {
        this.validEmail = true;
        this.isSubmitting = true;
        this.formService.handleFormSubmit(this.email).subscribe(data => {
        this.email = '';
        this.isSubmitting = false;
        this.openModal(this.modalTemplate);
      });
      }
    }
    return;
  }

}

import { Component, OnInit, ViewChild, HostListener, ElementRef, TemplateRef } from '@angular/core';
import { MailFormService } from './services/mail-form.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('subEmail') subEmail: ElementRef;
  @ViewChild('toggleModal') toggleModal: ElementRef;
  @ViewChild('template') modalTemplate: ElementRef;
  title = 'K&M';
  formService;
  email;
  modalRef: BsModalRef;


  ngOnInit() {
  }

  constructor(formService: MailFormService, private modalService: BsModalService) {
    this.formService = formService;
  }

  openModal(template) {
    this.modalRef = this.modalService.show(template,{ backdrop: 'static', keyboard: false });
}

  submitEmail(event: Event) {

    // this.toggleModal.nativeElement.click();
    this.openModal(this.modalTemplate);
    // this.formService.handleFormSubmit(this.email).subscribe(data => {
    //   // Success message
    //   this.email = '';
    //   this.modalComponent.open(null);
    // });
    return;
  }
}

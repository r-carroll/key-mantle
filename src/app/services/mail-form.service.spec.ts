import { TestBed } from '@angular/core/testing';

import { MailFormService } from './mail-form.service';

describe('MailFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailFormService = TestBed.get(MailFormService);
    expect(service).toBeTruthy();
  });
});

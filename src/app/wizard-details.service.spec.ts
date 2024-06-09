import { TestBed } from '@angular/core/testing';
import { WizardComponent } from './wizard/wizard.component';

describe('WizardDetailsService', () => {
  let service: WizardDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

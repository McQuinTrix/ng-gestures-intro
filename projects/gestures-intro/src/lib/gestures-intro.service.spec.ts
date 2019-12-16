import { TestBed, inject } from '@angular/core/testing';

import { GesturesIntroService } from './gestures-intro.service';

describe('GesturesIntroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GesturesIntroService]
    });
  });

  it('should be created', inject([GesturesIntroService], (service: GesturesIntroService) => {
    expect(service).toBeTruthy();
  }));
});

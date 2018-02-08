import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { DataTransferService } from './data-transfer.service';

describe('DataTransferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataTransferService],
      imports:[HttpClientModule]
    });
  });

  it('should be created', inject([DataTransferService], (service: DataTransferService) => {
    expect(service).toBeTruthy();
  }));
});

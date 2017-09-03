import { TestBed, inject } from '@angular/core/testing';

import { DashboardStoreService } from './dashboard-store.service';

describe('DashboardStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardStoreService]
    });
  });

  it('should be created', inject([DashboardStoreService], (service: DashboardStoreService) => {
    expect(service).toBeTruthy();
  }));
});

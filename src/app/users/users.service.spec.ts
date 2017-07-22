import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersServiceService]
    });
  });

  it('should ...', inject([UsersServiceService], (service: UsersServiceService) => {
    expect(service).toBeTruthy();
  }));
});

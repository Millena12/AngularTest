import { TestBed, inject } from '@angular/core/testing';

import { FilterByPipe } from './courses.service';

describe('FilterByPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterByPipe]
    });
  });

  it('should be created', inject([FilterByPipe], (service: FilterByPipe) => {
    expect(service).toBeTruthy();
  }));
});

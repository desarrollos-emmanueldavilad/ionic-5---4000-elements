import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { DbService } from './db.service';

const methods = {
  get: 'GET'
};

describe('DbService', () => {
  let service: DbService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpHandler,
        HttpClient
      ]
    });
    service = TestBed.inject(DbService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be add', async () => {
    const val = await service.getList(true);
    console.log(val);
    // expect(val).toEqual(userMockGet.id);
  });
});

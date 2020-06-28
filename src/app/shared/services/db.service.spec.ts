import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { DbService } from './db.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { InjectionToken } from '@angular/core';
export const BASE_URL = new InjectionToken<string>('BASE_URL');
describe('Service', () => {
  let service: DbService;
  let httpTestingController: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ],
        providers: [
        { provide: BASE_URL, useValue: 'http://localhost:3000/sanitas' },
        DbService,
        HttpClient
        ]
    });
  });

  it('should be created', () => {
    const service: DbService = TestBed.get(DbService);
    expect(service).toBeTruthy();
   });
});


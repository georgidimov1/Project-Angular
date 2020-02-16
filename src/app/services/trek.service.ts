import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Trak from '../models/traks';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrekService {
  baseUrl = 'https://baas.kinvey.com';
  kinveyModule = 'appdata';
  appKey = 'kid_HkP-y2r2S';
  appSecret = '1372ee77d9ae420399fa410adc10084d';
  endpoint = '';
  url = `${this.baseUrl}/${this.kinveyModule}/${this.appKey}/${this.endpoint}`;
  constructor(private http: HttpClient) {}
  getAllTreks(): Observable<Trak[]> {
    return this.http.get<Trak[]>(this.url);
  }
}

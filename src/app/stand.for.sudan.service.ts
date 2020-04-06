import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiModel} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class StandForSudanService {

  constructor(private httpClient:HttpClient) { }

  getStatistic(){
    var url = 'https://standforsudan.ebs-sd.com/StandForSudan/getStandForSudanStatstics';
    return this.httpClient.get<ApiModel>(url);
  }
}

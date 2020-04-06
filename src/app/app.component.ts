import {Component, OnInit} from '@angular/core';
import {StandForSudanService} from './stand.for.sudan.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  apiModel:ApiModel = new ApiModel();
  errorMsg : string;
  isLoading:boolean = false;
   constructor(private standForSudanService:StandForSudanService) {

   }

  ngOnInit(): void {
     this.isLoading = true;
    this.standForSudanService.getStatistic().subscribe(value => {
      this.apiModel = value;
      this.isLoading = false;
    } , error => {
      this.errorMsg = error.error.message;
      this.isLoading = false;
    });
    }

}

export class ApiModel {
  numberOfTransaction:number;
  totalAmount:number;
}

import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/services/db.service';



@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.scss'],
})



export class GetListComponent implements OnInit {

 
  private url: string;
  public  itemListData = [];
  private PAGE_NUMBER = 1;
  private  PAGE_LIMIT = 8;
  public searchText: string = "";
  constructor(protected dataBaseService: DbService) { 
    
  }

  ngOnInit() {
    this.getAllData(false, '');
  }


  
 private getAllData(isFirstLoad, event) {
  this.url = '?_page=' + this.PAGE_NUMBER + '&_limit=' + this.PAGE_LIMIT;
  this.dataBaseService.getList(this.url)
    .subscribe((data: any) => {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < data.length; i++) {
        this.itemListData.push(data[i]);
      }
      if (isFirstLoad) {
        event.target.complete();
      }
      this.PAGE_NUMBER++;
    }, error => {
      console.error(error);
    });
}


public doInfinite(event) {
  this.getAllData(true, event);
}


}

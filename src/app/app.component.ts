import { Component, OnInit } from '@angular/core';
import { HttpModule } from  '@angular/http';
import { ConsoApiService} from  './conso-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export  class  AppComponent implements  OnInit {
    title = 'app';
    private  datas;
    constructor(private  ConsoApiService:  ConsoApiService) { }
    ngOnInit() {
        this.getData();
    }
    public  getData(){
        this.ConsoApiService.getData().subscribe(res => {
            this.datas  = res.json().data;
           
            
        });
    }
    }

  
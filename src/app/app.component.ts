import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsoApiService} from  './conso-api.service';
import { Config } from 'protractor';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export  class  AppComponent implements  OnInit {
    title = 'app';
   
    constructor(private  ConsoApiService:  ConsoApiService) { }
    ngOnInit() {
        
    }
 
    }

  
import { Injectable } from  '@angular/core';
import { Http} from  '@angular/http';


@Injectable({
providedIn:  'root'
})

export  class  ConsoApiService {
  
  constructor(private  httpModule:  Http) {}
  getData(){
      return  this.httpModule.get(`https://api.myglamapp.pl/api/categories?language=EN`);

}}

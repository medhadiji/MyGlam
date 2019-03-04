import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
providedIn:  'root'
})


export  class  ConsoApiService {
  configUrl=`https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN`;
  
  constructor(private  http:  HttpClient) {}
  


getConfig() {
  
  return this.http.get(this.configUrl);
}


}

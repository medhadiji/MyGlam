import { Component, OnInit } from '@angular/core';
import { ConsoApiService } from '../conso-api.service';



@Component({
  selector: 'app-slider1',
  templateUrl: './slider1.component.html',
  styleUrls: ['./slider1.component.css'],
  
})
export class Slider1Component implements OnInit {
  private  datas;
  constructor(private  test : ConsoApiService) { }
  ngOnInit() {
    this.test.getData().subscribe(res => {
      this.datas  = res.json().data;
     console.log(this.datas);
      
  });
  }
}


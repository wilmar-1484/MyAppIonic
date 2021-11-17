import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}
  ngOnInit(){
    let numero=20;
  
    numero=10;
    numero=numero+15;
    numero =3;
    console.log(numero);



  }
}

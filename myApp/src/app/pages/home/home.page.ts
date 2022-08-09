import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToPickupCalls(){
    this.router.navigate(['pickup-calls']);
  }
  newPickupCall(){
    this.router.navigate(['pickup-call']);
  }
}

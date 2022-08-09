import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call',
  templateUrl: './pickup-call.page.html',
  styleUrls: ['./pickup-call.page.scss'],
})
export class PickupCallPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  newPickupCall(){
    this.router.navigate(['home']);
  }
}

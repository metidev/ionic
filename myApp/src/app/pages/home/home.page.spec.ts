import { AppRoutingModule } from './../../app-routing.module';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('should go to pickup-calls page on see all',() => {
    spyOn(router, 'navigate');
    component.goToPickupCalls();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  })

  it('should go to new pickup call page on create pickup',() => {
    spyOn(router, 'navigate');
    component.newPickupCall();
    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  })
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

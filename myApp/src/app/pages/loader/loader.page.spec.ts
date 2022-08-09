import { AppRoutingModule } from './../../app-routing.module';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [
        IonicModule.forRoot(),
        AppRoutingModule
      ]
    }).compileComponents();   

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should go login page after load',fakeAsync(() => {
    spyOn(router, 'navigate');
    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login'])
  }))  
});

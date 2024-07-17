import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { provideHttpClient } from '@angular/common/http';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      providers:[provideHttpClient()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logout should be defined', () => {
    expect(component.handleLogout()).toBeDefined;
  });

  it('logout should call localstorage.setItem with userLogin = false', () => {
    spyOn(localStorage, 'setItem');

    component.handleLogout();

    expect(localStorage.setItem).toHaveBeenCalledWith('userLogin', 'false');
  });

});

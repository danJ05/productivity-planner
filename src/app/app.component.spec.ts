import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './core/authentication.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HttpClientModule // Ajout du HttpClientModule
      ],
      providers: [
        AuthenticationService // Ajout du service d'authentification
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, productivity-planner');
  });
});

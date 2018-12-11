import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TulsaComponent } from './tulsa.component';

describe('TulsaComponent', () => {
  let component: TulsaComponent;
  let fixture: ComponentFixture<TulsaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TulsaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TulsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

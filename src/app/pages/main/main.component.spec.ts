import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [MainComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create MainComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should be created ngOnInit() function', () => {
    expect(component.ngOnInit).toBeTruthy();
  });

  it('should be created ngOnDestroy() function', () => {
    expect(component.ngOnDestroy).toBeTruthy();
  });

  it('should be created onPaginationChanged() function', () => {
    expect(component.onPaginationChanged).toBeTruthy();
  });
});

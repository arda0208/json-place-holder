import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponent } from './post.component';
import { By } from '@angular/platform-browser';
import { PostItem } from 'src/app/models/post-item/postItem.class';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define ngOnInit()', () => {
    expect(component.ngOnInit).toBeDefined();
  });

  it('should define toggleShowUserId()', () => {
    expect(component.toggleShowUserId).toBeDefined();
  });

  it('should render title', () => {
    component.post = new PostItem({
      userId: '10',
      id: '20',
      title: 'mockTitle',
      body: 'mockBody',
    });
    fixture.detectChanges();
    const title = fixture.debugElement.query(By.css('.item__title'))
      .nativeElement.textContent;
    expect(title).toBe('20');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jo2024Component } from './jo2024.component';

describe('Jo2024Component', () => {
  let component: Jo2024Component;
  let fixture: ComponentFixture<Jo2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Jo2024Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Jo2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTextComponent } from './common-text.component';

describe('CommonTextComponent', () => {
  let component: CommonTextComponent;
  let fixture: ComponentFixture<CommonTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

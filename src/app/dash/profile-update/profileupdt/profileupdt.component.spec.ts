import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileupdtComponent } from './profileupdt.component';

describe('ProfileupdtComponent', () => {
  let component: ProfileupdtComponent;
  let fixture: ComponentFixture<ProfileupdtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileupdtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileupdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { adminComponent } from './admin.component';



describe('adminComponent', () => {
  let component: adminComponent;
  let fixture: ComponentFixture<adminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [adminComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(adminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

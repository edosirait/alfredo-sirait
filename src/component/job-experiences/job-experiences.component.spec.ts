import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExperiencesComponent } from './job-experiences.component';

describe('JobExperiencesComponent', () => {
  let component: JobExperiencesComponent;
  let fixture: ComponentFixture<JobExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobExperiencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

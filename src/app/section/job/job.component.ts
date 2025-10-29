import {AfterViewInit, Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {JobExperienceService} from './service/job-experience.service';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-markup';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit, AfterViewInit, OnDestroy {
  jobExperiences: any[] = [];
  selectedJob: any = null;
  isSidebarOpen = false;
  isMobileView = false;

  constructor(private jobService: JobExperienceService) {}

  ngOnInit(): void {
    this.checkViewport();
    this.fetchListJob();
  }

  ngAfterViewInit(): void {
    setTimeout(() => Prism.highlightAll(), 0);
  }

  @HostListener('window:resize', [])
  onResize(): void {
    this.checkViewport();
  }

  private checkViewport(): void {
    this.isMobileView = window.innerWidth <= 702;
  }

  fetchListJob(): void {
    this.jobService.getJobExperiences().subscribe((data) => {
      this.jobExperiences = data;
      this.selectedJob = data[0];
    });
  }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    document.body.style.overflow = this.isSidebarOpen ? 'hidden' : 'auto';
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
    document.body.style.overflow = 'auto';
  }

  selectJob(job: any): void {
    this.selectedJob = job;
    if (this.isMobileView) {
      this.closeSidebar();
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = 'auto';
  }

}

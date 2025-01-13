import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-job-experiences',
  imports: [
    CommonModule
  ],
  templateUrl: './job-experiences.component.html',
  standalone: true,
  styleUrl: './job-experiences.component.css'
})
export class JobExperiencesComponent implements AfterViewInit {
  @ViewChildren('carouselRef') carousels!: QueryList<ElementRef>;

  // Auto-scroll interval
  autoScrollInterval: any;

  ngAfterViewInit() {
    // Initialize auto-scroll
    this.carousels.forEach((carousel) => {
      const el = carousel.nativeElement;

      this.autoScrollInterval = setInterval(() => {
        const scrollPosition = el.scrollLeft + el.clientWidth;

        if (scrollPosition >= el.scrollWidth) {
          // Reset to start
          el.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to the right
          el.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 3000);
    });
  }

  scrollLeft(index: number) {
    const carousel = this.carousels.toArray()[index]?.nativeElement;

    if (carousel) {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight(index: number) {
    const carousel = this.carousels.toArray()[index]?.nativeElement;

    if (carousel) {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }

  initializeSwipeListeners(el: HTMLElement) {
    let startX = 0;

    el.addEventListener('touchstart', (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    });

    el.addEventListener('touchmove', (e: TouchEvent) => {
      const deltaX = e.touches[0].clientX - startX;

      if (deltaX > 50) {
        el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' }); // Swipe ke kiri
      } else if (deltaX < -50) {
        el.scrollBy({ left: el.clientWidth, behavior: 'smooth' }); // Swipe ke kanan
      }
    });
  }

  jobExperiences = [
    {
      title: "Senior Frontend Developer",
      company: "POS Malaysia",
      duration: "July 2024 - Dec 2024",
      description:
        "Developed and maintained features for the Pos Malaysia web application, focusing on creating seamless customer experiences through modern Angular development practices.",
      tasks: [
        "Developed features and UI from Figma with Angular 14.",
        "Created reusable components and developed features as per Figma.",
        "Created unit tests to ensure the project's quality.",
        "Mapped data to required components according to existing requirements.",
        "Developed modular components.",
        "Utilized state management with RXJS.",
        "Worked with pipe, components, and directives.",
        "Collaborated with clients during grooming sessions.",
        "Performed unit testing and coverage.",
      ],
      technologies: ["Angular 14", "Figma", "RXJS", "Jasmine", "Karma"],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/POS_Logo.svg/220px-POS_Logo.svg.png',
      url: 'https://www.pos.com.my/'
    },
    {
      title: "Software Engineer",
      company: "Photon Interactive Labs",
      duration: "September 2022 - July 2022",
      description:
        "Worked on multiple mobile and web applications using cutting-edge technologies such as Angular, IONIC, React, and React Native.",
      projects: [
        {
          name: "Texas Road House - Mobile Apps IONIC Angular",
          description:
            "Developed the initial features of a cellular application (Texas Roadhouse POS) with food ordering and consumer-friendly features using .Net for the back end and Ionic for the front end. Applied integrated unit testing using Karma and Jasmine-Testing-Library.",
          tasks: [
            "Developed mobile applications from scratch using IONIC with Angular 15.",
            "Created document props UI confluence using Azure DevOps Service.",
            "Created API specs and contracts.",
            "Created reusable components and developed features as per Figma.",
            "Created unit tests to ensure the projects passed all quality benchmarks.",
            "Developed an interceptor to handle several global needs.",
            "Mapped data to each required component according to existing requirements.",
            "Developed modular components.",
            "Used new technology with NGRX (full state programming).",
            "Worked with pipe, components, and directives.",
            "Introduced atomic design principles, reducing code duplication by over 80%.",
            "Communicated with the India team to create new features.",
            "Groomed sessions with US clients.",
            "Performed unit testing and coverage.",
          ],
          technologies: ["IONIC", "Angular 15", "Azure DevOps", "NGRX", "Jasmine", "Karma"],
          image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Texas_Roadhouse.svg/1200px-Texas_Roadhouse.svg.png',
          url: 'https://www.texasroadhouse.com/'
        },
        {
          name: "Volvo Cars - Web Application ReactJS",
          description:
            "Developed a web application to simplify searching, ordering, paying, credit, and processing car purchases. Responsible for maintaining bug fixes and ensuring a smooth user experience.",
          tasks: [
            "Developed the front end using React Next.js.",
            "Created detailed features for car comparison.",
            "Created functions with Redux and state for passing and calling data.",
            "Fixed feature defects.",
            "Standardized code smell fixes.",
            "Used SSR and analytics for web applications.",
          ],
          technologies: ["ReactJS", "Redux", "SSR", "Next.js", "Jest"],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volvo-Iron-Mark-Black.svg/150px-Volvo-Iron-Mark-Black.svg.png',
          url: 'https://www.volvocars.com/'
        },
        {
          name: "Avis Car Rental - Mobile Apps React Native",
          description:
            "Focused on mobile-based applications to simplify searching, ordering, paying, and processing car rentals. Applied integrated unit testing using Jest and React-Native-Testing-Library.",
          tasks: [
            "Developed the front end using React Native.",
            "Created reusable components with dropdowns and dynamic data.",
            "Created functions with Redux and state for filtering counts.",
            "Fixed feature defects.",
            "Standardized code smell fixes.",
            "Performed unit testing and coverage.",
          ],
          technologies: ["React Native", "Redux", "Jest", "React-Native-Testing-Library"],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/AVIS_logo_2012.svg/220px-AVIS_logo_2012.svg.png',
          url: 'https://www.avis.com/en/home'
        },
        {
          name: "Focus Brand - Mobile Apps React Native",
          description:
            "Developed and maintained mobile-based applications for ordering food online. Focused on user-friendly features and reducing bugs using Jest and React-Native-Testing-Library.",
          tasks: [
            "Developed and maintained mobile applications using React Native.",
            "Created reusable components and developed features as per Figma.",
            "Created unit tests to ensure quality benchmarks were met.",
            "Created notifications features.",
            "Configured Firebase Cloud Messaging using React Native Firebase.",
            "Communicated with the India team to create new features.",
            "Groomed sessions with US clients.",
            "Performed unit testing and coverage.",
          ],
          technologies: ["React Native", "Firebase", "Jest", "React-Native-Testing-Library"],
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Focus_Brands_Logo.png/220px-Focus_Brands_Logo.png',
          url: 'https://www.gotofoods.com/'
        },
      ]
    },
    {
      title: "Angular Developer",
      company: "8I Holdings Singapore (Remote)",
      duration: "December 2021 - August 2022",
      description:
        "Developed web applications for stock analysis and feature enhancement using Angular.",
      tasks: [
        "Developed new features for stock analysis.",
        "Created functions for searching stocks with filtering capabilities.",
        "Developed modular components.",
        "Collaborated with the Singapore team to create new features.",
        "Performed code smell standardization.",
      ],
      technologies: ["Angular 7", "PrimeNG", "Jasmine", "Karma"],
      image: 'https://www.8iholdings.com/assets/svg/logo-8ih.svg',
      url: 'https://www.8iholdings.com/'
    },
    {
      title: "Angular Developer",
      company: "PT Axiata Digital Labs (Remote)",
      duration: "January 2021 - March 2022",
      description:
        "Built and maintained web applications for employee management and office area access.",
      tasks: [
        "Developed front-end using Angular 10.",
        "Created reusable components and features as per Figma.",
        "Performed unit testing and code review.",
      ],
      technologies: ["Angular 10", "Jasmine", "Karma"],
      image: 'https://www.newxlife.xl.co.id/en/assets/XLife.png',
      url: 'https://www.newxlife.xl.co.id/'
    },
    {
      title: "Software Engineer",
      company: "Jati Piranti Solutions",
      duration: "August 2018 - August 2021",
      description:
        "Worked on multiple web applications, including auction systems and investment platforms, using Angular and Java.",
      projects: [
        {
          name: "CarReady - Web Application",
          description:
            "Developed features for an auction system using Angular and Java.",
          tasks: [
            "Developed web applications using Angular 7.",
            "Created modular concept patterns in Angular projects.",
            "Created APIs and services for profile and detail list data.",
            "Responsible for deploying to SIT and UAT environments.",
          ],
          technologies: ["Angular 7", "Angular 10", "Angular 11", "Tailwind", "Angular Material", "Java"],
          image: 'https://caready.co.id/static/media/caready-logo.fa754e26b8e266fb593c.webp',
          url: 'https://caready.co.id/'
        },
        {
          name: "PNM Investment - Web Application",
          description:
            "Developed features of an investment system using AngularJS.",
          tasks: [
            "Supported and maintained new features for the CMS.",
          ],
          technologies: ["AngularJS"],
          image: 'https://www.pnmim.com/assets/assets_web/img/logo%20PNMIM.png',
          url: 'https://www.pnmim.com/'
        },
        {
          name: "Danareksa Investment Management - Web Application",
          description:
            "Developed features for an investment system using AngularJS.",
          tasks: [
            "Handled change requests for CMS (Payment Method System).",
          ],
          technologies: ["AngularJS"],
          image: 'https://danareksa.co.id/images/navbar-logo-danareksa.png',
          url: 'https://danareksa.co.id/en/service/financial-service/pt-bri-manajemen-investasi',
        },
        {
          name: "BDI Mutual Fund OmniChannel Integration - Web Application",
          description:
            "Developed features for an investment system using Angular 5.",
          tasks: [
            "Handled change requests for authentication systems.",
          ],
          technologies: ["Angular 5"],
          image: 'https://www.danamon.co.id/-/media/ICON-DCWCOID/LOGO-HEADER/v2/logo-danamon-new.jpg?h=65&iar=0&mh=65&w=260&hash=7956F6C1540D0E791F9382A68CF12C90',
          url: 'https://www.danamon.co.id/id/Personal/Investasi/Reksadana/Pendapatan-Tetap'
        },
      ],
    },
  ];
}


import { AfterViewInit, Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class AppComponent implements AfterViewInit {
  title = 'personal-profile';

  profilePicture: string = 'assets/public/lisong.png';

  jobExperiences = [
    {
      title: 'Senior Account Receivable',
      company: 'PT MOSTRANS GLOBAL DIGILOG',
      duration: 'Jan 2022 - Present',
      description:
        'Responsible for managing accounts receivable, ensuring timely collections, and maintaining financial reports.',
      tasks: [
        'Developed a streamlined invoicing system.',
        'Reduced overdue payments by 30% through improved communication.',
        'Collaborated with sales teams for financial forecasting.',
      ],
      technologies: ['SAP', 'Microsoft Excel', 'Power BI'],
      image:
        'https://mostrans.co.id/CompanyProfile/static/media/logo-mostrans.ff215158.png',
    },
    {
      title: 'Finance Staff',
      company: 'PT ENSEVAL PUTERA MEGATRADING TBK',
      duration: 'Jun 2021 - Dec 2021',
      description:
        'Assisted in financial operations, accounts payable, and preparing financial statements.',
      tasks: [
        'Automated repetitive accounting tasks.',
        'Managed over 50 accounts payable entries daily.',
      ],
      technologies: ['SAP', 'Microsoft Excel'],
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Logo_Enseval_Putera_Megatrading.png/220px-Logo_Enseval_Putera_Megatrading.png',
    },
    {
      title: 'Internship',
      company: 'DIREKTORAT JENDRAL PAJAK (KPP JAKARTA CAKUNG)',
      duration: 'Sept 2019 - Mar 2020',
      description:
        'Supported tax officers in administrative tasks and document handling.',
      tasks: [
        'Processed taxpayer data efficiently.',
        'Supported team during tax audits.',
      ],
      technologies: ['Microsoft Word', 'Microsoft Excel'],
      image: 'https://pajak.go.id/sites/default/files/LogoDJP11%20%281%29.png',
    },
    {
      title: 'Internship',
      company: 'MAHKAMAH PELAYARAN (KELAPA GADING)',
      duration: 'Sept 2019 - Mar 2020',
      description:
        'Provided administrative support and assisted in archiving legal documents.',
      tasks: [
        'Maintained case archives accurately.',
        'Assisted during legal proceedings.',
      ],
      technologies: ['Microsoft Office', 'Archiving Systems'],
      image: 'https://mahpel.dephub.go.id/web/images/logo-dephub-small.png',
    },
  ];

  currentJob: any[] = [
    {
      description: 'Exceeded AR collection targets with a 95% success rate'
    },
    {
      description: 'Monitor AR aging and prepare weekly Accounts Receivable reports for over 90 customers and 70 vendors.'
    },
    {
      description: 'Contact and follow up with customers and vendors regarding overdue payments, Statements of Account (SOA), providing payment details via WhatsApp, email, and telephone on a daily basis.'
    },
    {
      description: 'Handle special cases related to customer billing issues and complaints.'
    },
    {
      description: 'Coordinate with the Commercial Manager and team on outstanding AR balances and customer issues.'
    },
    {
      description: 'Reconcile invoice amounts from web platforms (Mostrans, Tableau) to Oracle to avoid discrepancies.'
    },
    {
      description: 'Adjust rounding differences for AR amounts of less than IDR 10 at the end of each month.'
    },
    {
      description: 'Manage the filing and archiving of invoice receipts, which is crucial for tracking payment deadlines.'
    }
  ];

  firstJob: string[] = [
    "Verified and ensured the completeness of 100+ Proof of Delivery (POD) documents daily.",
    "Reviewed and reconciled uninvoiced proof of delivery to ensure all billing remains issued.",
    "Issuing over 70 invoices per day, attaching tax invoices and ensuring timely receipt, with a total invoice amount averaging up to 780 mio/day.",
    "Ensured price accuracy between Quotation and system pricing and coordinate with Business Development related to price.",
    "Interacted with customers to resolve issues related to overdue invoices.",
    "Manually conducted invoice staging from web to oracle database daily.",
    "Assisted in providing essential data and information for both internal and external audit."
  ];

  intern1: string[] = [
    "Assisting taxpayers in the process of making EFIN.",
    "Provide administrative support in communication with taxpayers regarding to procedures and reporting income tax (PPh21)."
  ];

  intern2: string[] = [
    "Improving the Leadership Coordination Budget Plan.",
    "Ordering SPM number (Payment Order).",
    "Verifying data and numbering official travel of the Shipping Court Employees.",
    "Input PAGU/DIPA budget data for each section (finance & general equipment and matters).",
    "Create historical data on structural positions of the Head of Equipment and Finance."
  ];

  email: string = 'elisa.febriani.ef@gmail.com';
  // Smoothly scroll to a section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes when the element enters the viewport
            entry.target.classList.add('fade-in-visible', 'slide-in-visible');
          } else {
            // Remove animation classes when the element leaves the viewport (optional)
            entry.target.classList.remove('fade-in-visible', 'slide-in-visible');
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in').forEach((el) => {
      observer.observe(el);
    });
  }
}

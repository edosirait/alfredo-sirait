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

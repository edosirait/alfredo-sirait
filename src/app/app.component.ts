import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'personal-profile-clean';

  constructor() {
  }

  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    }
  }
}

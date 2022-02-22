import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-footer',
  templateUrl: './template-footer.component.html',
  styleUrls: ['./template-footer.component.scss']
})
export class TemplateFooterComponent implements OnInit {
  constructor() {
  }

  openWindow(href: string): void {
    window.open(href);
  }

  ngOnInit(): void {
  }
}

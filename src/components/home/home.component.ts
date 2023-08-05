import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pastData: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // TODO load pastData
  }

  handleNewGame(): void {
    this.router.navigateByUrl('configure')
  }

  handleContinue(): void {
    // TODO
  }

}

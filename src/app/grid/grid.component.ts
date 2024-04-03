import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from '../model/CardContent';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { MatCardAppearance } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [NgFor, MatCardModule, RouterOutlet, MatPaginatorModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent implements OnInit {
  @Input() appearance: MatCardAppearance | undefined;

  cardContents: CardContent[] = [];

  constructor() {}

  ngOnInit(): void {
    // Add 10 values to the cardContents array
    for (let i = 1; i <= 22; i++) {
      this.cardContents.push({
        title: `Title ${i}`,
        description: `Description ${i}`,
        imageUrl: '../../assets/dncc-logo.png',
        type: `Type ${i}`,
        time: `Time ${i}`,
        date: `Date ${i}`,
        duration: `Duration ${i}`,
        link: `Link ${i}`,
      });
    }
  }
  pageSize = 10; // Number of items per page
  currentPage = 0; // Current page number
  startIndex = 0; // Index of the first item on the current page
  endIndex = this.pageSize; // Index of the last item on the current page

  // Function to update the indices based on the current page
  updateIndices() {
    this.startIndex = this.currentPage * this.pageSize;
    this.endIndex = this.startIndex + this.pageSize;
  }

  // Function to handle page change event
  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.updateIndices();
  }
}

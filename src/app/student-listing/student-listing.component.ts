import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-listing',
  templateUrl: './student-listing.component.html',
  styleUrl: './student-listing.component.scss',
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class StudentListingComponent {

}

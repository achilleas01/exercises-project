import { Component, OnInit } from '@angular/core';
import { faScaleBalanced, faHouse, faBook, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    standalone: true,
    imports: [BsDropdownModule, RouterLink, FontAwesomeModule]
})
export class HeaderComponent implements OnInit {

  faHouseIcon = faHouse;
  faScaleIcon = faScaleBalanced;
  faBookIcon = faBook;
  fileIcon = faFileCirclePlus;

  
  constructor() { }

  ngOnInit(): void {
  }

}

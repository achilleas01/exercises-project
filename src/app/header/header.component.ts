import { Component, OnInit } from '@angular/core';
import { faScaleBalanced, faHouse, faBook, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
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

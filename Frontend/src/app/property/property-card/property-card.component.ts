import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Iproperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() property: Iproperty;

  edit: any = faEdit;
  contact: any = faAddressBook;

  constructor() { }

  ngOnInit(): void {
  }


}

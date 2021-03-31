import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  //  input to transfer the value of property from one component to another
  @Input() property: IPropertyBase;

  // input to hide icons conditionally
  @Input() hideIcons: boolean;

  edit: any = faEdit;
  contact: any = faAddressBook;

  constructor() { }

  ngOnInit(): void {
  }


}

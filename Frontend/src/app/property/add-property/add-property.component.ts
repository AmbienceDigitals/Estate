import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from '../iproperty.interface';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  // SellRent = 1;
  @Input() property: Iproperty;

    // will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(Form: NgForm): NgForm {
    console.log(Form.value);
    Form.reset();
    return Form.value;
  }

  // onBack() {
  //   this.router.navigate(['/']);
  // }

  selectTab(tabId: number): void {
    this.formTabs.tabs[tabId].active = true;
  }
}

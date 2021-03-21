import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproperty } from '../iproperty.interface';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @Input() property: Iproperty;
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
}

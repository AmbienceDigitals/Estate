import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';



@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  // @ViewChild('form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  // SellRent = 1;
  @Input() property: IPropertyBase;

  nextClicked: boolean;

  addPropertyForm: FormGroup;

    // will come from masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IPropertyBase = {
    Id: null,
    Name: null,
    Price: null,
    SellRent: null,
    PType: null,
    FType: null,
    BHK: null,
    BuiltArea: null,
    City: null,
    RTM: null
  };

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createAddPropertyForm();
  }

  createAddPropertyForm(): void {
    this.addPropertyForm = this.fb.group({
      // Grouping form controls
      BasicInfo: this.fb.group({
        SellRent: ['1', Validators.required],
        PType: [null, Validators.required],
        Name: [null, Validators.required],
      }),

      PriceInfo: this.fb.group({
        Price: ['', Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null]
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Adress: [null],
        LandMark: [null]
      }),

      OtherInfo: this.fb.group({
        RTM: [null],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      })
      });
  }


//#region <GetterMethods>

  //#region <FormGroups>

      get BasicInfo(): FormGroup {
        return this.addPropertyForm.controls.BasicInfo as FormGroup;
      }

      get PriceInfo(): FormGroup {
        return this.addPropertyForm.controls.PriceInfo as FormGroup;
      }

      get AddressInfo(): FormGroup {
        return this.addPropertyForm.controls.AddressInfo as FormGroup;
      }

      get OtherInfo(): FormGroup {
        return this.addPropertyForm.controls.OtherInfo as FormGroup;
      }

  //#endregion

  //#region <FormControls>
    get SellRent(): FormControl {
      return this.BasicInfo.controls.SellRent as FormControl;
    }

    get Price(): FormControl {
      return this.PriceInfo.controls.Price as FormControl;
    }

    get RTM(): FormControl {
      return this.OtherInfo.controls.RTM as FormControl;
    }

  //#endregion

//#endregion

  onSubmit(): void {
    this.nextClicked = true;
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return;
    }

    console.log('Congrats, Form submitted');
    console.log('SellRent = ' + this.addPropertyForm.value.BasicInfo.SellRent);
    console.log(this.addPropertyForm);

  }

  // onBack() {
  //   this.router.navigate(['/']);
  // }

  selectTab(NextTabId: number, IsCurrentTabValid: boolean): void {
    this.nextClicked = true;
    if (IsCurrentTabValid) {
    this.formTabs.tabs[NextTabId].active = true;
    }
  }
}

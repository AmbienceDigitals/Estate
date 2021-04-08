import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from 'src/app/model/iproperty';
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
  @Input() property: IProperty;

  nextClicked: boolean;

  addPropertyForm: FormGroup;

    // will come from masters
  bhks: Array<number> = [1, 2, 3, 4];
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IProperty = {
    //#region (Basic Info Tab)

    Id: null,
    SellRent: null,
    BHK: null,
    PType: null,
    FType: null,
    Name: null,
    City: null,

    //#endregion (Basic Info Tab)

    //#region  (Price Info Tab)

    Price: null,
    Security: null,
    Maintenance: null,
    BuiltArea: null,
    CarpetArea: null,

    //#endregion (Price Info Tab)

    //#region  (Address Info Tab)

    FloorNo: null,
    TotalFloor: null,
    Address: null,
    Landmark: null,

    //#endregion (Address Info Tab)

    //#region  (Other Info Tab)

    RTM: null,
    AOP: null,
    PossessionOn: null,
    Gated: null,
    MainEntrance: null,
    Description: null,

    //#endregion (Other Info Tab)

    //#region  (Photo Tab)
    Image: null
    //#endregion (Photo Tab)
  };

  constructor(private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.createAddPropertyForm();
  }

  createAddPropertyForm(): void {
    this.addPropertyForm = this.fb.group({
      // Grouping form controls
      BasicInfo: this.fb.group({
        SellRent: ['1', Validators.required],
        BHK: [, Validators.required],
        PType: [, Validators.required],
        FType: [, Validators.required],
        Name: [, Validators.required],
        City: [, Validators.required]
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuiltArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null]
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null],
        Landmark: [null]
      }),

      OtherInfo: this.fb.group({
        RTM: [null],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null]
      }),

      Photo: this.fb.group({
        Image: [null]
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

      get Photo(): FormGroup {
        return this.addPropertyForm.controls.Photo as FormGroup;
      }

  //#endregion <FormGroups

  //#region <FormControls>

    //#region <BasicInfo Form Controls>

    get SellRent(): FormControl {
      return this.BasicInfo.controls.SellRent as FormControl;
    }

    get PType(): FormControl {
      return this.BasicInfo.controls.PType as FormControl;
    }

    get Name(): FormControl {
      return this.BasicInfo.controls.Name as FormControl;
    }

    get FType(): FormControl {
      return this.BasicInfo.controls.FType as FormControl;
    }

    get BHK(): FormControl {
      return this.BasicInfo.controls.BHK as FormControl;
    }

    get City(): FormControl {
      return this.BasicInfo.controls.City as FormControl;
    }

    //#endregion <BasicInfo Form Controls>

    //#region <PriceInfo Form Controls>

    get Price(): FormControl {
      return this.PriceInfo.controls.Price as FormControl;
    }

    get Security(): FormControl {
      return this.PriceInfo.controls.Security as FormControl;
    }

    get Maintenance(): FormControl {
      return this.PriceInfo.controls.Maintenance as FormControl;
    }

    get BuiltArea(): FormControl {
      return this.PriceInfo.controls.BuiltArea as FormControl;
    }

    get CarpetArea(): FormControl {
      return this.PriceInfo.controls.CarpetArea as FormControl;
    }

    //#endregion <PriceInfo Form Controls>

    //#region <AddressInfo Form Controls>
    get FLoorNo(): FormControl {
      return this.AddressInfo.controls.FLoorNo as FormControl;
    }

    get TotalFLoor(): FormControl {
      return this.AddressInfo.controls.TotalFLoor as FormControl;
    }

    get Address(): FormControl {
      return this.AddressInfo.controls.Address as FormControl;
    }

    get Landmark(): FormControl {
      return this.AddressInfo.controls.Landmark as FormControl;
    }
    //#endregion <AddressInfo Form Controls>

    //#region <OtherInfo Form Controls>

    get RTM(): FormControl {
      return this.OtherInfo.controls.RTM as FormControl;
    }

    get PossessionOn(): FormControl {
      return this.OtherInfo.controls.PossessionOn as FormControl;
    }

    get AOP(): FormControl {
      return this.OtherInfo.controls.AOP as FormControl;
    }

    get Gated(): FormControl {
      return this.OtherInfo.controls.Gated as FormControl;
    }

    get MainEntrance(): FormControl {
      return this.OtherInfo.controls.MainEntrance as FormControl;
    }

    get Description(): FormControl {
      return this.OtherInfo.controls.Description as FormControl;
    }

      //#endregion <OtherInfo Form Controls>

       //#region <Photo Form Controls>

       get Image(): FormControl {
        return this.Photo.controls.Image as FormControl;
      }

        //#endregion <Photo Form Controls>

  //#endregion <FormControls>

//#endregion <GetterMettods>

  onSubmit(): void {
    this.nextClicked = true;
    if (this.allTabsValid()) {
      console.log('Congrats, Form submitted');
      console.log(this.addPropertyForm);
    } else {
      console.log('Pls review the form and provide valid entries');
      console.log(this.BasicInfo);
      console.log(this.OtherInfo);
    }
  }

  allTabsValid(): boolean {
    if (this.BasicInfo.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.AddressInfo.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }

    if (this.OtherInfo.invalid) {
      this.formTabs.tabs[3].active = true;
      return false;
    }
    if (this.Photo.invalid) {
      this.formTabs.tabs[4].active = true;
      return true;
    }
    return true;
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

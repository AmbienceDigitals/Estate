import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/Service/housing.service';
import { Iproperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<Iproperty>;
  constructor( private housingService: HousingService) { }

  ngOnInit(): void {

    this.housingService.getAllProperties().subscribe(
      data => {
        this.properties = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }


}

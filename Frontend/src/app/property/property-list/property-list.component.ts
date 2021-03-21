import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/Service/housing.service';
import { Iproperty } from '../iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<Iproperty>;
  SellRent = 1;
  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      // defining Rent property url else base url
      this.SellRent = 2;
    }


    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
      },
      error => {
        console.log('httperror');
        console.log(error);
      }
    );
  }


}

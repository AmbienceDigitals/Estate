import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId:  number;
  // using Activated route to get details of properties once the edit button is clicked
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.propertyId = this.route.snapshot.params['id'];
  }

  onSelectNext() {
     
  }

}
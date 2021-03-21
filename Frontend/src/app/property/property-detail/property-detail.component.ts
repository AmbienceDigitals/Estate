import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  // using Activated route to get details of properties once the edit button is clicked
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this code returns a string value so the number() or + is used to convert it back to a number
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    );
  }

  onSelectNext(): void {
    this.propertyId += 1;
    this.router.navigate(['property-details', this.propertyId ]);

  }

}

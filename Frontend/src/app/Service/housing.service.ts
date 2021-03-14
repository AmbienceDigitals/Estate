import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Iproperty } from '../property/iproperty.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }


    // defining expected type of the observable returned by the getAllProperties function
    
  getAllProperties(): Observable<Iproperty[]> {
    // using pipe to intercept and transform data
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<Iproperty> = [];
        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }  
        }
        return propertiesArray;
      })
    )
  }
}

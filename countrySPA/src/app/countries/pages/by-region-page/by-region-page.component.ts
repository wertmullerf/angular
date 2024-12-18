import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  constructor(private countryService: CountryService) {}

  searchByRegion(term: string) {
    this.countryService.searchRegion(term).subscribe((countriesRes) => {
      this.countries = countriesRes;
    });
  }
}

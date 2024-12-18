import { Component } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  constructor(private countryService: CountryService) {}
  searchByCountry(term: string): void {
    this.countryService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
    });
  }
}

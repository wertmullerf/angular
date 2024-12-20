import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: `.badgeSelector{
    border: none;
  }`,
})
export class ByRegionPageComponent implements OnInit {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public selectedRegion!: Region;
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countryService.cacheStore.byRegion.region!;
    console.log(this.countries);
  }
  searchByRegion(term: Region) {
    this.selectedRegion = term;
    this.isLoading = true;
    this.countryService.searchRegion(term).subscribe((countriesRes) => {
      this.countries = countriesRes;
      this.isLoading = false;
    });
  }
}

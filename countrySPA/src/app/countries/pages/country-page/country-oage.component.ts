import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``,
})
export class CountryPageComponent implements OnInit {
  public data!: Country | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.countryService
        .searchCountryByAlphaCode(id)
        .subscribe((countryRes) => {
          if (!countryRes) {
            this.router.navigateByUrl('');
          } else {
            this.data = countryRes;
          }
        });
    });
  }
}

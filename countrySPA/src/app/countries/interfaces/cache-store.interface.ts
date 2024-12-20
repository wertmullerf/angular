import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheStore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: TermRegions;
}

export interface TermCountries {
  term: string;
  countries: Country[];
}

export interface TermRegions {
  region?: Region;
  countries: Country[];
}

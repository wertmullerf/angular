import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif-response.interface';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagHistory: string[] = [];
  private _api_key = environment.apiKey;
  private _base_url = 'https://api.giphy.com/v1/gifs/search';
  public gifList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }
  get tagsHistory(): string[] {
    return this._tagHistory;
  }

  private organizeData(tag: string) {
    tag = tag.toLocaleLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((data) => data !== tag);
    }

    this._tagHistory.unshift(tag);
    this._tagHistory = this.tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    if (this.tagsHistory.length == 0) return;
    this.searchTag(this._tagHistory[0]);
  }
  public async searchTag(tag: string): Promise<void> {
    //let newTag = tag.trim();
    if (tag.length == 0) return;
    this.organizeData(tag);

    const params = new HttpParams()
      .set('api_key', this._api_key!)
      .set('q', tag)
      .set('limit', 10);

    this.http
      .get<SearchResponse>(this._base_url, { params })
      .subscribe((response) => {
        this.gifList = response.data;
      });
  }
}

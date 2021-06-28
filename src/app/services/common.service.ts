import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  navData = [];
  bannerData = [];
  amenitiesData = [];

  private url = '/assets/data/navData.json';
  private url2 = '/assets/data/bannerData.json';
  private url3 = '/assets/data/aminities.json';

  constructor(private http: HttpClient) {}

  public getNavContent(): Observable<any> {
    if (this.navData && this.navData.length > 0) {
      return of({ data: this.navData });
    } else {
      return new Observable((observer): any => {
        this.http.get(this.url).subscribe((res: any) => {
          if (res) {
            this.navData = res;
            observer.next({ data: this.navData });
            observer.complete();
          }
        });
      });
    }
  }

  public getAmenityContent(): Observable<any> {
    if (this.amenitiesData && this.amenitiesData.length > 0) {
      return of({ data: this.amenitiesData });
    } else {
      return new Observable((observer): any => {
        this.http.get(this.url3).subscribe((res: any) => {
          if (res) {
            this.amenitiesData = res;
            observer.next({ data: this.amenitiesData });
            observer.complete();
          }
        });
      });
    }
  }
}

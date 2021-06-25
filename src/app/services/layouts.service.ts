import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutsService {

  layouts = [];
  layout={};

  private url = '/assets/data/layouts.json';

  constructor(private http: HttpClient) { }

  public getLayoutDetails() :Observable<any>{
    if(this.layouts && this.layouts.length > 0){
      return of({ data: this.layouts});
    }else{
      return new Observable((observer) :any =>{
        this.http.get(this.url).subscribe((res:any)=>{
          if(res){
            this.layouts = res;
            observer.next({data: this.layouts});
            observer.complete();
          }
        });
      });
      // return this.http.get(this.url);
    }
  }

  public getLayoutbyId(id: any) :Observable<any>{
    return new Observable((observer): any=>{
      this.http.get(this.url).subscribe((res: any)=>{
        if(res){
          for(let i = 0; i < res.length; i++){
            if(res[i]['projectId'] == id){
              this.layout = res[i];
              observer.next({data: this.layout});
              observer.complete();
            }
          }
        }
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutsService } from 'src/app/services/layouts.service';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {

  layouts = [];

  constructor(private service_:LayoutsService) {
    this.service_.getLayoutDetails().subscribe((res)=>{
      this.layouts = res['data'];
      console.log(this.layouts); 
    });
  }

  ngOnInit(): void {
  }

}

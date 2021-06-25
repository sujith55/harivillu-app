import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { LayoutsService } from 'src/app/services/layouts.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  projectId : string;
  layout = {}; 
  navData = [];
  isShown = false;

  constructor(private route: ActivatedRoute, private service_: LayoutsService, private common: CommonService, private myElement: ElementRef) {
    this.common.getNavContent().subscribe((res: any)=>{
      this.navData = res['data'];
      // console.log(this.navData);
    });
    // this.service_.getLayoutDetailsbyId(this.projectId);
    // console.log(layout);
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.service_.getLayoutbyId(this.projectId).subscribe((res)=>{
      this.layout = res['data'];
      console.log(this.layout);
    });
  }

  goToView(ref: string){
    this.myElement.nativeElement.ownerDocument.getElementById(ref).scrollIntoView({behavior: 'smooth'});
  }
}

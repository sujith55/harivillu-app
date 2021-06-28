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
  titleImg: any;
  layout = {}; 
  navData = [];
  amenityData= [];
  // imagesBasic=[];
  isShown = false;

  imagesBasic = [
    { img: '/assets/images/3.jpg', thumb:
    '/assets/images/3.jpg', description: 'Image 1' },
    ];

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
      this.titleImg = this.layout["titleImg"];
      // console.log(this.layout);
    });
    this.common.getAmenityContent().subscribe((res)=>{
      this.amenityData = res['data'];
    });
  }

  goToView(ref: string){
    this.myElement.nativeElement.ownerDocument.getElementById(ref).scrollIntoView({behavior: 'smooth'});
  }
}

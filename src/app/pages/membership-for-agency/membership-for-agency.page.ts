import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivatedRoute, NavigationExtras } from '@angular/router';
// import { AuthService } from '../../core/auth/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-membership-for-agency',
  templateUrl: './membership-for-agency.page.html',
  styleUrls: ['./membership-for-agency.page.scss'],
})

export class MembershipForAgencyPage implements OnInit {
//  selectedPath = '';

 firstdata:any={}
 data={};
  pages = [
    {
      title: 'First Page with Tabs',
      url: '/membership'
    }
  ];
  constructor(private router: Router,private route: ActivatedRoute, private storage: Storage) {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event && event.url) {
    //     this.selectedPath = event.url;
    //     console.log("hello",this.selectedPath)
    //   }
    // });
// 1st method from home page
    // this.route.queryParams.subscribe(params =>{
// console.log(params)
      // if(params && params.special){
        // this.firstdata=params.special;
        // console.log("data",this.data)
        // this.data=JSON.parse(params.special)  //for object but not good one try to use data share for object share
      // }
    // })
     //  3 rd method state 
  //  if(this.router.getCurrentNavigation().extras.state){
  //   this.data=this.router.getCurrentNavigation().extras.state.user;
  //   console.log("this",this.data)
  // }
  }
  ngOnInit() {
    //2nd method params data sharing form home page by params ******  this is best for large object ******
  //  if(this.route.snapshot.data['special']){
  //    this.data=this.route.snapshot.data['special'];
  //    console.log("dta",this.route.snapshot.data)
  //  }
   console.log("dta",this.router.getCurrentNavigation())
  }
public  logout():void {
    // this.authService.logout();
    this.router.navigateByUrl('');
  }
  public completeMembership():void{
   this.storage.set('membership', 'completed').then(res => {
    })
    this.router.navigateByUrl('/menu/first');
  }
}
import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
// import { AlertCallsProvider } from 'src/app/providers/alert-calls/alert-calls';
@Component({
  selector: 'app-membership-for-agency',
  templateUrl: './membership-for-agency.page.html',
  styleUrls: ['./membership-for-agency.page.scss'],
})

export class MembershipForAgencyPage implements OnInit {
  globaldata: any = {};
  constructor(private router: Router, private route: ActivatedRoute, private storage: Storage,
    private authService: AuthService,
    public alertController: AlertController,
    // public alertCall: AlertCallsProvider,
    ) {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event && event.url) {
    //     let selectedPath = event.url;
    //     console.log("hello",selectedPath)
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
  // 4th method from profile
  this.globaldata.id = this.route.snapshot.paramMap.get('id');
  }
//  selectedPath = '';
wizardStep = 1;
 firstdata: any = {};
 data = {};
  pages = [
    {
      title: 'First Page with Tabs',
      url: '/membership'
    }
  ];

  termsandConditons: any;
  ngOnInit() {
    // 2nd method params data sharing form home page by params ******  this is best for large object ******
  //  if(this.route.snapshot.data['special']){
  //    this.data=this.route.snapshot.data['special'];
  //    console.log("dta",this.route.snapshot.data)
  //  }
   console.log('dta', this.router.getCurrentNavigation());
  }
  async logout() {
      const alert = await this.alertController.create({
        header: 'Confirm!',
        message: 'Do you want to logout ?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
            }
          }, {
            text: 'Logout',
            handler: () => {
              this.confirmLogout();
            }
          }
        ]
      });
      await alert.present();
  }

    confirmLogout() {
      this.authService.logout();
      this.router.navigateByUrl('');
    }
    uploadPhoto() {

    }

  public completeMembership(): void {
   this.storage.set('membership', 'completed').then(res => {
    });
    this.router.navigateByUrl('/menu/agency-dashboard'); 
  }
  gonext() {

    if (this.wizardStep == 2) {
      if (this.termsandConditons == false || this.termsandConditons == 'false' || this.termsandConditons == null) {
        // this.alertCall.showToastAlert('Please accept terms & conditions', 'red')
        alert('Please accept terms & conditions');
        return;
      } else {
        this.wizardStep++;
      }
    } else {
        this.wizardStep++;
      }

  }
  gotoprofile() {
    const element = document.getElementById('backbutton').click();
  }
  gotoPreviousStep() {
    this.wizardStep--;
  }
}

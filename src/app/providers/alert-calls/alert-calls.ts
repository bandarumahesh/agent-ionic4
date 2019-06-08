// import 'rxjs/add/operator/map';

// import { Injectable } from '@angular/core';
// import { LoadingController } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';
// import { HttpClient } from '@angular/common/http';
// import { ToastController } from '@ionic/angular';

// @Injectable()
// export class AlertCallsProvider {

//   loader: any;
//   constructor(
//     public http: HttpClient,
//     public loadingCtrl: LoadingController,
//     private alertCtrl: AlertController,
//     private toastCtrl: ToastController) {
//   }

//   showLoading() { 
//     this.loader = this.loadingCtrl.create({
//       spinner: 'bubbles',
//       content: "Please wait...",
//     });
//     this.loader.present();
//     setTimeout(() => {
//       this.closeLoading();
//     }, 1000);
//   }

//   closeLoading() {
// 			this.loader.dismiss();
	
//   }

//   showOTPAlert(otp) {
//     let alert = this.alertCtrl.create({
//       title: 'Your Verification code',
//       subTitle: otp,
//       buttons: ['Dismiss']
//     });
//     alert.present();
//   }


//   showToastAlert(meg, css) {
//     let toast = this.toastCtrl.create({
//       message: meg,
//       duration: 3000,
//       position: 'bottom',
//       cssClass: css
//     });
//     toast.present();
//   }

// }
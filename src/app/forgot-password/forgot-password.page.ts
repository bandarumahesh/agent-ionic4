import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  constructor(    private router: Router,
    private route: ActivatedRoute) { }
  passwordFormat = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  regexp = /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{6,16}$/;
  userEmail: any;
  userOTP: any;
  retypePassword: any;
  newPassword: any;
  show = false;
  wizardStep = 1;
  wizardStepData = [{ stepNum: 1 }, { stepNum: 2 }, { stepNum: 3 }, { stepNum: 4 }];
  isMatch: any = 2;
  formatMatch: any = 0;
  newPassword1: any;
  newPassword2: any;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  ngOnInit() {
  }
  checkUserEmail() {
    this.wizardStep++;
    // this.alertCalls.showLoading();
    // this.serviceCall.userForgotPasswrod(this.userEmail).subscribe(
    //   (resp) => {
    //     this.alertCalls.closeLoading();
    //     console.log(resp);
    //     if (resp != null) {
    //       localStorage.setItem('userId', resp.userId);
    //       this.wizardStep++;
    //     } else {
    //       this.alertCalls.showToastAlert('Please enter valid details ', 'red');
    //       return;
    //     }
    //   }, err => {
    //     this.alertCalls.closeLoading();
    //   });
  }

  checkOtp() {
    this.wizardStep++;
    // this.alertCalls.showLoading();
    // const data = { 'userId': localStorage.getItem('userId'), 'mobileToken': this.userOTP };
    // this.serviceCall.checkForOTPValid(data).subscribe(
    //   (resp) => {
    //     this.alertCalls.closeLoading();
    //     this.alertCalls.showToastAlert('Email verified successfully', 'green');
    //     this.wizardStep++;
    //   }, err => {
    //     this.alertCalls.closeLoading();
    //     if (err.status == 400) {
    //       this.userOTP = '';
    //       console.log(err.error.message);
    //     }
    //   });
  }
 
  hideShowPassword() {
    console.log("hello")
      this.passwordType = this.passwordType === 'text' ? 'password' : 'text';

      this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
      console.log("hello",this.passwordType,this.passwordIcon)
  }
  resendOtp() {
    // this.alertCalls.showLoading();
    // this.serviceCall.userForgotPasswrod(this.userEmail).subscribe(
    //   (resp) => {
    //     this.alertCalls.closeLoading();
    //     this.userOTP = '';
    //   }, err => {
    //     this.alertCalls.closeLoading();
    //   });
  }

  checkPassword() {
    if (this.newPassword1 != null && this.newPassword2 != null && this.newPassword1 != '' && this.newPassword2 != '') {
      if (this.newPassword1 == this.newPassword2) {
        this.isMatch = 1;
      } else {
        this.isMatch = 0;
      }
    } else {
      this.isMatch = 2;
    }
    if (!this.newPassword1.match(this.passwordFormat)) { this.formatMatch = 1; } else { this.formatMatch = 0; }
  }
 
  updatePassword() {
    this.wizardStep++;
    // if (this.newPassword1 == '' || this.newPassword1 == null) {
    //   this.alertCalls.showToastAlert('Enter New Password', 'red');
    //   return;
    // } else if (this.newPassword2 == '' || this.newPassword2 == null) {
    //   this.alertCalls.showToastAlert('Enter Confirm New Password', 'red');
    //   return;
    // }
    // const data = { 'userId': localStorage.getItem('userId'), 'userPassword': this.newPassword1 };
    // this.alertCalls.showLoading();
    // this.serviceCall.setNewPassword(data).subscribe(resp => {
    //   this.alertCalls.closeLoading();
    //   if (resp.message == 'Password Successfully updated') {
    //     this.isMatch = 2;
    //     this.newPassword1 = null;
    //     this.newPassword2 = null;
    //     this.wizardStep++;
    //   }
    // }, err => {
    //   this.alertCalls.closeLoading();
    // });
  }


  gotoSignin() {
    // this.router.navigate(['/login'], { replaceUrl: true });
    let element= document.getElementById('backbutton').click()
  }

  loginUser() {
    // const data = { userEmail: this.userEmail, userPassword: this.newPassword };
    // this.alertCalls.showLoading();
    // this.serviceCall.userLoginAuth(data).subscribe(
    //   (resp: any) => {
    //     this.alertCalls.closeLoading();
    //     const result: any = resp;
    //     if (resp != null) {
    //       localStorage.setItem('token', result.token);
    //       localStorage.setItem('roleId', result.roleId);
    //       localStorage.setItem('userId', result.userId);
    //       localStorage.setItem('membershipId', result.MembershipId);
    //       this.redirectToPage(data);
    //     } else {
    //       this.alertCalls.showToastAlert('Incorrect email/mobile,Enter valid email/mobile,password', 'red');
    //     }

    //   }, err => {
    //     this.alertCalls.closeLoading();
    //   });
  }

  loadUserDetails(data) {
    // this.alertCalls.showLoading();
    // this.commonCalls.getUserBasicDetails().subscribe(resp => {
    //   this.alertCalls.closeLoading();
    //   const name = (resp[0].firstName + '' + resp[0].lastName);
    //   localStorage.setItem('userName', name);
    //   localStorage.setItem('email', resp[0].userEmail);
    //   this.redirectToPage(data);
    // }, err => {
    //   this.alertCalls.closeLoading();
    //   this.alertCalls.showToastAlert('Please try again', 'red');
    // });
  }

  redirectToPage(resp) {
    // localStorage.setItem('switchDashbord', 'dashboard');
    // if (resp.roleId == 2 && resp.MembershipId == null) {
    //   this.navCtrl.push('MembershipForLandlordPage');
    // } else if (resp.roleId == 10 && resp.MembershipId == null) {
    //   this.navCtrl.push('MembershipForTenantExistsPage');
    //      } else if (resp.roleId == 3 && resp.MembershipId == null) {
    //   this.navCtrl.push('VacantTenantMembershipPage');
    //      } else if (resp.roleId == 2 && resp.MembershipId != null) {
    //   localStorage.setItem('sideMenuType', 'LandlordDashboard');
    //   localStorage.setItem('ActiveUser', 'Landlord');
    //   this.ev.publish('update-sitemap', 'LandlordDashboard');
    //   this.navCtrl.setRoot('LandlordManagePropertyPage');
    // } else if ((resp.roleId == 10 || resp.roleId == 3) && resp.MembershipId != null) {
    //   localStorage.setItem('sideMenuType', 'TenantDashboard');
    //   localStorage.setItem('ActiveUser', 'Tenant');
    //   this.ev.publish('update-sitemap', 'TenantDashboard');
    //   this.navCtrl.setRoot('TenantManagePropertyPage');
    // } else {
    //   console.log('support');
    //      }
  }

  // showpassword() {
    // this.show = !this.show;
    // Observable.interval(6000).takeWhile(() => this.show).subscribe(() => this.showpassword());
  // }
}

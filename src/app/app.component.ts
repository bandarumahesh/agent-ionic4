import { Component } from "@angular/core";
import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { AuthService } from "../app/core/auth/auth.service";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html"
})
export class AppComponent {
  globaldata: any = {};
  constructor(
    private authService: AuthService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.authService.authState$.subscribe(state => {
 
if( state === true){
  // this.router.navigate(["membership"]);
  this.router.navigate(["/menu/agency-dashboard"]);
  
}else {
    console.log("hello222");
    this.router.navigate(["home"]);
  }

       
      });
    });
  }
}











//       this.authService.authState$.subscribe(state => {
//         console.log("hello medium",this.storage.get('membership'))

//         this.storage.get("membership").then(data => {
//           this.globaldata.membership = data;
//           console.log(data);
//         });
//         console.log("medium",state,this.globaldata.membership);
// if( state === true && this.globaldata.membership){
//   console.log("hello222 medium");
//   this.router.navigate(["menu/first/tabs/tab1"]);
// }else if (state === true && !this.globaldata.membership) {
//     console.log("hello medium");
//     this.router.navigate(["membership"]);
//   } else {
//     console.log("hello222");
//     this.router.navigate(["home"]);
//   }

       
//       });
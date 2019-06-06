import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';

// import { JwtHelperService } from '@auth0/angular-jwt';
// import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { throwError, Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  // jwtHelper: JwtHelperService = new JwtHelperService();

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const loginToken: any = localStorage.getItem('token');
    const isValidToken = false;

    let headersData = new HttpHeaders();
    headersData = request.headers.set('Content-Type', 'application/json');

    if (isValidToken) {
      headersData = request.headers.set('Authorization', 'Bearer ' + `${loginToken}`);
      request = request.clone({ headers: headersData });
    } else {
      request = request.clone({ headers: headersData });
    }
    return next.handle(request).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        console.log('event--->>>', event);
      }
      return event;
    }), catchError((error: HttpErrorResponse) => {
      console.error(error && error.status ? error.status : undefined, error && error.message ?
        error.message : 'Anonymous', 'Interceptor catching error');
      const data = {
        status: error.status,
        message: error && error.error && error.error.message ?
          error.error.message : 'Something went wrong, please try again later.',
        statusText: error.statusText,
        url: error.url
      };
      return throwError(data);
    }));
  }
}

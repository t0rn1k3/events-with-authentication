import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor , HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private injector : Injector
  ) { }

  intercept(request :HttpRequest<any>, next : HttpHandler ) : Observable<HttpEvent<any>> {
    const token  = localStorage.getItem('token')

    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }


    return next.handle(request)
  }
}

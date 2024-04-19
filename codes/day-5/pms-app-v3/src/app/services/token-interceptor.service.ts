import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = sessionStorage.getItem('token')
        if (token) {
            //req.headers.append('authorization', `Bearer ${token}`)
            const request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${token}`
                }
            })
            console.log(request)
            return next.handle(request)
        } else
            return next.handle(req)
    }

}
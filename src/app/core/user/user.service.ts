import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode'

import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new Subject<User>();

    constructor(private tokenService: TokenService) {

        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }
}

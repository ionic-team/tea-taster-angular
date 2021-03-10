import { Component, OnInit, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAuthErrorMessage, State } from '@app/store';
import { login } from '@app/store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  darkMode: boolean;

  errorMessage$: Observable<string>;

  constructor(private store: Store<State>, private zone: NgZone) {}

  ngOnInit() {
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = query.matches;
    query.addListener(e => this.zone.run(() => (this.darkMode = e.matches)));

    this.errorMessage$ = this.store.select(selectAuthErrorMessage);
  }

  signIn() {
    this.store.dispatch(login({ email: this.email, password: this.password }));
  }
}

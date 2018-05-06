import { LoginInterface } from '../models/LoginInterface';
import { RegisterInterface } from '../models/RegisterInterface';

const API = 'http://localhost:3111';
const LOGIN_ROUTE = '/login';
const REGISTER_ROUTE = '/register';

export default class Authentication {
  public isLoggedIn: boolean = false;

  public login(data: LoginInterface): Promise<any> {
    console.log('login: ', data);
    return fetch(API + LOGIN_ROUTE, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }

  public register(data: RegisterInterface): Promise<any> {
    console.log('register: ', data);
    return fetch(API + REGISTER_ROUTE, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });
  }

  setLogin = (token: string) => {
    this.isLoggedIn = true;
    localStorage.setItem('token', token);
    console.log('logged in: ', this.isLoggedIn);
  }

  getToken = () => {
    return localStorage.getItem('token');
  }

  logout = () => {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }
}

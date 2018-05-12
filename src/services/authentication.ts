import { LoginInterface } from '../models/LoginInterface';
import { RegisterInterface } from '../models/RegisterInterface';

const API = 'http://localhost:3111';
const LOGIN_ROUTE = '/login';
const REGISTER_ROUTE = '/register';
const SECRET_ROUTE = '/secret';

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

  public secret() {
    let token = localStorage.getItem('token');
    console.log('token: ', token);
    fetch(API + SECRET_ROUTE, {
      method: 'GET',
      headers: new Headers({
        'Authorization': `bearer ${token}`
      })
    })
    .then(res => {
      console.log('res: ', res);
      res.json().then(payload => {
        console.log('payload: ', payload);
      });
    })
    .catch(err => {
      console.log('err: ', err);
    });
  }

  setLogin = (token: string) => {
    this.isLoggedIn = true;
    localStorage.setItem('token', token);
    console.log('logged in: ', this.isLoggedIn);
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  logout = () => {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }
}
export class Userdetail {
  name: string;
  password: string;
  accept: boolean;
  constructor(
    name: string, password: string, accept: boolean
  ){
    this.name = name;
    this.password = password;
    this.accept = accept;
  }
}
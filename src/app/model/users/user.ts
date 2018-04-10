

import SuperTemplate from "../templates/super-template";

export default class User {
  public id: Number;
  public login: String;
  public password: String;
  private _fio: String;
  public userChecklists: SuperTemplate[];

  constructor(id: Number, login: String, password: String, fio: String, userChecklists: SuperTemplate[]) {
    this.id = id;
    this.login = login;
    this.password = password;
    this._fio = fio;
    this.userChecklists = userChecklists;
  }

  get fio(): String {
    return this._fio;
  }

  set fio(value: String) {
    this._fio = value;
  }

  static createEmpty() {
    return new User(null, 'ivan@gmail.com', 'password', "Ivan Ivanov", []);
  }
}

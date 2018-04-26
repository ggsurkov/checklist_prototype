



import SuperTemplate from "../../../../../fire_project/src/model/super-template";
import {CheckboxThreeEnum} from "../../../dictionary/checkbox-three-enum";

export default class UserLocal {
  public id: Number;
  public login: String;
  public password: String;
  private _fio: String;
  public userChecklists: SuperTemplate[];
  public checkboxToggle: CheckboxThreeEnum;
  public checkboxChecked: Boolean;

  constructor(id: Number, login: String, password: String, fio: String, userChecklists: SuperTemplate[], checkboxToggle: CheckboxThreeEnum, checkboxChecked: Boolean) {
    this.id = id;
    this.login = login;
    this.password = password;
    this._fio = fio;
    this.userChecklists = userChecklists;
    this.checkboxToggle = checkboxToggle;
    this.checkboxChecked = checkboxChecked;
  }

  get fio(): String {
    return this._fio;
  }

  set fio(value: String) {
    this._fio = value;
  }

  static createEmpty() {
    return new UserLocal(null, 'ivan@gmail.com', 'password', "Ivan Ivanov", [], CheckboxThreeEnum.CHECKBOX_EMPTY, false);
  }
}

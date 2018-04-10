import {Injectable} from "@angular/core";
import User from "../app/model/users/user";
import SuperTemplate from "../app/model/templates/super-template";
import {Md5} from "ts-md5";
import {Observable} from "rxjs/Observable";

// declare let require: any;
// const localforage: LocalForage = require("localforage");
import localforage from 'localforage';
@Injectable()

export class CrudChecklistProvider {
  public userChecklistFromStorage: SuperTemplate[] = [];
  public user: User = User.createEmpty();

  constructor(private _md5: Md5) {
  }

  public setChecklistsToLocalStorage(checklists) {
    localforage.setItem("checklist_old_car_buy", checklists);
  }

  public getChecklistsFromLocalStorage() {
    localforage.getItem("checklist_old_car_buy").then((result) => {
      this.userChecklistFromStorage = result ? <Array<SuperTemplate>> result : [];
    }, (error) => {
      console.log("ERROR: ", error);
    });
    return Observable.create((observer) => {
      const interval = setInterval(() => {
        observer.next(this.userChecklistFromStorage);
        clearInterval(interval);
      }, 50);
    })
  }

  actualChecklists(): Observable<SuperTemplate[]> {
    return Observable.create((observer) => {
      const interval = setInterval(() => {
          observer.next(this.userChecklistFromStorage);
          clearInterval(interval);
      }, 50);
    })
  }

  saveChecklist(checklist, userChecklistFromStorage) {
    checklist.id = this._md5.appendStr('password').end() + (Math.floor(Math.random() * (999999 - 9))).toString();
    userChecklistFromStorage.push(checklist);
    this.setChecklistsToLocalStorage(userChecklistFromStorage);
  }

  updateChecklist(checklist: SuperTemplate, userChecklistFromStorage) {
    userChecklistFromStorage.forEach((currentChecklist) => {
      if (currentChecklist.id === checklist.id) {
        this.saveObject(currentChecklist, checklist);
      }
    });
    this.setChecklistsToLocalStorage(userChecklistFromStorage);
  }


  deleteChecklist(checklist: SuperTemplate, userChecklistFromStorage) {
    userChecklistFromStorage.splice(userChecklistFromStorage.indexOf(checklist), 1);
    this.setChecklistsToLocalStorage(userChecklistFromStorage);
    return userChecklistFromStorage;
  }

  cloneObject(obj) {
    let newObj = {};

    for (let prop in obj) {
      if (typeof obj[prop] == 'object') {
        newObj[prop] = this.cloneObject(obj[prop]);
      } else {
        newObj[prop] = obj[prop];
      }
    }

    return newObj;
  }

  saveObject(firstObj, SecondObj) {
    for (let key in SecondObj) {
      firstObj[key] = SecondObj[key];
    }
    return SecondObj
  }

}


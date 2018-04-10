import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {CrudChecklistProvider} from "../../providers/crud-checklist.provider";
import SuperTemplate from "../../app/model/templates/super-template";
import localforage from 'localforage';
import OldCarBuyTemplate from "../../app/model/templates/old-car-buy-template";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userChecklists: SuperTemplate[];
  newChecklist: OldCarBuyTemplate = OldCarBuyTemplate.createEmpty();
  constructor(public navCtrl: NavController,
              public crudProvider: CrudChecklistProvider,
              public alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.newChecklist = OldCarBuyTemplate.createEmpty();
    this.loadChecklistFromUser();
    console.log(this.newChecklist);
  }


  loadChecklistFromUser() {
    localforage.getItem("checklist_old_car_buy").then((result) => {
      this.userChecklists = result ? <Array<SuperTemplate>> result : [];
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  createNewChecklist() {
    console.log(this.newChecklist);
    this.navCtrl.push(this.newChecklist.pageName, {checklist: this.newChecklist, userChecklists: this.userChecklists});
  }

  editChecklist(checklist) {
    this.navCtrl.push(checklist.pageName, {checklist: checklist, userChecklists: this.userChecklists})
  }

  openModalDeleteChecklist(checklist) {
    let alert = this.alertCtrl.create({
      message: 'Удалить чеклист?',
      buttons: [
        {
          text: 'Отмена',
          role: 'cancel',
        },
        {
          text: 'Ок',
          handler: () => {
             this.crudProvider.deleteChecklist(checklist, this.userChecklists)
          }
        }
      ]
    });
    alert.present();
  }

  resetLocalStorage() {
    localforage.clear().then(function () {
      console.log('Database is now empty.');
    }).catch(function (err) {
      console.log(err);
    });
  }

}

import { Component } from '@angular/core';
import {IonicPage, NavController, NavOptions, NavParams, ToastController} from 'ionic-angular';
import OldCarBuyTemplate from "../../../app/model/templates/old-car-buy-template";
import {CrudChecklistProvider} from "../../../providers/crud-checklist.provider";
import {HomePage} from "../../home/home";
import {Md5} from "ts-md5";
import SuperTemplate from "../../../app/model/templates/super-template";
declare let require: any;
const localforage: LocalForage = require("localforage");


@IonicPage()
@Component({
  selector: 'page-old-car-buy-checklist',
  templateUrl: 'old-car-buy-checklist.html',
})
export class OldCarBuyChecklistPage   {
  segments: string = "info"; // первый сегмент при загрузке чеклиста
  public userChecklistFromStorage: SuperTemplate[] = [];
  public checklist: OldCarBuyTemplate = OldCarBuyTemplate.createEmpty();
  constructor( public toastCtrl: ToastController,
               public crudProvider: CrudChecklistProvider,
               public navCtrl: NavController,
               private navParams: NavParams,
               private _md5: Md5) {
  }


  ionViewDidEnter() {
   if(this.navParams.data) {
     this.checklist = this.navParams.data.checklist;
     this.userChecklistFromStorage = this.navParams.data.userChecklists;
   }
  }


  showTooltipWhatToBring() {
    const toast = this.toastCtrl.create({
      message: `• компрессометр;
      • небольшой магнит, завернутый в тряпочку; с его помощью Вы сможете определить зашпатлеванные места (попробуйте приложить его к холодильнику - он должен едва держаться);
      • фонарик (чем меньше, тем лучше);
      • маленькое зеркальце;
      • ветошь (чем-то надо руки вытирать, да и подложить под колени иногда требуется);
      • отвертки (крестовую и плоскую);
      • свечной ключ;
      • небольшой набор рожковых ключей (8,10,11,12)
      • Бумажные салфетки для проверки двигателя
      • CD/флешка для проверки стерео`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showTooltipIfNoDocuments() {
    const toast = this.toastCtrl.create({
      message: `Если сервисная книжка отсутствует, то не спешите уходить, это еще не приговор.  Зато отсутствие сервисной книжки в совокупности с продавцом-перекупщиком – приговор. Осмотр авто всегда начинайте с документов. Если вы обнаруживаете, что продавец машины не имеет к ней никакого отношения или его доверенность выписана совсем недавно, то ваш ответ на все сказки об автомобиле – «до свидания»`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }
  showTooltipMoney() {
    const toast = this.toastCtrl.create({
      message: `У вас в запасе должно быть минимум 10% от стоимости приобретаемой машины. Предыдущие собственники иногда маскируют технические неисправности своих автомобилей таким образом, что даже диагностика проблем не покажет, и впоследствии вам придется ремонтировать авто самостоятельно`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showTooltipAutoService() {
    const toast = this.toastCtrl.create({
      message: `Если автомобиль понравился по всем параметрам и никаких сомнений у вас нет, перед заключением договора купли-продажи обязательно отправляйтесь в сервис и продиагностируйте хотя бы подвеску. Это обойдётся максимум в пару тысяч рублей, но убережёт от покупки машины в плохом состоянии. Во многих случаях диагностика позволяет выявить те проблемы, за счёт которых можно хорошо поторговаться и уж точно отбить её стоимость`,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showTooltipCheckAuto() {
    const toast = this.toastCtrl.create({
      message: `Онлайн-ресурс "Автокод" представляет всю информацию о машине по её ВИН-коду. До того, как узнать была ли машина в ДТП, узнайте у её владельца ВИН-код. Если автомобиль фигурировал в ДТП, то он есть в базе ГИБДД, из которой берёт информацию "Автокод" прямая ссылка на сервис находится ниже`,
      cssClass: 'tooltip-config',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  goToAvtocod() {
    window.open('http://www.avtocod.ru', '_system', 'location=yes');
  }

  saveNewChecklist() {
    if(this.checklist.id === null) {
      this.crudProvider.saveChecklist(this.checklist,this.userChecklistFromStorage);
    }
    else {
      this.crudProvider.updateChecklist(this.checklist,this.userChecklistFromStorage);
    }
    this.navCtrl.popToRoot();
  }


}

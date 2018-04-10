import SuperTemplate from "./super-template";
import {default as TemplateSlide} from "../template-slide";
import {OldCarBuyChecklistPage} from "../../../pages/checklists/old-car-buy-checklist/old-car-buy-checklist";

export default class OldCarBuyTemplate extends SuperTemplate {
  public mainInfo: MainInfo;
  public documents: Boolean[];
  public outerInspection: Boolean[];
  public tyres: Boolean[];
  public engine: Boolean[];
  public suspension: Boolean[];
  public interior: Boolean[];
  public carBody: Boolean[];
  public transmission: Boolean[];
  public carBrakes: Boolean[];
  public carSteering: Boolean[];
  public note: String;

  constructor(id, name,
              slides,
              pageName, userChecklistName, mainInfo,
              documents,
              outerInspection, tyres, engine, suspension,
              interior, carBody, transmission, carBrakes, carSteering,
              note) {

    super(id, name,
      slides,
      pageName, userChecklistName);
    this.mainInfo = mainInfo;
    this.documents = documents;
    this.outerInspection = outerInspection;
    this.tyres = tyres;
    this.engine = engine;
    this.suspension = suspension;
    this.interior = interior;
    this.carBody = carBody;
    this.transmission = transmission;
    this.carBrakes = carBrakes;
    this.carSteering = carSteering;
    this.note = note;
  }

  static createEmpty() {
    return new OldCarBuyTemplate(null, 'Как купить б/у автомобиль',
      [
        new TemplateSlide
        ('Чеклист поможет:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"']),
        new TemplateSlide
        ('Функции чеклиста:', ['Провести внешний осмотр авто', 'Найти изъяны в салоне', 'Проверить угон и "утопленника"'])
      ],
       'OldCarBuyChecklistPage', '',
      ['ФИО владельца','89991112233','Место встречи с владельцем', 'Марка авто','1998','30000','500000'],

      [false,false,false,false],

      [false, false,false,false,false, false,false,false,false, false],

      [false, false,false,false,false, false],

      [false, false,false,false,false, false],

      [false, false,false],

      [false, false,false,false,false, false,false, false,false,false,false, false,false, false,false,false,false, false],

      [false, false,false],

      [false, false,false,false],

      [false, false,false,false],

      [false, false,false,false],

      null);
  }

}

class MainInfo {
  public masterLastName: String;
  public masterPhone: String;
  public placeOfMeeting: String;
  public carBrand: String;
  public carAge: String;
  public carMileAge: String;
  public carPrice: String;
  constructor(masterLastName: String, masterPhone: String,placeOfMeeting: String,carBrand: String,carAge: String, carMileAge: String, carPrice: String) {
    this.masterLastName = masterLastName;
    this.masterPhone = masterPhone;
    this.placeOfMeeting = placeOfMeeting;
    this.carBrand = carBrand;
    this.carAge = carAge;
    this.carMileAge = carMileAge;
    this.carPrice = carPrice;
  }
}

import TemplateSlide from "../template-slide";
import {Page} from "ionic-angular/umd/navigation/nav-util";

export default abstract class SuperTemplate {
  public id: String;
  public name: String;
  public slides: TemplateSlide [];
  public pageName: Page;
  public userChecklistName: String;

  constructor(id: String, name: String,
              slides: TemplateSlide [],
              pageName: Page, userChecklistName: String) {
    this.id = id;
    this.name = name;
    this.slides = slides;
    this.pageName = pageName;
    this.userChecklistName = userChecklistName;
  }

}


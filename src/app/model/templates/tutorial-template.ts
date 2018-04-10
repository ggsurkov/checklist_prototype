import SuperTemplate from "./super-template";
import TemplateSlide from "../template-slide";

export default class TutorialTemplate extends SuperTemplate {

  constructor(id, name, slides, pageName, userChecklistName) {
    super(id, name, slides, pageName, userChecklistName);
  }


  static createEmpty() {
    return new TutorialTemplate(null, 'Подсказка', [
      new TemplateSlide
      ('Выберите шаблон и вы узнаете:', ['Чем выбранный чеклист вам сможет помочь', 'Его уникальный функционал', 'Для создания чеклиста нажмите кнопку ✓']),
    ], null, null);
  }
}



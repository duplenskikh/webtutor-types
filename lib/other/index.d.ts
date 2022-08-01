// TODO: need ref

interface CommonEventStatusType {
  id: string;
  name: string;
  text_color: string;
  bk_color: string;
}

declare interface common extends Object {
  request_status_types: XmlMultiElem<CommonEventStatusType>;
  event_status_types: XmlMultiElem<CommonEventStatusType>;
  learning_states: XmlMultiElem<any>;
  resource_types: XmlMultiElem<any>;
  exchange_object_types: XmlMultiElem<any>;
  education_learning_states: XmlMultiElem<any>;
  career_reserve_status_types: XmlMultiElem<any>;
  career_reserve_tasks_types: XmlMultiElem<any>;
  learning_task_status_types: XmlMultiElem<any>;
}

declare const common: common;

interface categorys extends Object {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

declare const categorys: categorys;

declare const DefaultDb: string;

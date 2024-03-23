type ScriptQueueElemCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  start_date: XmlElem<Date>;
  start_time: XmlElem<Date>;
  finish_time: XmlElem<Date>;
  delay: XmlElem<number>;
  completed: XmlElem<boolean>;
  delete_automatically: XmlElem<boolean>;
  block: XmlElem<string, AccessBlockCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

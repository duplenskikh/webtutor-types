type ScriptQueueElemCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  start_time: XmlElem<Date | null>;
  finish_time: XmlElem<Date | null>;
  delay: XmlElem<number | null>;
  completed: XmlElem<boolean>;
  delete_automatically: XmlElem<boolean>;
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  create_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

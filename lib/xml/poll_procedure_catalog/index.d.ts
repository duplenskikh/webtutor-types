type PollProcedureCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  web_display: XmlElem<boolean>;
  status: XmlElem<number>;
  is_model: XmlElem<boolean>;
  str_sub_bosses_ids: XmlElem<string>;
  trigger_type: XmlElem<string, typeof common.trigger_types>;
  role_id: XmlMultiElemObject<number>;
  equal_hash: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

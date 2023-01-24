type PollProcedureCatalogDocumentTopElem = XmlTopElem & { Doc: PollProcedureCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  web_display: XmlElem<boolean>;
  status: XmlElem<number>;
  is_model: XmlElem<boolean>;
  str_sub_bosses_ids: XmlElem<string>;
  trigger_type: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PollProcedureCatalogDocument = XmlDocument & { TopElem: PollProcedureCatalogDocumentTopElem; };

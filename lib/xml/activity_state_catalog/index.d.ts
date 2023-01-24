type ActivityStateCatalogDocumentTopElem = XmlTopElem & { Doc: ActivityStateCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  create_date: XmlElem<Date>;
  activity_id: XmlElem<number>;
  activity_code: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  registration: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ActivityStateCatalogDocument = XmlDocument & { TopElem: ActivityStateCatalogDocumentTopElem; };

type ActivityStateCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  create_date: XmlElem<Date>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  registration: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

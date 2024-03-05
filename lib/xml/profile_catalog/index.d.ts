type ProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  create_date: XmlElem<Date>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string>;
  hash: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

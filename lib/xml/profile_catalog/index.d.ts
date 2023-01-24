type ProfileCatalogDocumentTopElem = XmlTopElem & { Doc: ProfileCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  agent_json_str: XmlElem<string>;
  create_date: XmlElem<Date>;
  activity_id: XmlElem<number>;
  activity_code: XmlElem<string>;
  hash: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProfileCatalogDocument = XmlDocument & { TopElem: ProfileCatalogDocumentTopElem; };

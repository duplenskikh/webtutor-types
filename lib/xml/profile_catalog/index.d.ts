type ProfileCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null>;
  agent_json_str: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  activity_code: XmlElem<string | null>;
  hash: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

type ServerAgentCatalogDocumentTopElem = XmlTopElem & { Doc: ServerAgentCatalogDocument } & 
MSPeriodityBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  type: XmlElem<string>;
  block: XmlElem<string>;
  check_time_step(): unknown;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ServerAgentCatalogDocument = XmlDocument & { TopElem: ServerAgentCatalogDocumentTopElem; };

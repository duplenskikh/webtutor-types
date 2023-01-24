type PollCatalogDocumentTopElem = XmlTopElem & { Doc: PollCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  is_main: XmlElem<boolean>;
  completed: XmlElem<boolean>;
  is_anonymous: XmlElem<boolean>;
  is_one_time: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
}

type PollCatalogDocument = XmlDocument & { TopElem: PollCatalogDocumentTopElem; };

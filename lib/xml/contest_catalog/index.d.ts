type ContestCatalogDocumentTopElem = XmlTopElem & { Doc: ContestCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  is_open: XmlElem<boolean>;
  status_id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  estimation_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ContestCatalogDocument = XmlDocument & { TopElem: ContestCatalogDocumentTopElem; };

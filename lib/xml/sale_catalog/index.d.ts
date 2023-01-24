type SaleCatalogDocumentTopElem = XmlTopElem & { Doc: SaleCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  status_id: XmlElem<number>;
  number: XmlElem<string>;
  org_id: XmlElem<number>;
  client_org_id: XmlElem<number>;
  project_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  client_manager_id: XmlElem<number>;
  manager_id: XmlElem<number>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SaleCatalogDocument = XmlDocument & { TopElem: SaleCatalogDocumentTopElem; };

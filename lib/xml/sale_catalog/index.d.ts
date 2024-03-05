type SaleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  status_id: XmlElem<number, SaleStatusCatalogDocumentTopElem>;
  number: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  client_manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  manager_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  cost: XmlElem<number>;
  currency_type_id: XmlElem<string, typeof lists.currency_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

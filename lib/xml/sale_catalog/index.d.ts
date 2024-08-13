type SaleCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  status_id: XmlElem<number | null, SaleStatusCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  client_org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  project_id: XmlElem<number | null, ProjectCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  client_manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  manager_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  cost: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

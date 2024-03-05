type InvoiceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  is_paid: XmlElem<boolean>;
  amount: XmlElem<number>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

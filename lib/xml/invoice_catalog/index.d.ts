type InvoiceCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  is_paid: XmlElem<boolean>;
  amount: XmlElem<number | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

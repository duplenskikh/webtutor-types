type InvoiceCatalogDocumentTopElem = XmlTopElem & { Doc: InvoiceCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  date: XmlElem<Date>;
  is_paid: XmlElem<boolean>;
  amount: XmlElem<number>;
  org_id: XmlElem<number>;
  request_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type InvoiceCatalogDocument = XmlDocument & { TopElem: InvoiceCatalogDocumentTopElem; };

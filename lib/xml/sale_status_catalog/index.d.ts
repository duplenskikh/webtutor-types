type SaleStatusCatalogDocumentTopElem = XmlTopElem & { Doc: SaleStatusCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type SaleStatusCatalogDocument = XmlDocument & { TopElem: SaleStatusCatalogDocumentTopElem; };

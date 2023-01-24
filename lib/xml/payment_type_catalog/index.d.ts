type PaymentTypeCatalogDocumentTopElem = XmlTopElem & { Doc: PaymentTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type PaymentTypeCatalogDocument = XmlDocument & { TopElem: PaymentTypeCatalogDocumentTopElem; };

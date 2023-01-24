type ClosingDocumentStatusCatalogDocumentTopElem = XmlTopElem & { Doc: ClosingDocumentStatusCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ClosingDocumentStatusCatalogDocument = XmlDocument & { TopElem: ClosingDocumentStatusCatalogDocumentTopElem; };

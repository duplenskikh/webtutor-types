type QaTestSetCatalogDocumentTopElem = XmlTopElem & { Doc: QaTestSetCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type QaTestSetCatalogDocument = XmlDocument & { TopElem: QaTestSetCatalogDocumentTopElem; };

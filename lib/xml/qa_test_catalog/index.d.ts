type QaTestCatalogDocumentTopElem = XmlTopElem & { Doc: QaTestCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  type: XmlElem<string>;
  object_type_name: XmlElem<string>;
  object_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type QaTestCatalogDocument = XmlDocument & { TopElem: QaTestCatalogDocumentTopElem; };

type QaTestParamsetCatalogDocumentTopElem = XmlTopElem & { Doc: QaTestParamsetCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type QaTestParamsetCatalogDocument = XmlDocument & { TopElem: QaTestParamsetCatalogDocumentTopElem; };

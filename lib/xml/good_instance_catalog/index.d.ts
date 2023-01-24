type GoodInstanceCatalogDocumentTopElem = XmlTopElem & { Doc: GoodInstanceCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  good_id: XmlElem<number>;
  reserved_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type GoodInstanceCatalogDocument = XmlDocument & { TopElem: GoodInstanceCatalogDocumentTopElem; };

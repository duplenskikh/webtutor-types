type GoodTypeCatalogDocumentTopElem = XmlTopElem & { Doc: GoodTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type GoodTypeCatalogDocument = XmlDocument & { TopElem: GoodTypeCatalogDocumentTopElem; };

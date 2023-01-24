type PersonObjectProfileCatalogDocumentTopElem = XmlTopElem & { Doc: PersonObjectProfileCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_catalog: XmlMultiElem<string>;
  modification_date: XmlElem<Date>;
}

type PersonObjectProfileCatalogDocument = XmlDocument & { TopElem: PersonObjectProfileCatalogDocumentTopElem; };

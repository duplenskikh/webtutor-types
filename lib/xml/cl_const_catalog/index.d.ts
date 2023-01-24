type ClConstCatalogDocumentTopElem = XmlTopElem & { Doc: ClConstCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  imprint: XmlMultiElem<string>;
  object_id: XmlMultiElem<number>;
}

type ClConstCatalogDocument = XmlDocument & { TopElem: ClConstCatalogDocumentTopElem; };

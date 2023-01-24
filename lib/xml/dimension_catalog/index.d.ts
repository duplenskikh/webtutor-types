type DimensionCatalogDocumentTopElem = XmlTopElem & { Doc: DimensionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
}

type DimensionCatalogDocument = XmlDocument & { TopElem: DimensionCatalogDocumentTopElem; };

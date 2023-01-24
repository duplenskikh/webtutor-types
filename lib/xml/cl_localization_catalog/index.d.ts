type ClLocalizationCatalogDocumentTopElem = XmlTopElem & { Doc: ClLocalizationCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
}

type ClLocalizationCatalogDocument = XmlDocument & { TopElem: ClLocalizationCatalogDocumentTopElem; };

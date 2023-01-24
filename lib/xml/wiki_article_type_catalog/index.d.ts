type WikiArticleTypeCatalogDocumentTopElem = XmlTopElem & { Doc: WikiArticleTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
}

type WikiArticleTypeCatalogDocument = XmlDocument & { TopElem: WikiArticleTypeCatalogDocumentTopElem; };

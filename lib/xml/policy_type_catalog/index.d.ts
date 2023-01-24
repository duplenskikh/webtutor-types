type PolicyTypeCatalogDocumentTopElem = XmlTopElem & { Doc: PolicyTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  provider: XmlElem<string>;
}

type PolicyTypeCatalogDocument = XmlDocument & { TopElem: PolicyTypeCatalogDocumentTopElem; };

type WorkFormCatalogDocumentTopElem = XmlTopElem & { Doc: WorkFormCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
}

type WorkFormCatalogDocument = XmlDocument & { TopElem: WorkFormCatalogDocumentTopElem; };

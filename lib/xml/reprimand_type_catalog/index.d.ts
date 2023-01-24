type ReprimandTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ReprimandTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  modification_date: XmlElem<Date>;
}

type ReprimandTypeCatalogDocument = XmlDocument & { TopElem: ReprimandTypeCatalogDocumentTopElem; };

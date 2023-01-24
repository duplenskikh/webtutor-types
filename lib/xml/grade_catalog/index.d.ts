type GradeCatalogDocumentTopElem = XmlTopElem & { Doc: GradeCatalogDocument } & {
  id: XmlElem<number>;
  level: XmlElem<number>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  modification_date: XmlElem<Date>;
}

type GradeCatalogDocument = XmlDocument & { TopElem: GradeCatalogDocumentTopElem; };

type WorkingConditionTypeCatalogDocumentTopElem = XmlTopElem & { Doc: WorkingConditionTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
}

type WorkingConditionTypeCatalogDocument = XmlDocument & { TopElem: WorkingConditionTypeCatalogDocumentTopElem; };

type WorkScheduleTypeCatalogDocumentTopElem = XmlTopElem & { Doc: WorkScheduleTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
}

type WorkScheduleTypeCatalogDocument = XmlDocument & { TopElem: WorkScheduleTypeCatalogDocumentTopElem; };

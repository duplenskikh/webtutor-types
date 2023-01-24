type ScheduleTypeCatalogDocumentTopElem = XmlTopElem & { Doc: ScheduleTypeCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  is_shedule: XmlElem<boolean>;
}

type ScheduleTypeCatalogDocument = XmlDocument & { TopElem: ScheduleTypeCatalogDocumentTopElem; };

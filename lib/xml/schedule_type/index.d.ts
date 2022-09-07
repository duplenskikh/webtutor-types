type ScheduleTypeDocumentTopElem = XmlTopElem & { Doc: ScheduleTypeDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  is_shedule: XmlElem<boolean>;
  library_url: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ScheduleTypeDocument = XmlDocument & { TopElem: ScheduleTypeDocumentTopElem; };

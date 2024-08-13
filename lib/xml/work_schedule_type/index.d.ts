type WorkScheduleTypeDocumentTopElem = XmlTopElem & {
  Doc: WorkScheduleTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WorkScheduleTypeDocument = XmlDocument & {
  TopElem: WorkScheduleTypeDocumentTopElem;
  work_schedule_type: WorkScheduleTypeDocumentTopElem;
};

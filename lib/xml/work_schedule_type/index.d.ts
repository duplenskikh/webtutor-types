type WorkScheduleTypeDocumentTopElem = XmlTopElem & { Doc: WorkScheduleTypeDocument } & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type WorkScheduleTypeDocument = XmlDocument & { TopElem: WorkScheduleTypeDocumentTopElem; };

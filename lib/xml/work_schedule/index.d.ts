type WorkScheduleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: WorkScheduleDocument;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type WorkScheduleDocument = XmlDocument & {
  TopElem: WorkScheduleDocumentTopElem;
  work_schedule: WorkScheduleDocumentTopElem;
  DocDesc(): string;
};

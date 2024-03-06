type WorkScheduleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: WorkScheduleDocument;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type WorkScheduleDocument = XmlDocument & {
  TopElem: WorkScheduleDocumentTopElem;
  work_schedule: WorkScheduleDocumentTopElem;
  DocDesc(): unknown;
};

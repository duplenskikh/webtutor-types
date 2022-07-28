type WorkScheduleDocumentTopElem = XmlTopElem & { Doc: WorkScheduleDocument } & 
  ObjectCodeNameBase &
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type WorkScheduleDocument = XmlDocument & { TopElem: WorkScheduleDocumentTopElem; };

type TimeEntryDocumentTopElem = XmlTopElem & { Doc: TimeEntryDocument } & 
  PersonFillingBase &
  FileListBase &
  CustomElemsBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  org_id: XmlElem<number>;
  task_id: XmlElem<number>;
  task_name: XmlElem<string>;
  person_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  end_date: XmlElem<Date>;
  duration: XmlElem<number>;
  description: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type TimeEntryDocument = XmlDocument & { TopElem: TimeEntryDocumentTopElem; };

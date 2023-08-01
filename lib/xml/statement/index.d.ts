type StatementDocumentTopElem = XmlTopElem & { Doc: StatementDocument } & 
PersonFillingBase &
FileListBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  voited: XmlElem<boolean>;
  voided: XmlElem<boolean>;
  statement_ref_id(): unknown;
  learning_storage_id: XmlElem<number>;
  person_id: XmlElem<number>;
  activity_id: XmlElem<number>;
  activity_code: XmlElem<string>;
  activity_name: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  verb_name: XmlElem<string>;
  success: XmlElem<boolean>;
  completion: XmlElem<boolean>;
  response: XmlElem<string>;
  duration: XmlElem<string>;
  processed: XmlElem<boolean>;
  create_date: XmlElem<Date>;
  create_ticks: XmlElem<number>;
  version: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type StatementDocument = XmlDocument & {
  TopElem: StatementDocumentTopElem;
};

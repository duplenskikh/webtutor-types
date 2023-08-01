type ObjectDataDocumentTopElem = XmlTopElem & { Doc: ObjectDataDocument } & 
ObjectTypeBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name(): unknown;
  object_data_type_id: XmlElem<number>;
  budget_period_id: XmlElem<number>;
  status_id: XmlElem<string>;
  create_date: XmlElem<Date>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  sec_object_type: XmlElem<string>;
  sec_object_id: XmlElem<number>;
  sec_object_name: XmlElem<string>;
  data: XmlElem<string>;
  data_str: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
};

type ObjectDataDocument = XmlDocument & {
  TopElem: ObjectDataDocumentTopElem;
};

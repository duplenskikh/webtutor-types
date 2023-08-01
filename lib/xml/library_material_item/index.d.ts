interface LibraryMaterialItemDocumentChangeLog {
  id: XmlElem<string>;
  person_id: XmlElem<number>;
  state_id: XmlElem<string>;
  issue_date: XmlElem<Date>;
  return_plan_date: XmlElem<Date>;
  return_date: XmlElem<Date>;
  date: XmlElem<Date>;
}

type LibraryMaterialItemDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialItemDocument } & 
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  material_id: XmlElem<number>;
  person_id: XmlElem<number>;
  number: XmlElem<string>;
  location: XmlElem<string>;
  format_id: XmlElem<string>;
  state_id: XmlElem<string>;
  current_page_id: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  issue_date: XmlElem<Date>;
  return_plan_date: XmlElem<Date>;
  return_date: XmlElem<Date>;
  change_logs: XmlMultiElem<LibraryMaterialItemDocumentChangeLog>;
  clear_data(): unknown;
  add_log_record(): unknown;
};

type LibraryMaterialItemDocument = XmlDocument & {
  TopElem: LibraryMaterialItemDocumentTopElem;
};

interface LibraryMaterialItemDocumentChangeLog {
  id: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.availability_states>;
  issue_date: XmlElem<Date>;
  return_plan_date: XmlElem<Date>;
  return_date: XmlElem<Date>;
  date: XmlElem<Date>;
}

type LibraryMaterialItemDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LibraryMaterialItemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string>;
  location: XmlElem<string>;
  format_id: XmlElem<string, typeof common.material_format_types>;
  state_id: XmlElem<string, typeof common.availability_states>;
  current_page_id: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  issue_date: XmlElem<Date>;
  return_plan_date: XmlElem<Date>;
  return_date: XmlElem<Date>;
  change_logs: XmlMultiElem<LibraryMaterialItemDocumentChangeLog>;
  clear_data(teSource: unknown): unknown;
  add_log_record(teMaterialItem: unknown): unknown;
};

type LibraryMaterialItemDocument = XmlDocument & {
  TopElem: LibraryMaterialItemDocumentTopElem;
};

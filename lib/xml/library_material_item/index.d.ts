interface LibraryMaterialItemDocumentChangeLog {
  id: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.availability_states>;
  issue_date: XmlElem<Date | null>;
  return_plan_date: XmlElem<Date | null>;
  return_date: XmlElem<Date | null>;
  date: XmlElem<Date | null>;
}

type LibraryMaterialItemDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LibraryMaterialItemDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  location: XmlElem<string | null>;
  format_id: XmlElem<string | null, typeof common.material_format_types>;
  state_id: XmlElem<string | null, typeof common.availability_states>;
  current_page_id: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  issue_date: XmlElem<Date | null>;
  return_plan_date: XmlElem<Date | null>;
  return_date: XmlElem<Date | null>;
  change_logs: XmlMultiElem<LibraryMaterialItemDocumentChangeLog | null>;
  clear_data(sourceTopElem: unknown): unknown;
  add_log_record(materialItemTopElem: unknown): unknown;
};

type LibraryMaterialItemDocument = XmlDocument & {
  TopElem: LibraryMaterialItemDocumentTopElem;
  library_material_item: LibraryMaterialItemDocumentTopElem;
  OnBeforeSave(): void;
};

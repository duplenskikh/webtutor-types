interface LibraryMaterialViewingDocumentPage {
  page_id: XmlElem<string>;
  viewed: XmlElem<boolean>;
}

type LibraryMaterialViewingDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialViewingDocument } &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  material_id: XmlElem<number>;
  material_name: XmlElem<string>;
  person_id: XmlElem<number>;
  duration: XmlElem<number>;
  location: XmlElem<number>;
  pages: XmlMultiElem<LibraryMaterialViewingDocumentPage>;
  state_id: XmlElem<string>;
  current_page_id: XmlElem<string>;
  education_plan_id: XmlElem<number>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  start_viewing_date: XmlElem<Date>;
  last_viewing_date: XmlElem<Date>;
  finish_viewing_date: XmlElem<Date>;
};

type LibraryMaterialViewingDocument = XmlDocument & {
  TopElem: LibraryMaterialViewingDocumentTopElem;
};

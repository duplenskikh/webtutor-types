interface LibraryMaterialViewingDocumentPage {
  page_id: XmlElem<string>;
  viewed: XmlElem<boolean>;
}

type LibraryMaterialViewingDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LibraryMaterialViewingDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  material_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  duration: XmlElem<number>;
  location: XmlElem<number>;
  pages: XmlMultiElem<LibraryMaterialViewingDocumentPage>;
  state_id: XmlElem<string, typeof common.viewing_states>;
  current_page_id: XmlElem<string>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  start_viewing_date: XmlElem<Date>;
  last_viewing_date: XmlElem<Date>;
  finish_viewing_date: XmlElem<Date>;
};

type LibraryMaterialViewingDocument = XmlDocument & {
  TopElem: LibraryMaterialViewingDocumentTopElem;
  library_material_viewing: LibraryMaterialViewingDocumentTopElem;

};

interface LibraryMaterialViewingDocumentPage {
  page_id: XmlElem<string | null>;
  viewed: XmlElem<boolean | null>;
}

type LibraryMaterialViewingDocumentTopElem = XmlTopElem &
PersonFillingBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: LibraryMaterialViewingDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  material_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  location: XmlElem<number | null>;
  pages: XmlMultiElem<LibraryMaterialViewingDocumentPage | null>;
  state_id: XmlElem<string | null, typeof common.viewing_states>;
  current_page_id: XmlElem<string | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  start_viewing_date: XmlElem<Date | null>;
  last_viewing_date: XmlElem<Date | null>;
  finish_viewing_date: XmlElem<Date | null>;
};

type LibraryMaterialViewingDocument = XmlDocument & {
  TopElem: LibraryMaterialViewingDocumentTopElem;
  library_material_viewing: LibraryMaterialViewingDocumentTopElem;
};

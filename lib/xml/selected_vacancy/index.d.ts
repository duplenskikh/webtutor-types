type SelectedVacancyDocumentTopElem = XmlTopElem & {
  Doc: SelectedVacancyDocument;
  vacancy_id: XmlElem<number, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type SelectedVacancyDocument = XmlDocument & {
  TopElem: SelectedVacancyDocumentTopElem;
  selected_vacancy: SelectedVacancyDocumentTopElem;
  DocDesc(): unknown;
};

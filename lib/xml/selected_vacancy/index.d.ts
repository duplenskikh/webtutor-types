type SelectedVacancyDocumentTopElem = XmlTopElem & {
  Doc: SelectedVacancyDocument;
  vacancy_id: XmlElem<number | null, VacancyCatalogDocumentTopElem>;
  vacancy_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type SelectedVacancyDocument = XmlDocument & {
  TopElem: SelectedVacancyDocumentTopElem;
  selected_vacancy: SelectedVacancyDocumentTopElem;
  DocDesc(): string;
};

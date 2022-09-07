type SelectedVacancyDocumentTopElem = XmlTopElem & { Doc: SelectedVacancyDocument } & {
  vacancy_id: XmlElem<number>;
  vacancy_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type SelectedVacancyDocument = XmlDocument & {
  TopElem: SelectedVacancyDocumentTopElem;
};

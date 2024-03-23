type VacancyTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: VacancyTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type VacancyTypeDocument = XmlDocument & {
  TopElem: VacancyTypeDocumentTopElem;
  vacancy_type: VacancyTypeDocumentTopElem;
  DocDesc(): string;
};

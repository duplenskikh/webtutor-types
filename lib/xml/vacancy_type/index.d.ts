type VacancyTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: VacancyTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type VacancyTypeDocument = XmlDocument & {
  TopElem: VacancyTypeDocumentTopElem;
  vacancy_type: VacancyTypeDocumentTopElem;
  DocDesc(): string;
};

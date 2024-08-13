type VacancyReasonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: VacancyReasonDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type VacancyReasonDocument = XmlDocument & {
  TopElem: VacancyReasonDocumentTopElem;
  vacancy_reason: VacancyReasonDocumentTopElem;
  DocDesc(): string;
};

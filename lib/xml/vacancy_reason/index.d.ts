type VacancyReasonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: VacancyReasonDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type VacancyReasonDocument = XmlDocument & {
  TopElem: VacancyReasonDocumentTopElem;
  vacancy_reason: VacancyReasonDocumentTopElem;
  DocDesc(): string;
};

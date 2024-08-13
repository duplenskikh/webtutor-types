type VacancySourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: VacancySourceDocument;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type VacancySourceDocument = XmlDocument & {
  TopElem: VacancySourceDocumentTopElem;
  vacancy_source: VacancySourceDocumentTopElem;
  DocDesc(): string;
};

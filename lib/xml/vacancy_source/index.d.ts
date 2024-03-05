type VacancySourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: VacancySourceDocument;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type VacancySourceDocument = XmlDocument & {
  TopElem: VacancySourceDocumentTopElem;
};

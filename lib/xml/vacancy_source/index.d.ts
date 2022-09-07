type VacancySourceDocumentTopElem = XmlTopElem & { Doc: VacancySourceDocument } & 
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type VacancySourceDocument = XmlDocument & { TopElem: VacancySourceDocumentTopElem; };

type VacancyReasonDocumentTopElem = XmlTopElem & { Doc: VacancyReasonDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type VacancyReasonDocument = XmlDocument & { TopElem: VacancyReasonDocumentTopElem; };

type VacancyTypeDocumentTopElem = XmlTopElem & { Doc: VacancyTypeDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase & {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type VacancyTypeDocument = XmlDocument & { TopElem: VacancyTypeDocumentTopElem; };

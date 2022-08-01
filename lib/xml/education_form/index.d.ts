type EducationFormDocumentTopElem = XmlTopElem & { Doc: EducationFormDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type EducationFormDocument = XmlDocument & { TopElem: EducationFormDocumentTopElem; };

type EducationTypeDocumentTopElem = XmlTopElem & { Doc: EducationTypeDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type EducationTypeDocument = XmlDocument & { TopElem: EducationTypeDocumentTopElem; };

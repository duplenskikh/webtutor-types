type ProfessionalAreaTypeDocumentTopElem = XmlTopElem & { Doc: ProfessionalAreaTypeDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase & {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type ProfessionalAreaTypeDocument = XmlDocument & { TopElem: ProfessionalAreaTypeDocumentTopElem; };

type WorkExperienceDocumentTopElem = XmlTopElem & { Doc: WorkExperienceDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type WorkExperienceDocument = XmlDocument & { TopElem: WorkExperienceDocumentTopElem; };

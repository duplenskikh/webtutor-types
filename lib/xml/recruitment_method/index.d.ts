type RecruitmentMethodDocumentTopElem = XmlTopElem & { Doc: RecruitmentMethodDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type RecruitmentMethodDocument = XmlDocument & { TopElem: RecruitmentMethodDocumentTopElem; };

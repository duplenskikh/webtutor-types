type MaterialLiabilityDocumentTopElem = XmlTopElem & { Doc: MaterialLiabilityDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type MaterialLiabilityDocument = XmlDocument & { TopElem: MaterialLiabilityDocumentTopElem; };

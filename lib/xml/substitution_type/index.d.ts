type SubstitutionTypeDocumentTopElem = XmlTopElem & { Doc: SubstitutionTypeDocument } & 
ObjectCodeNameBase &
CustomElemsBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type SubstitutionTypeDocument = XmlDocument & { TopElem: SubstitutionTypeDocumentTopElem; };

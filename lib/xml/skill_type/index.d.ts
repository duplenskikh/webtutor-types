type SkillTypeDocumentTopElem = XmlTopElem & { Doc: SkillTypeDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type SkillTypeDocument = XmlDocument & {
  TopElem: SkillTypeDocumentTopElem;
};

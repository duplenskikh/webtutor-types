type SkillTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: SkillTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type SkillTypeDocument = XmlDocument & {
  TopElem: SkillTypeDocumentTopElem;
  skill_type: SkillTypeDocumentTopElem;
  DocDesc(): string;
};

type SkillTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: SkillTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type SkillTypeDocument = XmlDocument & {
  TopElem: SkillTypeDocumentTopElem;
  skill_type: SkillTypeDocumentTopElem;
  DocDesc(): string;
};

interface SkillDocumentLevel {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

type SkillDocumentTopElem = XmlTopElem & { Doc: SkillDocument } & 
AdminAccessBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
  skill_type_id: XmlElem<number>;
  use_parent_levels: XmlElem<boolean>;
  levels: XmlMultiElem<SkillDocumentLevel>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
};

type SkillDocument = XmlDocument & {
  TopElem: SkillDocumentTopElem;
};

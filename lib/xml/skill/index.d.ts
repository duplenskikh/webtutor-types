interface SkillDocumentLevel {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

type SkillDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: SkillDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, SkillCatalogDocumentTopElem>;
  skill_type_id: XmlElem<number, SkillTypeCatalogDocumentTopElem>;
  use_parent_levels: XmlElem<boolean>;
  levels: XmlMultiElem<SkillDocumentLevel>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type SkillDocument = XmlDocument & {
  TopElem: SkillDocumentTopElem;
};

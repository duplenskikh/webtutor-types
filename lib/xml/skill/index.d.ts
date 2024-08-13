interface SkillDocumentLevel {
  id: XmlElem<string>;
  name: XmlElem<string | null>;
}

type SkillDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: SkillDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, SkillCatalogDocumentTopElem>;
  skill_type_id: XmlElem<number | null, SkillTypeCatalogDocumentTopElem>;
  use_parent_levels: XmlElem<boolean | null>;
  levels: XmlMultiElem<SkillDocumentLevel | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type SkillDocument = XmlDocument & {
  TopElem: SkillDocumentTopElem;
  skill: SkillDocumentTopElem;
  DocDesc(): string;
};

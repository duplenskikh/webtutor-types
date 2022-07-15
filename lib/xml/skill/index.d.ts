interface SkillLevel {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface SkillTopElem extends XmlTopElem<SkillDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
  skill_type_id?: XmlElem<number>;
  use_parent_levels?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  levels?: XmlMultiElem<SkillLevel>;
}

type SkillDocument = XmlDocument<SkillTopElem>;

interface SkillTypeTopElem extends XmlTopElem<SkillTypeDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type SkillTypeDocument = XmlDocument<SkillTypeTopElem>;

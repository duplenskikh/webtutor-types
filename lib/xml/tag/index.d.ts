interface TagExpert {
  expert_id?: XmlElem<number>;
}

interface TagTopElem extends XmlTopElem<TagDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  require_acknowledgement?: XmlElem<boolean>;
  knowledge_part_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  experts?: XmlMultiElem<TagExpert>;
  access?: XmlElem<AccessDocBase>;
}

type TagDocument = XmlDocument<TagTopElem>;

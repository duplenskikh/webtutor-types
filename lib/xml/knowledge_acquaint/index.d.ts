interface KnowledgeAcquaintView extends DescBase {
}

interface KnowledgeAcquaintTopElem extends XmlTopElem<KnowledgeAcquaintDocument>, PersonFillingBase, FileListBase {
  code?: XmlElem<string>;
  knowledge_part_id?: XmlElem<number>;
  knowledge_part_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  level_id?: XmlElem<string>;
  level_index?: XmlElem<number>;
  level_name?: XmlElem<string>;
  sec_object_type?: XmlElem<string>;
  sec_object_id?: XmlElem<number>;
  sec_object_name?: XmlElem<string>;
  state_id?: XmlElem<string>;
  type_id?: XmlElem<string>;
  confirmation_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  confirmation_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<KnowledgeAcquaintView>;
}

type KnowledgeAcquaintDocument = XmlDocument<KnowledgeAcquaintTopElem>;

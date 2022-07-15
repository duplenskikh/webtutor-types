interface KnowledgeClassifierView extends DescBase {
  selector?: XmlElem<string>;
}

interface KnowledgeClassifierTopElem extends XmlTopElem<KnowledgeClassifierDocument>, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<KnowledgeClassifierView>;
}

type KnowledgeClassifierDocument = XmlDocument<KnowledgeClassifierTopElem>;

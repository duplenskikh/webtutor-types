interface CompetenceBlockView {
  selector?: XmlElem<string>;
}

interface CompetenceBlockTopElem extends XmlTopElem<CompetenceBlockDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<CompetenceBlockView>;
}

type CompetenceBlockDocument = XmlDocument<CompetenceBlockTopElem>;

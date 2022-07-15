interface DnEduConditionView {
  selector?: XmlElem<string>;
}

interface DnEduConditionTopElem extends XmlTopElem<DnEduConditionDocument>, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnEduConditionView>;
}

type DnEduConditionDocument = XmlDocument<DnEduConditionTopElem>;

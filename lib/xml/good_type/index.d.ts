interface GoodTypeView extends DescBase {
}

interface GoodTypeTopElem extends XmlTopElem<GoodTypeDocument>, ObjectCodeNameBase {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<GoodTypeView>;
}

type GoodTypeDocument = XmlDocument<GoodTypeTopElem>;

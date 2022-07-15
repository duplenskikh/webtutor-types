interface PositionLevelView extends DescBase {
}

interface PositionLevelTopElem extends XmlTopElem<PositionLevelDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<PositionLevelView>;
}

type PositionLevelDocument = XmlDocument<PositionLevelTopElem>;

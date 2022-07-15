interface KeyPositionThreatView extends DescBase {
}

interface KeyPositionThreatTopElem extends XmlTopElem<KeyPositionThreatDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  color?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<KeyPositionThreatView>;
}

type KeyPositionThreatDocument = XmlDocument<KeyPositionThreatTopElem>;

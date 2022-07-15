interface RiskPerspectiveView extends DescBase {
}

interface RiskPerspectiveTopElem extends XmlTopElem<RiskPerspectiveDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<RiskPerspectiveView>;
}

type RiskPerspectiveDocument = XmlDocument<RiskPerspectiveTopElem>;

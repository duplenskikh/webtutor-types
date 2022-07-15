interface RiskLevelView extends DescBase {
}

interface RiskLevelTopElem extends XmlTopElem<RiskLevelDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<RiskLevelView>;
}

type RiskLevelDocument = XmlDocument<RiskLevelTopElem>;

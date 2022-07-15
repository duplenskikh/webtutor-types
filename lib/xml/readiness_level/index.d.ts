interface ReadinessLevelView extends DescBase {
}

interface ReadinessLevelTopElem extends XmlTopElem<ReadinessLevelDocument>, FileListBase, AdminAccessBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ReadinessLevelView>;
}

type ReadinessLevelDocument = XmlDocument<ReadinessLevelTopElem>;

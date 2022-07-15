interface ExclusionReasonView extends DescBase {
}

interface ExclusionReasonTopElem extends XmlTopElem<ExclusionReasonDocument>, ObjectCodeNameBase, FileListBase, CustomElemsBase, AdminAccessBase {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ExclusionReasonView>;
}

type ExclusionReasonDocument = XmlDocument<ExclusionReasonTopElem>;

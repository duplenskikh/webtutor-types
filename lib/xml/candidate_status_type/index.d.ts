interface CandidateStatusTypeView extends DescBase {
}

interface CandidateStatusTypeTopElem extends XmlTopElem<CandidateStatusTypeDocument>, ObjectCodeNameBase, FileListBase, AdminAccessBase, CustomElemsBase {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<CandidateStatusTypeView>;
}

type CandidateStatusTypeDocument = XmlDocument<CandidateStatusTypeTopElem>;

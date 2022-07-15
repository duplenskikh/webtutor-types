interface CandidateSourceTopElem extends XmlTopElem<CandidateSourceDocument>, ObjectCodeNameBase, AdminAccessBase {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type CandidateSourceDocument = XmlDocument<CandidateSourceTopElem>;

type CandidateStatusTypeDocumentTopElem = XmlTopElem & { Doc: CandidateStatusTypeDocument } & 
  ObjectCodeNameBase &
  FileListBase &
  AdminAccessBase &
  CustomElemsBase & {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type CandidateStatusTypeDocument = XmlDocument & { TopElem: CandidateStatusTypeDocumentTopElem; };

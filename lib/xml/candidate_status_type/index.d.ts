type CandidateStatusTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CandidateStatusTypeDocument;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type CandidateStatusTypeDocument = XmlDocument & {
  TopElem: CandidateStatusTypeDocumentTopElem;
};

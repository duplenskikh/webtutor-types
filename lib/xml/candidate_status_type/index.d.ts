type CandidateStatusTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CandidateStatusTypeDocument;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type CandidateStatusTypeDocument = XmlDocument & {
  TopElem: CandidateStatusTypeDocumentTopElem;
  candidate_status_type: CandidateStatusTypeDocumentTopElem;
  DocDesc(): string;
};

type CandidateSourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: CandidateSourceDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type CandidateSourceDocument = XmlDocument & {
  TopElem: CandidateSourceDocumentTopElem;
  candidate_source: CandidateSourceDocumentTopElem;
  DocDesc(): string;
};

type CandidateSourceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: CandidateSourceDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type CandidateSourceDocument = XmlDocument & {
  TopElem: CandidateSourceDocumentTopElem;
};

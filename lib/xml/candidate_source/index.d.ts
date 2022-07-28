type CandidateSourceDocumentTopElem = XmlTopElem & { Doc: CandidateSourceDocument } & 
  ObjectCodeNameBase &
  AdminAccessBase & {
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type CandidateSourceDocument = XmlDocument & { TopElem: CandidateSourceDocumentTopElem; };

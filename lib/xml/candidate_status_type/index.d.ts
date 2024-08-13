type CandidateStatusTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: CandidateStatusTypeDocument;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
};

type CandidateStatusTypeDocument = XmlDocument & {
  TopElem: CandidateStatusTypeDocumentTopElem;
  candidate_status_type: CandidateStatusTypeDocumentTopElem;
  DocDesc(): string;
};

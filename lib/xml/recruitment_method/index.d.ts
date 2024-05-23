type RecruitmentMethodDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: RecruitmentMethodDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type RecruitmentMethodDocument = XmlDocument & {
  TopElem: RecruitmentMethodDocumentTopElem;
  recruitment_method: RecruitmentMethodDocumentTopElem;
  DocDesc(): string;
};

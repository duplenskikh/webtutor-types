type RecruitmentMethodDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: RecruitmentMethodDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type RecruitmentMethodDocument = XmlDocument & {
  TopElem: RecruitmentMethodDocumentTopElem;
  recruitment_method: RecruitmentMethodDocumentTopElem;
  DocDesc(): string;
};

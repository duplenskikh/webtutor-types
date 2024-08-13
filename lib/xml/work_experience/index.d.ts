type WorkExperienceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkExperienceDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type WorkExperienceDocument = XmlDocument & {
  TopElem: WorkExperienceDocumentTopElem;
  work_experience: WorkExperienceDocumentTopElem;
  DocDesc(): string;
};

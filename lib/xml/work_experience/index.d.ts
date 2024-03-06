type WorkExperienceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkExperienceDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type WorkExperienceDocument = XmlDocument & {
  TopElem: WorkExperienceDocumentTopElem;
  work_experience: WorkExperienceDocumentTopElem;
  DocDesc(): unknown;
};

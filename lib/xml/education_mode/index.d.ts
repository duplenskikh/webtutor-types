type EducationModeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationModeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type EducationModeDocument = XmlDocument & {
  TopElem: EducationModeDocumentTopElem;
  education_mode: EducationModeDocumentTopElem;
  DocDesc(): string;
};

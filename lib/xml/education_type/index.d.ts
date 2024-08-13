type EducationTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationTypeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type EducationTypeDocument = XmlDocument & {
  TopElem: EducationTypeDocumentTopElem;
  education_type: EducationTypeDocumentTopElem;
  DocDesc(): string;
};

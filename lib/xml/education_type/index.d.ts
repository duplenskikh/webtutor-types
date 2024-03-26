type EducationTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationTypeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type EducationTypeDocument = XmlDocument & {
  TopElem: EducationTypeDocumentTopElem;
  education_type: EducationTypeDocumentTopElem;
  DocDesc(): string;
};

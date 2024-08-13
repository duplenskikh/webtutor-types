type EducationFormDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationFormDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type EducationFormDocument = XmlDocument & {
  TopElem: EducationFormDocumentTopElem;
  education_form: EducationFormDocumentTopElem;
  DocDesc(): string;
};

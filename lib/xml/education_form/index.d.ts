type EducationFormDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationFormDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type EducationFormDocument = XmlDocument & {
  TopElem: EducationFormDocumentTopElem;
};

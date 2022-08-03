type EducationModeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: EducationModeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type EducationModeDocument = XmlDocument & {
  TopElem: EducationModeDocumentTopElem;
};

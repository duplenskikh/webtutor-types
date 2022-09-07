type SelectedResumeDocumentTopElem = XmlTopElem & { Doc: SelectedResumeDocument } & 
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  code: XmlElem<string>;
  person_id: XmlElem<number>;
  resume_id: XmlElem<number>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
}

type SelectedResumeDocument = XmlDocument & {
  TopElem: SelectedResumeDocumentTopElem;
};

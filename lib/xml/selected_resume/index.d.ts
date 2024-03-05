type SelectedResumeDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: SelectedResumeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  resume_id: XmlElem<number, ResumeCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type SelectedResumeDocument = XmlDocument & {
  TopElem: SelectedResumeDocumentTopElem;
};

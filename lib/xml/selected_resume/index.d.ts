type SelectedResumeDocumentTopElem = XmlTopElem &
PersonFillingBase &
FileListBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: SelectedResumeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  resume_id: XmlElem<number | null, ResumeCatalogDocumentTopElem>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type SelectedResumeDocument = XmlDocument & {
  TopElem: SelectedResumeDocumentTopElem;
  selected_resume: SelectedResumeDocumentTopElem;
  DocDesc(): string;
};

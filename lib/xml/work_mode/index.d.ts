type WorkModeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkModeDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type WorkModeDocument = XmlDocument & {
  TopElem: WorkModeDocumentTopElem;
  work_mode: WorkModeDocumentTopElem;
  DocDesc(): unknown;
};

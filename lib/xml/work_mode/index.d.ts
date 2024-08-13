type WorkModeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkModeDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type WorkModeDocument = XmlDocument & {
  TopElem: WorkModeDocumentTopElem;
  work_mode: WorkModeDocumentTopElem;
  DocDesc(): string;
};

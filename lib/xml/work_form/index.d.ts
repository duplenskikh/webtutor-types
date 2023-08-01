type WorkFormDocumentTopElem = XmlTopElem & { Doc: WorkFormDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type WorkFormDocument = XmlDocument & {
  TopElem: WorkFormDocumentTopElem;
};

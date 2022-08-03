type DnEducatFormDocumentTopElem = XmlTopElem & 
AdminAccessBase & {
  Doc: DnEducatFormDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnEducatFormDocument = XmlDocument & {
  TopElem: DnEducatFormDocumentTopElem;
};

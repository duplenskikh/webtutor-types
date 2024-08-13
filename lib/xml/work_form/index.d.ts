type WorkFormDocumentTopElem = XmlTopElem & {
  Doc: WorkFormDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WorkFormDocument = XmlDocument & {
  TopElem: WorkFormDocumentTopElem;
  work_form: WorkFormDocumentTopElem;
};

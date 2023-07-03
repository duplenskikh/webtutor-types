type VerbDocumentTopElem = XmlTopElem & { Doc: VerbDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  processed: XmlElem<boolean>;
  processing_code_url: XmlElem<string>;
  processing_code: XmlElem<string>;
  code_process(): unknown;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
}

type VerbDocument = XmlDocument & {
  TopElem: VerbDocumentTopElem;
};

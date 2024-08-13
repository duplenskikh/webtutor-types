type VerbDocumentTopElem = XmlTopElem & {
  Doc: VerbDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  processed: XmlElem<boolean | null>;
  processing_code_url: XmlElem<string | null>;
  processing_code: XmlElem<string | null>;
  code_process(): void;
  is_std: XmlElem<boolean | null>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type VerbDocument = XmlDocument & {
  TopElem: VerbDocumentTopElem;
  verb: VerbDocumentTopElem;
  DocDesc(): string;
};

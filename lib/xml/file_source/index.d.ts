type FileSourceDocumentTopElem = XmlTopElem &
WebVariablesBase & {
  Doc: FileSourceDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  category: XmlElem<string | null>;
  url: XmlElem<string | null>;
  search_available: XmlElem<boolean>;
  selection_available: XmlElem<boolean>;
  run_code: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type FileSourceDocument = XmlDocument & {
  TopElem: FileSourceDocumentTopElem;
  file_source: FileSourceDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

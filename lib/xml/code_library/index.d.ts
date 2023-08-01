type CodeLibraryDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: CodeLibraryDocument;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
};

type CodeLibraryDocument = XmlDocument & {
  TopElem: CodeLibraryDocumentTopElem;
};

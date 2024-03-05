type AuthTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: AuthTypeDocument;
  is_std: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type AuthTypeDocument = XmlDocument & {
  TopElem: AuthTypeDocumentTopElem;
};

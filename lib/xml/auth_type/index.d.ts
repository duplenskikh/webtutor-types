type AuthTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: AuthTypeDocument;
  is_std: XmlElem<boolean | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type AuthTypeDocument = XmlDocument & {
  TopElem: AuthTypeDocumentTopElem;
  auth_type: AuthTypeDocumentTopElem;
  DocDesc(): string;
};

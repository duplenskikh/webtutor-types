interface SubstitutionTypeDocumentOperation {
  operation_id: XmlElem<number, OperationCatalogDocumentTopElem>;
  operation_code: XmlElem<string>;
}

interface SubstitutionTypeDocumentRemoteAction {
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  remote_action_code: XmlElem<string>;
}

type SubstitutionTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase & {
  Doc: SubstitutionTypeDocument;
  object_type: XmlElem<string>;
  operations: XmlMultiElem<SubstitutionTypeDocumentOperation>;
  remote_actions: XmlMultiElem<SubstitutionTypeDocumentRemoteAction>;
  comment: XmlElem<string>;
  data_str: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  is_active: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
};

type SubstitutionTypeDocument = XmlDocument & {
  TopElem: SubstitutionTypeDocumentTopElem;
  substitution_type: SubstitutionTypeDocumentTopElem;
  DocDesc(): string;
};

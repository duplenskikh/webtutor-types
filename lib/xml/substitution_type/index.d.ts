interface SubstitutionTypeDocumentOperation {
  operation_id: XmlElem<number | null, OperationCatalogDocumentTopElem>;
  operation_code: XmlElem<string | null>;
}

interface SubstitutionTypeDocumentRemoteAction {
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  remote_action_code: XmlElem<string | null>;
}

type SubstitutionTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
CustomElemsBase & {
  Doc: SubstitutionTypeDocument;
  object_type: XmlElem<string | null>;
  /** Операции */
  operations: XmlMultiElem<SubstitutionTypeDocumentOperation | null>;
  remote_actions: XmlMultiElem<SubstitutionTypeDocumentRemoteAction | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  data_str: XmlElem<string | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  is_active: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type SubstitutionTypeDocument = XmlDocument & {
  TopElem: SubstitutionTypeDocumentTopElem;
  substitution_type: SubstitutionTypeDocumentTopElem;
  DocDesc(): string;
};

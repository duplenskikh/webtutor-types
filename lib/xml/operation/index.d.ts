type OperationDocumentTopElem = XmlTopElem &
MsParametersBase &
WebVariablesBase & {
  Doc: OperationDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  category: XmlElem<string | null>;
  is_system: XmlElem<boolean>;
  priority: XmlElem<number>;
  action: XmlElem<string | null>;
  operation_type: XmlElem<number>;
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  operation_catalog_list: XmlElem<string | null>;
  group: XmlElem<string | null>;
  script: XmlElem<string | null>;
  post_code: XmlElem<string | null>;
  eval_code: XmlElem<string | null>;
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  access_eval_code: XmlElem<string | null>;
  use_access_eval(): unknown;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
  execute(parameters: unknown, variables: unknown): unknown;
};

type OperationDocument = XmlDocument & {
  TopElem: OperationDocumentTopElem;
  operation: OperationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

type OperationDocumentTopElem = XmlTopElem &
MsParametersBase &
WebVariablesBase & {
  Doc: OperationDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  is_system: XmlElem<boolean>;
  priority: XmlElem<number>;
  action: XmlElem<string>;
  operation_type: XmlElem<number>;
  object_name: XmlElem<string, typeof common.exchange_object_types>;
  operation_catalog_list: XmlElem<string>;
  group: XmlElem<string>;
  script: XmlElem<string>;
  post_code: XmlElem<string>;
  eval_code: XmlElem<string>;
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  access_eval_code: XmlElem<string>;
  use_access_eval(): unknown;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number>;
  execute(parameters: unknown, variables: unknown): unknown;
};

type OperationDocument = XmlDocument & {
  TopElem: OperationDocumentTopElem;
  operation: OperationDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

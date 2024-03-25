type RemoteActionDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase &
I18nBase & {
  Doc: RemoteActionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.eval_types>;
  category: XmlElem<string>;
  cache_vars: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  link_name: XmlElem<string>;
  show_in_list: XmlElem<boolean>;
  show_in_form: XmlElem<boolean>;
  url: XmlElem<string>;
  script: XmlElem<string>;
  default_disp_evaluate: XmlElem<boolean>;
  access: XmlElem<AccessDocBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  evaluate(resultType: string, request: Request, argVars: unknown): unknown;
  role_id: XmlMultiElemObject<number>;
};

type RemoteActionDocument = XmlDocument & {
  TopElem: RemoteActionDocumentTopElem;
  remote_action: RemoteActionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

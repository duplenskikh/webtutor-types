type RemoteActionDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase &
I18nBase & {
  Doc: RemoteActionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string, typeof common.eval_types>;
  category: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  link_name: XmlElem<string | null>;
  show_in_list: XmlElem<boolean>;
  show_in_form: XmlElem<boolean>;
  url: XmlElem<string | null>;
  script: XmlElem<string | null>;
  default_disp_evaluate: XmlElem<boolean>;
  access: XmlElem<AccessDocBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  evaluate(resultType: string, request: Request, argVars: unknown, configuration: string): unknown;
  role_id: XmlMultiElemObject<number | null>;
};

type RemoteActionDocument = XmlDocument & {
  TopElem: RemoteActionDocumentTopElem;
  remote_action: RemoteActionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

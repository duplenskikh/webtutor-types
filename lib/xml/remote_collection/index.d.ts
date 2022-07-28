type RemoteCollectionDocumentTopElem = XmlTopElem & { Doc: RemoteCollectionDocument } & 
  ExecCodeBase &
  WebVariablesBase &
  ResultFieldsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  cache_vars?: XmlElem<string>;
  url?: XmlElem<string>;
  script?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  comment?: XmlElem<string>;
  sort_field_name?: XmlElem<string>;
  sort_direction?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  setPaging?(): unknown;
  setColumnsWhiteList?(): unknown;
  evaluate?(): unknown;
  role_id?: XmlMultiElem<number>;
}

type RemoteCollectionDocument = XmlDocument & { TopElem: RemoteCollectionDocumentTopElem; };

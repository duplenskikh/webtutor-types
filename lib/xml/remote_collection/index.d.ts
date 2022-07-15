interface RemoteCollectionConstructor extends CriterionBase, ColumnBase {
  use?: XmlElem<boolean>;
  object_name?: XmlElem<string>;
}

interface RemoteCollectionView extends ObjectTypeBase {
  test_format?: XmlElem<string>;
  test_destination?: XmlElem<string>;
  person_id?: XmlElem<number>;
  test_result_obj?: XmlElem<any>;
  referer_url?: XmlElem<string>;
}

interface RemoteCollectionTopElem extends XmlTopElem<RemoteCollectionDocument>, ExecCodeBase, WebVariablesBase, ResultFieldsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  category?: XmlElem<string>;
  cache_vars?: XmlElem<string>;
  url?: XmlElem<string>;
  script?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  comment?: XmlElem<string>;
  start_index?: XmlElem<number>;
  page_index?: XmlElem<number>;
  page_size?: XmlElem<number>;
  sort_field_name?: XmlElem<string>;
  sort_direction?: XmlElem<string>;
  tree_node_id?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  converter?: XmlElem<boolean>;
  columns_white_list?: XmlMultiElem<string>;
  role_id?: XmlMultiElem<number>;
  constructor?: XmlElem<RemoteCollectionConstructor>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<RemoteCollectionView>;
  setPaging?(): any;
  setColumnsWhiteList?(): any;
  evaluate?(): any;
}

type RemoteCollectionDocument = XmlDocument<RemoteCollectionTopElem>;

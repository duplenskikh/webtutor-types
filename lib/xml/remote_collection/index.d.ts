interface RemoteCollectionDocumentApiSearch {
  has_fulltext: XmlElem<boolean>;
  names: XmlElem<string>;
}

interface RemoteCollectionDocumentApiFilter {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.filter_types>;
  title: XmlElem<string>;
}

interface RemoteCollectionDocumentAnalyticsParamWvar {
  wvar_id: XmlElem<string>;
}

interface RemoteCollectionDocumentAnalytics {
  param_wvars: XmlMultiElem<RemoteCollectionDocumentAnalyticsParamWvar>;
  filter_start_date: XmlElem<string>;
  filter_finish_date: XmlElem<string>;
  filter_person_ids: XmlElem<string>;
  field_name: XmlElem<string>;
  field_timestamp: XmlElem<string>;
}

interface RemoteCollectionDocumentConstructor extends CriterionBase, ColumnBase {
  use: XmlElem<boolean>;
  object_name: XmlElem<string>;
}

type RemoteCollectionDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase &
I18nBase & {
  Doc: RemoteCollectionDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  category: XmlElem<string>;
  cache_vars: XmlElem<string>;
  url: XmlElem<string>;
  script: XmlElem<string>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  api_ver: XmlElem<string>;
  api_search: XmlElem<RemoteCollectionDocumentApiSearch>;
  api_filters: XmlMultiElem<RemoteCollectionDocumentApiFilter>;
  ready_to_analytics: XmlElem<boolean>;
  analytics: XmlElem<RemoteCollectionDocumentAnalytics>;
  comment: XmlElem<string>;
  sort_field_name: XmlElem<string>;
  sort_direction: XmlElem<string>;
  constructor: XmlElem<RemoteCollectionDocumentConstructor>;
  access: XmlElem<AccessDocBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  setPaging(idx: number, size: number): unknown;
  setColumnsWhiteList(aFields: unknown): unknown;
  getStamp(curUserId: number, curObjectId: number): unknown;
  evaluate(dataType: string, request: Request, argVars: unknown): unknown;
  role_id: XmlMultiElemObject<number>;
};

type RemoteCollectionDocument = XmlDocument & {
  TopElem: RemoteCollectionDocumentTopElem;
  remote_collection: RemoteCollectionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

interface RemoteCollectionDocumentApiSearch {
  has_fulltext: XmlElem<boolean>;
  names: XmlElem<string | null>;
}

interface RemoteCollectionDocumentApiFilter {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.filter_types>;
  title: XmlElem<string | null>;
}

interface RemoteCollectionDocumentAnalyticsParamWvar {
  wvar_id: XmlElem<string | null>;
}

interface RemoteCollectionDocumentAnalytics {
  param_wvars: XmlMultiElem<RemoteCollectionDocumentAnalyticsParamWvar | null>;
  filter_start_date: XmlElem<string | null>;
  filter_finish_date: XmlElem<string | null>;
  filter_person_ids: XmlElem<string | null>;
  field_name: XmlElem<string | null>;
  field_timestamp: XmlElem<string | null>;
}

interface RemoteCollectionDocumentConstructor extends CriterionBase, ColumnBase {
  use: XmlElem<boolean>;
  object_name: XmlElem<string | null>;
}

type RemoteCollectionDocumentTopElem = XmlTopElem &
ExecCodeBase &
WebVariablesBase &
ResultFieldsBase &
I18nBase & {
  Doc: RemoteCollectionDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  category: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  url: XmlElem<string | null>;
  script: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  api_ver: XmlElem<string | null>;
  api_search: XmlElem<RemoteCollectionDocumentApiSearch | null>;
  api_filters: XmlMultiElem<RemoteCollectionDocumentApiFilter | null>;
  ready_to_analytics: XmlElem<boolean>;
  analytics: XmlElem<RemoteCollectionDocumentAnalytics | null>;
  comment: XmlElem<string | null>;
  sort_field_name: XmlElem<string | null>;
  sort_direction: XmlElem<string | null>;
  constructor: XmlElem<RemoteCollectionDocumentConstructor | null>;
  access: XmlElem<AccessDocBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  setPaging(idx: number, size: number): unknown;
  setColumnsWhiteList(aFields: unknown): unknown;
  getStamp(curUserId: number, curObjectId: number): unknown;
  evaluate(dataType: string, request: Request, argVars: unknown, configuration: string): unknown;
  role_id: XmlMultiElemObject<number | null>;
};

type RemoteCollectionDocument = XmlDocument & {
  TopElem: RemoteCollectionDocumentTopElem;
  remote_collection: RemoteCollectionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

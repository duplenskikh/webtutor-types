interface RemoteCollectionDocumentApiSearch {
  has_fulltext: XmlElem<boolean>;
  names: XmlElem<string | null>;
}

interface RemoteCollectionDocumentApiFilter {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  /** Тип */
  type: XmlElem<string | null, typeof common.filter_types>;
  /** Заголовок */
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
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Комментарий */
  category: XmlElem<string | null>;
  cache_vars: XmlElem<string | null>;
  url: XmlElem<string | null>;
  /** Код */
  script: XmlElem<string | null>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  api_ver: XmlElem<string | null>;
  api_search: XmlElem<RemoteCollectionDocumentApiSearch | null>;
  /** Фильтры */
  api_filters: XmlMultiElem<RemoteCollectionDocumentApiFilter | null>;
  ready_to_analytics: XmlElem<boolean>;
  analytics: XmlElem<RemoteCollectionDocumentAnalytics | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  sort_field_name: XmlElem<string | null>;
  sort_direction: XmlElem<string | null>;
  constructor: XmlElem<RemoteCollectionDocumentConstructor | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  setPaging(idx: number, size: number): unknown;
  setColumnsWhiteList(aFields: unknown): unknown;
  getStamp(curUserId: number, curObjectId: number): unknown;
  evaluate(dataType: string, request: Request, argVars: unknown, configuration: string): unknown;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type RemoteCollectionDocument = XmlDocument & {
  TopElem: RemoteCollectionDocumentTopElem;
  remote_collection: RemoteCollectionDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

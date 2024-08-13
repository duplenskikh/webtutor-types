type RecommenderAlgorithmCatalogDocumentTopElem = XmlTopElem &
MsPeriodityBase & {
  id: XmlElem<number | null>;
  /** Код курса */
  code: XmlElem<string | null>;
  /** Название курса */
  name: XmlElem<string | null>;
  /** Ресурс базы */
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  /** Включен */
  is_enabled: XmlElem<boolean>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  /** Текущий пользователь */
  is_cur_user: XmlElem<boolean>;
  /** Типы объектов */
  is_object_type: XmlElem<boolean>;
  use_cache: XmlElem<boolean>;
  cache_time: XmlElem<number | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

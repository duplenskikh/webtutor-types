type StatisticRecCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Включен */
  is_enabled: XmlElem<boolean>;
  /** Рассчитывать автоматически */
  auto_calc: XmlElem<boolean>;
  /** Дата последнего расчета */
  last_calculate_date: XmlElem<Date | null>;
  /** Периодичность вычисления */
  calc_period: XmlElem<number | null>;
  context_calc: XmlElem<boolean>;
  ready_to_analytics: XmlElem<boolean>;
  /** Тип объекта */
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Период */
  period_type: XmlMultiElemObject<string | null>;
  /** Тип расчета */
  period_calc_type: XmlElem<string, typeof common.period_calc_types>;
  /** Начало */
  start_date: XmlElem<Date | null>;
  /** Окончание */
  finish_date: XmlElem<Date | null>;
  /** Сдвиг значений */
  depth: XmlElem<number | null>;
  /** Норма с */
  norm_from: XmlElem<number | null>;
  /** Норма по */
  norm_to: XmlElem<number | null>;
  /** Тип уведомления */
  notification_type_id: XmlElem<number | null, NotificationCatalogDocumentTopElem>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Тип объекта */
  catalog: XmlMultiElemObject<string | null, typeof common.exchange_object_types>;
  /** Блок */
  access_block_type: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

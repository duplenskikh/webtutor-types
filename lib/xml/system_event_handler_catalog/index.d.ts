type SystemEventHandlerCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase & {
  /** Включен */
  is_enabled: XmlElem<boolean>;
  code_type: XmlElem<string | null>;
  /** Системное событие */
  system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

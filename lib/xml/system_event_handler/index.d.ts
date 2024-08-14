type SystemEventHandlerDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  Doc: SystemEventHandlerDocument;
  /** Включен */
  is_enabled: XmlElem<boolean>;
  /** Системное событие */
  system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  /** Условия выполнения */
  perfom_condition: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Системное событие */
  last_system_event_id: XmlElem<number | null, SystemEventCatalogDocumentTopElem>;
  /** Включен */
  last_is_enabled: XmlElem<boolean>;
};

type SystemEventHandlerDocument = XmlDocument & {
  TopElem: SystemEventHandlerDocumentTopElem;
  system_event_handler: SystemEventHandlerDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

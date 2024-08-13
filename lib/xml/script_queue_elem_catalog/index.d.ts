type ScriptQueueElemCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Код */
  code: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  /** Время запуска */
  start_time: XmlElem<Date | null>;
  /** Время завершения */
  finish_time: XmlElem<Date | null>;
  /** Задержка между запусками */
  delay: XmlElem<number | null>;
  /** Выполнено */
  completed: XmlElem<boolean>;
  /** Удалять после выполнения */
  delete_automatically: XmlElem<boolean>;
  /** Блок, к которому прикреплен */
  block: XmlElem<string | null, AccessBlockCatalogDocumentTopElem>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Дата модификации */
  modification_date: XmlElem<Date | null>;
  /** Код сервера */
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

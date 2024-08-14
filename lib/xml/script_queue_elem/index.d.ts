type ScriptQueueElemDocumentTopElem = XmlTopElem & {
  Doc: ScriptQueueElemDocument;
  id: XmlElem<number | null>;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  /** Время запуска */
  start_time: XmlElem<Date | null>;
  /** Время завершения */
  finish_time: XmlElem<Date | null>;
  /** Задержка между запусками */
  delay: XmlElem<number | null>;
  /** Выполнено */
  completed: XmlElem<boolean>;
  /** Текст ошибки */
  error: XmlElem<string | null>;
  /** Результат */
  result: XmlElem<string | null>;
  /** Удалять после выполнения */
  delete_automatically: XmlElem<boolean>;
  /** Объект */
  obj: XmlElem<unknown | null>;
  /** Выполняемый код */
  run_code: XmlElem<string | null>;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ScriptQueueElemDocument = XmlDocument & {
  TopElem: ScriptQueueElemDocumentTopElem;
  script_queue_elem: ScriptQueueElemDocumentTopElem;
  DocDesc(): string;
};

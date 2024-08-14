interface QaTestResultDocumentLogRecord {
  timestamp: XmlElem<number | null>;
  /** Дата/Время */
  datetime: XmlElem<Date | null>;
  /** Проверка */
  is_check: XmlElem<boolean>;
  /** Не пройдено */
  is_failed: XmlElem<boolean>;
  /** Фактический результат */
  result_value: XmlElem<string | null>;
  /** Ожидаемый результат */
  template_value: XmlElem<string | null>;
  /** Сообщение */
  text: XmlElem<string | null>;
}

type QaTestResultDocumentTopElem = XmlTopElem & {
  Doc: QaTestResultDocument;
  id: XmlElem<number | null>;
  /** Название */
  name(): string;
  test_id: XmlElem<number | null, QaTestCatalogDocumentTopElem>;
  test_set_id: XmlElem<number | null, QaTestSetCatalogDocumentTopElem>;
  test_paramset_id: XmlElem<number | null, QaTestParamsetCatalogDocumentTopElem>;
  /** Дата начала */
  start_date: XmlElem<Date>;
  /** Дата завершения */
  finish_date: XmlElem<Date | null>;
  /** Статус работы */
  work_status: XmlElem<string, typeof common.qa_test_result_completion_states>;
  /** Статус успешности */
  finish_status: XmlElem<string | null, typeof common.qa_test_result_states>;
  error_code: XmlElem<number | null>;
  /** Продолжительность */
  duration: XmlElem<number | null>;
  log_records: XmlMultiElem<QaTestResultDocumentLogRecord | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type QaTestResultDocument = XmlDocument & {
  TopElem: QaTestResultDocumentTopElem;
  qa_test_result: QaTestResultDocumentTopElem;
  DocDesc(): string;
};

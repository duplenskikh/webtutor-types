interface QaTestResultDocumentLogRecord {
  timestamp: XmlElem<number | null>;
  datetime: XmlElem<Date | null>;
  is_check: XmlElem<boolean>;
  is_failed: XmlElem<boolean>;
  result_value: XmlElem<string | null>;
  template_value: XmlElem<string | null>;
  text: XmlElem<string | null>;
}

type QaTestResultDocumentTopElem = XmlTopElem & {
  Doc: QaTestResultDocument;
  id: XmlElem<number | null>;
  name(): string;
  test_id: XmlElem<number | null, QaTestCatalogDocumentTopElem>;
  test_set_id: XmlElem<number | null, QaTestSetCatalogDocumentTopElem>;
  test_paramset_id: XmlElem<number | null, QaTestParamsetCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date | null>;
  work_status: XmlElem<string, typeof common.qa_test_result_completion_states>;
  finish_status: XmlElem<string | null, typeof common.qa_test_result_states>;
  error_code: XmlElem<number | null>;
  duration: XmlElem<number | null>;
  log_records: XmlMultiElem<QaTestResultDocumentLogRecord | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type QaTestResultDocument = XmlDocument & {
  TopElem: QaTestResultDocumentTopElem;
  qa_test_result: QaTestResultDocumentTopElem;
  DocDesc(): string;
};

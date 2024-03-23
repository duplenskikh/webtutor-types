interface QaTestResultDocumentLogRecord {
  timestamp: XmlElem<number>;
  datetime: XmlElem<Date>;
  is_check: XmlElem<boolean>;
  is_failed: XmlElem<boolean>;
  result_value: XmlElem<string>;
  template_value: XmlElem<string>;
  text: XmlElem<string>;
}

type QaTestResultDocumentTopElem = XmlTopElem & {
  Doc: QaTestResultDocument;
  id: XmlElem<number>;
  name(): string;
  test_id: XmlElem<number, QaTestCatalogDocumentTopElem>;
  test_set_id: XmlElem<number, QaTestSetCatalogDocumentTopElem>;
  test_paramset_id: XmlElem<number, QaTestParamsetCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  work_status: XmlElem<string, typeof common.qa_test_result_completion_states>;
  finish_status: XmlElem<string, typeof common.qa_test_result_states>;
  error_code: XmlElem<number>;
  duration: XmlElem<number>;
  log_records: XmlMultiElem<QaTestResultDocumentLogRecord>;
  doc_info: XmlElem<DocInfoBase>;
};

type QaTestResultDocument = XmlDocument & {
  TopElem: QaTestResultDocumentTopElem;
  qa_test_result: QaTestResultDocumentTopElem;
  DocDesc(): string;
};

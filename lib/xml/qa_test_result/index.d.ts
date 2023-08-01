interface QaTestResultDocumentLogRecord {
  timestamp: XmlElem<number>;
  datetime: XmlElem<Date>;
  text: XmlElem<string>;
}

type QaTestResultDocumentTopElem = XmlTopElem & { Doc: QaTestResultDocument } & {
  id: XmlElem<number>;
  test_id: XmlElem<number>;
  test_set_id: XmlElem<number>;
  test_paramset_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  work_status: XmlElem<string>;
  finish_status: XmlElem<string>;
  error_code: XmlElem<number>;
  log_records: XmlMultiElem<QaTestResultDocumentLogRecord>;
  doc_info: XmlElem<DocInfoBase>;
};

type QaTestResultDocument = XmlDocument & {
  TopElem: QaTestResultDocumentTopElem;
};

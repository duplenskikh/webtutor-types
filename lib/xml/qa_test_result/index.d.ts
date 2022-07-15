interface QaTestResultLogRecord {
  timestamp?: XmlElem<number>;
  datetime?: XmlElem<Date>;
  text?: XmlElem<string>;
}

interface QaTestResultTopElem extends XmlTopElem<QaTestResultDocument> {
  id?: XmlElem<number>;
  test_id?: XmlElem<number>;
  test_set_id?: XmlElem<number>;
  test_paramset_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  work_status?: XmlElem<string>;
  finish_status?: XmlElem<string>;
  error_code?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  log_records?: XmlMultiElem<QaTestResultLogRecord>;
}

type QaTestResultDocument = XmlDocument<QaTestResultTopElem>;

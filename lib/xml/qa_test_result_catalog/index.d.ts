type QaTestResultCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  test_id: XmlElem<number, QaTestCatalogDocumentTopElem>;
  test_set_id: XmlElem<number, QaTestSetCatalogDocumentTopElem>;
  test_paramset_id: XmlElem<number, QaTestParamsetCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  work_status: XmlElem<string, typeof common.qa_test_result_completion_states>;
  finish_status: XmlElem<string, typeof common.qa_test_result_states>;
  error_code: XmlElem<number>;
  duration: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

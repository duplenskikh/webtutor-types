type QaTestResultCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  test_id: XmlElem<number | null, QaTestCatalogDocumentTopElem>;
  test_set_id: XmlElem<number | null, QaTestSetCatalogDocumentTopElem>;
  test_paramset_id: XmlElem<number | null, QaTestParamsetCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  work_status: XmlElem<string | null, typeof common.qa_test_result_completion_states>;
  finish_status: XmlElem<string | null, typeof common.qa_test_result_states>;
  error_code: XmlElem<number | null>;
  duration: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

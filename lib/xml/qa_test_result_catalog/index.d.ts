type QaTestResultCatalogDocumentTopElem = XmlTopElem & { Doc: QaTestResultCatalogDocument } & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  test_id: XmlElem<number>;
  test_set_id: XmlElem<number>;
  test_paramset_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  work_status: XmlElem<string>;
  finish_status: XmlElem<string>;
  error_code: XmlElem<number>;
  duration: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type QaTestResultCatalogDocument = XmlDocument & { TopElem: QaTestResultCatalogDocumentTopElem; };

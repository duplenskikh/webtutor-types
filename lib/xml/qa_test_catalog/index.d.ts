type QaTestCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.qa_test_states>;
  type: XmlElem<string, typeof common.qa_test_types>;
  object_type_name: XmlElem<string>;
  object_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

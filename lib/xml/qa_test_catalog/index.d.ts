type QaTestCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.qa_test_states>;
  type: XmlElem<string | null, typeof common.qa_test_types>;
  object_type_name: XmlElem<string | null>;
  object_name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

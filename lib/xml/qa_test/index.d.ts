type QaTestDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
ObjectTypeBase &
QaTestParamBase &
QaTestFixtureBase &
QaTestAssertBase & {
  Doc: QaTestDocument;
  create_date: XmlElem<Date | null>;
  status: XmlElem<string, typeof common.qa_test_states>;
  type: XmlElem<string, typeof common.qa_test_types>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  lib_name: XmlElem<string | null>;
  function_name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type QaTestDocument = XmlDocument & {
  TopElem: QaTestDocumentTopElem;
  qa_test: QaTestDocumentTopElem;
  DocDesc(): string;
};

type QaTestDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
ObjectTypeBase &
QaTestParamBase &
QaTestFixtureBase &
QaTestAssertBase & {
  Doc: QaTestDocument;
  create_date: XmlElem<Date>;
  status: XmlElem<string, typeof common.qa_test_states>;
  type: XmlElem<string, typeof common.qa_test_types>;
  code_library_id: XmlElem<number, CodeLibraryCatalogDocumentTopElem>;
  lib_name: XmlElem<string>;
  function_name: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type QaTestDocument = XmlDocument & {
  TopElem: QaTestDocumentTopElem;
};

interface QaTestSetDocumentTest {
  id: XmlElem<string>;
  test_id: XmlElem<number, QaTestCatalogDocumentTopElem>;
  paramset_id: XmlElem<number, QaTestParamsetCatalogDocumentTopElem>;
}

type QaTestSetDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
QaTestParamBase &
QaTestFixtureBase &
QaTestAssertBase & {
  Doc: QaTestSetDocument;
  status: XmlElem<string, typeof common.qa_test_states>;
  tests: XmlMultiElem<QaTestSetDocumentTest>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type QaTestSetDocument = XmlDocument & {
  TopElem: QaTestSetDocumentTopElem;
  qa_test_set: QaTestSetDocumentTopElem;
  DocDesc(): string;
};

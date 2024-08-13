interface QaTestSetDocumentTest {
  id: XmlElem<string | null>;
  test_id: XmlElem<number | null, QaTestCatalogDocumentTopElem>;
  paramset_id: XmlElem<number | null, QaTestParamsetCatalogDocumentTopElem>;
}

type QaTestSetDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
QaTestParamBase &
QaTestFixtureBase &
QaTestAssertBase & {
  Doc: QaTestSetDocument;
  status: XmlElem<string, typeof common.qa_test_states>;
  tests: XmlMultiElem<QaTestSetDocumentTest | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type QaTestSetDocument = XmlDocument & {
  TopElem: QaTestSetDocumentTopElem;
  qa_test_set: QaTestSetDocumentTopElem;
  DocDesc(): string;
};

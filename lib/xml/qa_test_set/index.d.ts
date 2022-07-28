interface QaTestSetDocumentTest {
  test_id: XmlElem<number>;
}

type QaTestSetDocumentTopElem = XmlTopElem & { Doc: QaTestSetDocument } & 
  ObjectCodeNameBase &
  QaTestParamBase &
  QaTestFixtureBase &
  QaTestAssertBase & {
  status: XmlElem<string>;
  tests: XmlMultiElem<QaTestSetDocumentTest>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElem<number>;
}

type QaTestSetDocument = XmlDocument & { TopElem: QaTestSetDocumentTopElem; };

interface QaTestSetTest {
  test_id?: XmlElem<number>;
}

interface QaTestSetTopElem extends XmlTopElem<QaTestSetDocument>, ObjectCodeNameBase, QaTestParamBase, QaTestFixtureBase, QaTestAssertBase {
  status?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  tests?: XmlMultiElem<QaTestSetTest>;
}

type QaTestSetDocument = XmlDocument<QaTestSetTopElem>;

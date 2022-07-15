interface QaTestTopElem extends XmlTopElem<QaTestDocument>, ObjectCodeNameBase, ExecCodeBase, ObjectTypeBase, QaTestParamBase, QaTestFixtureBase, QaTestAssertBase {
  create_date?: XmlElem<Date>;
  status?: XmlElem<string>;
  type?: XmlElem<string>;
  code_library_id?: XmlElem<number>;
  lib_name?: XmlElem<string>;
  function_name?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
}

type QaTestDocument = XmlDocument<QaTestTopElem>;

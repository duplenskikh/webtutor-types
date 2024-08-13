type QaTestDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
ObjectTypeBase &
QaTestParamBase &
QaTestFixtureBase &
QaTestAssertBase & {
  Doc: QaTestDocument;
  /** Дата создания */
  create_date: XmlElem<Date | null>;
  /** Статус */
  status: XmlElem<string, typeof common.qa_test_states>;
  type: XmlElem<string, typeof common.qa_test_types>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  lib_name: XmlElem<string | null>;
  function_name: XmlElem<string | null>;
  /** Описание */
  desc: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type QaTestDocument = XmlDocument & {
  TopElem: QaTestDocumentTopElem;
  qa_test: QaTestDocumentTopElem;
  DocDesc(): string;
};

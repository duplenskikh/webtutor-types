type QaTestParamsetDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
QaTestParamBase &
QaTestAssertBase & {
  Doc: QaTestParamsetDocument;
  status: XmlElem<string, typeof common.qa_test_states>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type QaTestParamsetDocument = XmlDocument & {
  TopElem: QaTestParamsetDocumentTopElem;
  qa_test_paramset: QaTestParamsetDocumentTopElem;
  DocDesc(): string;
};

type QaTestParamsetDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
QaTestParamBase &
QaTestAssertBase & {
  Doc: QaTestParamsetDocument;
  status: XmlElem<string, typeof common.qa_test_states>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type QaTestParamsetDocument = XmlDocument & {
  TopElem: QaTestParamsetDocumentTopElem;
};

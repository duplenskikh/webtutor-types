type QaTestParamsetDocumentTopElem = XmlTopElem & { Doc: QaTestParamsetDocument } & 
ObjectCodeNameBase &
QaTestParamBase &
QaTestAssertBase & {
  status?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type QaTestParamsetDocument = XmlDocument & { TopElem: QaTestParamsetDocumentTopElem; };

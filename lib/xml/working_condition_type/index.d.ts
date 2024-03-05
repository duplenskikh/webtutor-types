type WorkingConditionTypeDocumentTopElem = XmlTopElem & {
  Doc: WorkingConditionTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type WorkingConditionTypeDocument = XmlDocument & {
  TopElem: WorkingConditionTypeDocumentTopElem;
};

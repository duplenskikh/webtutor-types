type WorkingConditionTypeDocumentTopElem = XmlTopElem & {
  Doc: WorkingConditionTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type WorkingConditionTypeDocument = XmlDocument & {
  TopElem: WorkingConditionTypeDocumentTopElem;
  working_condition_type: WorkingConditionTypeDocumentTopElem;
};

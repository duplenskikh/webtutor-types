type WorkConditionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkConditionDocument;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  access: XmlElem<AccessDocBase | null>;
};

type WorkConditionDocument = XmlDocument & {
  TopElem: WorkConditionDocumentTopElem;
  work_condition: WorkConditionDocumentTopElem;
  DocDesc(): string;
};

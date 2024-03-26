type WorkConditionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  Doc: WorkConditionDocument;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
};

type WorkConditionDocument = XmlDocument & {
  TopElem: WorkConditionDocumentTopElem;
  work_condition: WorkConditionDocumentTopElem;
  DocDesc(): string;
};

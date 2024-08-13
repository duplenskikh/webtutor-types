type DnEduConditionDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: DnEduConditionDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type DnEduConditionDocument = XmlDocument & {
  TopElem: DnEduConditionDocumentTopElem;
  dn_edu_condition: DnEduConditionDocumentTopElem;
  DocDesc(): string;
};

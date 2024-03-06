type DnEduConditionDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: DnEduConditionDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type DnEduConditionDocument = XmlDocument & {
  TopElem: DnEduConditionDocumentTopElem;
  dn_edu_condition: DnEduConditionDocumentTopElem;
  DocDesc(): unknown;
};

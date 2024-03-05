type GradeDocumentTopElem = XmlTopElem & {
  Doc: GradeDocument;
  id: XmlElem<number>;
  level: XmlElem<number>;
  name: XmlElem<string>;
  desc: XmlElem<string>;
  min_salary: XmlElem<number>;
  max_salary: XmlElem<number>;
  currency: XmlElem<string, typeof lists.currency_types>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type GradeDocument = XmlDocument & {
  TopElem: GradeDocumentTopElem;
};

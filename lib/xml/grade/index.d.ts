type GradeDocumentTopElem = XmlTopElem & {
  Doc: GradeDocument;
  id: XmlElem<number | null>;
  level: XmlElem<number | null>;
  name: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  min_salary: XmlElem<number | null>;
  max_salary: XmlElem<number | null>;
  currency: XmlElem<string | null, typeof lists.currency_types>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type GradeDocument = XmlDocument & {
  TopElem: GradeDocumentTopElem;
  grade: GradeDocumentTopElem;
  DocDesc(): string;
};

interface GradeTopElem extends XmlTopElem<GradeDocument> {
  level?: XmlElem<number>;
  name?: XmlElem<string>;
  desc?: XmlElem<string>;
  min_salary?: XmlElem<number>;
  max_salary?: XmlElem<number>;
  currency?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type GradeDocument = XmlDocument<GradeTopElem>;

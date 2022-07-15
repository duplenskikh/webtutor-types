interface DnStudCentrtestResultViewFilter extends AuFtFilter {
}

interface DnStudCentrtestResultView extends DescBase {
  filter?: XmlElem<DnStudCentrtestResultViewFilter>;
}

interface DnStudCentrtestResultTopElem extends XmlTopElem<DnStudCentrtestResultDocument>, AdminAccessBase, CustomElemsBase {
  subject?: XmlElem<string>;
  mark?: XmlElem<number>;
  result_date?: XmlElem<Date>;
  student_id?: XmlElem<number>;
  student_fullname?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  view?: XmlElem<DnStudCentrtestResultView>;
}

type DnStudCentrtestResultDocument = XmlDocument<DnStudCentrtestResultTopElem>;

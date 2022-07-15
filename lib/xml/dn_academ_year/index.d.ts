interface DnAcademYearPeriod {
  id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  desc?: XmlElem<string>;
}

interface DnAcademYearTopElem extends XmlTopElem<DnAcademYearDocument>, AdminAccessBase, CustomElemsBase {
  start_year?: XmlElem<string>;
  end_year?: XmlElem<string>;
  name?: XmlElem<string>;
  amount_week_autumnal_term?: XmlElem<number>;
  amount_week_spring_term?: XmlElem<number>;
  str_years?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  periods?: XmlMultiElem<DnAcademYearPeriod>;
}

type DnAcademYearDocument = XmlDocument<DnAcademYearTopElem>;

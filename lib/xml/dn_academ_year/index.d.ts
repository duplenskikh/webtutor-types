interface DnAcademYearDocumentPeriod {
  id: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  desc: XmlElem<string>;
}

type DnAcademYearDocumentTopElem = XmlTopElem &
AdminAccessBase &
CustomElemsBase & {
  Doc: DnAcademYearDocument;
  start_year: XmlElem<string>;
  end_year: XmlElem<string>;
  name: XmlElem<string>;
  amount_week_autumnal_term: XmlElem<number>;
  amount_week_spring_term: XmlElem<number>;
  str_years: XmlElem<string>;
  periods: XmlMultiElem<DnAcademYearDocumentPeriod>;
  doc_info: XmlElem<DocInfoBase>;
}

type DnAcademYearDocument = XmlDocument & {
  TopElem: DnAcademYearDocumentTopElem;
};

type DnAcademYearCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  start_year: XmlElem<string>;
  end_year: XmlElem<string>;
  name: XmlElem<string>;
  amount_week_autumnal_term: XmlElem<number>;
  amount_week_spring_term: XmlElem<number>;
  str_years: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

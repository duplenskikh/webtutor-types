type DnAcademYearCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  start_year: XmlElem<string | null>;
  end_year: XmlElem<string | null>;
  name: XmlElem<string | null>;
  amount_week_autumnal_term: XmlElem<number | null>;
  amount_week_spring_term: XmlElem<number | null>;
  str_years: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

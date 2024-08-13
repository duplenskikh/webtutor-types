type ContestCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  name: XmlElem<string | null>;
  code: XmlElem<string | null>;
  is_open: XmlElem<boolean>;
  status_id: XmlElem<string | null, typeof common.contest_states>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  estimation_id: XmlElem<string | null, typeof common.contest_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

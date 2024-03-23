type ContestCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  code: XmlElem<string>;
  is_open: XmlElem<boolean>;
  status_id: XmlElem<string, typeof common.contest_states>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  estimation_id: XmlElem<string, typeof common.contest_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

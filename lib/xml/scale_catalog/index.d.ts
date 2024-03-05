type ScaleCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  max_limit: XmlElem<number>;
  min_limit: XmlElem<number>;
  status: XmlElem<string, typeof common.kpi_states>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

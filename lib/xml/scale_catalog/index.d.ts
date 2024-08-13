type ScaleCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  max_limit: XmlElem<number | null>;
  min_limit: XmlElem<number | null>;
  status: XmlElem<string | null, typeof common.kpi_states>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

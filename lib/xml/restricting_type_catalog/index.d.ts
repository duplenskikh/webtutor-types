type RestrictingTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  period_type_id: XmlElem<string | null, typeof common.perioditys>;
  state_id: XmlElem<string | null, typeof common.agreement_status_types>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

type RestrictingTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  period_type_id: XmlElem<string, typeof common.perioditys>;
  state_id: XmlElem<string, typeof common.agreement_status_types>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

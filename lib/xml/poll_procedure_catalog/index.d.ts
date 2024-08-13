type PollProcedureCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  web_display: XmlElem<boolean | null>;
  status: XmlElem<number | null>;
  is_model: XmlElem<boolean>;
  str_sub_bosses_ids: XmlElem<string | null>;
  trigger_type: XmlElem<string | null, typeof common.trigger_types>;
  role_id: XmlMultiElemObject<number | null>;
  equal_hash: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

type SubstitutionTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null>;
  operation_codes: XmlElem<string | null>;
  operation_id: XmlMultiElemObject<number | null, OperationCatalogDocumentTopElem>;
  remote_action_codes: XmlElem<string | null>;
  remote_action_id: XmlMultiElemObject<number | null, RemoteActionCatalogDocumentTopElem>;
  data_str: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
  is_active: XmlElem<boolean>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

type SubstitutionTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  operation_codes: XmlElem<string>;
  operation_id: XmlMultiElemObject<number, OperationCatalogDocumentTopElem>;
  remote_action_codes: XmlElem<string>;
  remote_action_id: XmlMultiElemObject<number, RemoteActionCatalogDocumentTopElem>;
  data_str: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  is_active: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

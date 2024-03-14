type RequestCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  request_id: XmlElem<number, RequestCatalogDocumentTopElem>;
  code: XmlElem<string>;
  type: XmlElem<string, typeof common.exchange_object_types>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  is_group: XmlElem<boolean>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  create_date: XmlElem<Date>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};

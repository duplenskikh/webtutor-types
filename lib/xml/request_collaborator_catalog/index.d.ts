type RequestCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  request_id: XmlElem<number | null, RequestCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  type: XmlElem<string | null, typeof common.exchange_object_types>;
  request_type_id: XmlElem<number | null, RequestTypeCatalogDocumentTopElem>;
  status_id: XmlElem<string, typeof common.request_status_types>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  person_org_name: XmlElem<string | null>;
  is_group: XmlElem<boolean>;
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  create_date: XmlElem<Date | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};

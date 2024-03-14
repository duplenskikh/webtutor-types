type DocumentCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  parent_object_type: XmlElem<string, typeof common.exchange_object_types>;
  parent_object_id: XmlElem<number>;
  parent_object_name: XmlElem<string>;
  site_id: XmlElem<number, SiteCatalogDocumentTopElem>;
  document_id: XmlElem<number, DocumentCatalogDocumentTopElem>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  can_create: XmlElem<boolean>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};

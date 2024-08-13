type DocumentCollaboratorCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  parent_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  parent_object_id: XmlElem<number | null>;
  parent_object_name: XmlElem<string | null>;
  site_id: XmlElem<number | null, SiteCatalogDocumentTopElem>;
  document_id: XmlElem<number | null, DocumentCatalogDocumentTopElem>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  can_create: XmlElem<boolean | null>;
  can_edit: XmlElem<boolean | null>;
  can_delete: XmlElem<boolean | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};

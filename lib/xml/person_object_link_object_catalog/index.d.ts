type PersonObjectLinkObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  person_object_id: XmlElem<number>;
  person_object_type: XmlElem<string>;
  object_catalog: XmlElem<string, typeof common.exchange_object_types>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  subject_id: XmlElem<number>;
  subject_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  access_level: XmlElem<number>;
  MatchDocTypeExt(): unknown;
  OnBuildExt(): unknown;
  OnDeleteExt(): unknown;
};

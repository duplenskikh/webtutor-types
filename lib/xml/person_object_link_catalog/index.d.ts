type PersonObjectLinkCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  subject_id: XmlElem<number>;
  subject_type: XmlElem<string, typeof common.exchange_object_types>;
  object_catalog: XmlElem<string, typeof common.exchange_object_types>;
  title: XmlElem<string>;
  all_can_create: XmlElem<boolean>;
  all_can_edit: XmlElem<boolean>;
  all_can_delete: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  OnBuild(): void;
};

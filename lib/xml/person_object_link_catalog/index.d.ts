type PersonObjectLinkCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  subject_id: XmlElem<number | null>;
  subject_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  title: XmlElem<string | null>;
  all_can_create: XmlElem<boolean | null>;
  all_can_edit: XmlElem<boolean | null>;
  all_can_delete: XmlElem<boolean | null>;
  modification_date: XmlElem<Date | null>;
  OnBuild(): void;
};

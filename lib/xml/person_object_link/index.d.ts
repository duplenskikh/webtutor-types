interface PersonObjectLinkDocumentObject {
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  access_level: XmlElem<number | null>;
}

type PersonObjectLinkDocumentTopElem = XmlTopElem & {
  Doc: PersonObjectLinkDocument;
  code: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  subject_id: XmlElem<number | null>;
  subject_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  title(): string;
  all_can_create: XmlElem<boolean>;
  amount: XmlElem<number | null>;
  all_can_edit: XmlElem<boolean>;
  all_can_delete: XmlElem<boolean>;
  objects: XmlMultiElem<PersonObjectLinkDocumentObject | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PersonObjectLinkDocument = XmlDocument & {
  TopElem: PersonObjectLinkDocumentTopElem;
  person_object_link: PersonObjectLinkDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

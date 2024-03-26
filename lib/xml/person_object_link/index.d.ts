interface PersonObjectLinkDocumentObject {
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  access_level: XmlElem<number>;
}

type PersonObjectLinkDocumentTopElem = XmlTopElem & {
  Doc: PersonObjectLinkDocument;
  code: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  subject_id: XmlElem<number>;
  subject_type: XmlElem<string, typeof common.exchange_object_types>;
  object_catalog: XmlElem<string, typeof common.exchange_object_types>;
  title(): string;
  all_can_create: XmlElem<boolean>;
  amount: XmlElem<number>;
  all_can_edit: XmlElem<boolean>;
  all_can_delete: XmlElem<boolean>;
  objects: XmlMultiElem<PersonObjectLinkDocumentObject>;
  doc_info: XmlElem<DocInfoBase>;
};

type PersonObjectLinkDocument = XmlDocument & {
  TopElem: PersonObjectLinkDocumentTopElem;
  person_object_link: PersonObjectLinkDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

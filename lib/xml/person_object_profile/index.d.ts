interface PersonObjectProfileDocumentPersonObjectLinkObject {
  object_id: XmlElem<number | null>;
  object_name: XmlElem<string | null>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  access_level: XmlElem<number | null>;
}

interface PersonObjectProfileDocumentPersonObjectLink {
  object_catalog: XmlElem<string | null, typeof common.exchange_object_types>;
  all_can_create: XmlElem<boolean>;
  all_can_edit: XmlElem<boolean>;
  all_can_delete: XmlElem<boolean>;
  max_amount: XmlElem<number | null>;
  max_total_size: XmlElem<number | null>;
  max_object_size: XmlElem<number | null>;
  objects: XmlMultiElem<PersonObjectProfileDocumentPersonObjectLinkObject | null>;
}

type PersonObjectProfileDocumentTopElem = XmlTopElem & {
  Doc: PersonObjectProfileDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  person_object_links: XmlMultiElem<PersonObjectProfileDocumentPersonObjectLink | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type PersonObjectProfileDocument = XmlDocument & {
  TopElem: PersonObjectProfileDocumentTopElem;
  person_object_profile: PersonObjectProfileDocumentTopElem;
  DocDesc(): string;
};

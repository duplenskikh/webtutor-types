interface PersonObjectProfileDocumentPersonObjectLinkObject {
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  can_edit: XmlElem<boolean>;
  can_delete: XmlElem<boolean>;
  access_level: XmlElem<number>;
}
interface PersonObjectProfileDocumentPersonObjectLink {
  object_catalog: XmlElem<string>;
  all_can_create: XmlElem<boolean>;
  all_can_edit: XmlElem<boolean>;
  all_can_delete: XmlElem<boolean>;
  max_amount: XmlElem<number>;
  max_total_size: XmlElem<number>;
  max_object_size: XmlElem<number>;
  objects: XmlMultiElem<PersonObjectProfileDocumentPersonObjectLinkObject>;
}

type PersonObjectProfileDocumentTopElem = XmlTopElem & { Doc: PersonObjectProfileDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_object_links: XmlMultiElem<PersonObjectProfileDocumentPersonObjectLink>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type PersonObjectProfileDocument = XmlDocument & {
  TopElem: PersonObjectProfileDocumentTopElem;
};

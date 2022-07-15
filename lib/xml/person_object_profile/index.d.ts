interface PersonObjectProfilePersonObjectLinkObject {
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  can_edit?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
  access_level?: XmlElem<number>;
}

interface PersonObjectProfilePersonObjectLink {
  object_catalog?: XmlElem<string>;
  all_can_create?: XmlElem<boolean>;
  all_can_edit?: XmlElem<boolean>;
  all_can_delete?: XmlElem<boolean>;
  max_amount?: XmlElem<number>;
  max_total_size?: XmlElem<number>;
  max_object_size?: XmlElem<number>;
  objects?: XmlMultiElem<PersonObjectProfilePersonObjectLinkObject>;
}

interface PersonObjectProfileTopElem extends XmlTopElem<PersonObjectProfileDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  person_object_links?: XmlMultiElem<PersonObjectProfilePersonObjectLink>;
}

type PersonObjectProfileDocument = XmlDocument<PersonObjectProfileTopElem>;

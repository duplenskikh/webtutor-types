type PersonObjectLinkCatalogDocumentTopElem = XmlTopElem & { Doc: PersonObjectLinkCatalogDocument } & {
  id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  subject_id: XmlElem<number>;
  subject_type: XmlElem<string>;
  object_catalog: XmlElem<string>;
  title: XmlElem<string>;
  all_can_create: XmlElem<boolean>;
  all_can_edit: XmlElem<boolean>;
  all_can_delete: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
}

type PersonObjectLinkCatalogDocument = XmlDocument & { TopElem: PersonObjectLinkCatalogDocumentTopElem; };

type ChangeDocumentTopElem = XmlTopElem & {
  Doc: ChangeDocument;
  name: XmlElem<string | null>;
  create_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ChangeDocument = XmlDocument & {
  TopElem: ChangeDocumentTopElem;
  change: ChangeDocumentTopElem;
  DocDesc(): string;
};

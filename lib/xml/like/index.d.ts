type LikeDocumentTopElem = XmlTopElem & {
  Doc: LikeDocument;
  name(): string;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  type_id: XmlElem<string | null, typeof common.reaction_types>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_name: XmlElem<string | null>;
  sec_object_id: XmlElem<number | null>;
  sec_object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  reaction: XmlElem<string | null>;
  message_id: XmlElem<string | null>;
  weight: XmlElem<number | null>;
  create_date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LikeDocument = XmlDocument & {
  TopElem: LikeDocumentTopElem;
  like: LikeDocumentTopElem;
  DocDesc(): string;
};

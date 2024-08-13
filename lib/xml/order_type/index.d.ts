type OrderTypeDocumentTopElem = XmlTopElem & {
  Doc: OrderTypeDocument;
  code: XmlElem<string | null>;
  number: XmlElem<number | null>;
  name: XmlElem<string | null>;
  prefix: XmlElem<string | null>;
  suffix: XmlElem<string | null>;
  default_flag: XmlElem<boolean | null>;
  signing_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  responsible_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  performer_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OrderTypeDocument = XmlDocument & {
  TopElem: OrderTypeDocumentTopElem;
  order_type: OrderTypeDocumentTopElem;
  DocDesc(): string;
};

type GoodInstanceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase & {
  Doc: GoodInstanceDocument;
  status: XmlElem<string, typeof common.good_instance_status_types>;
  good_id: XmlElem<number | null, GoodCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  reserved_date: XmlElem<Date | null>;
  paid_date: XmlElem<Date | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  clear_status(): unknown;
};

type GoodInstanceDocument = XmlDocument & {
  TopElem: GoodInstanceDocumentTopElem;
  good_instance: GoodInstanceDocumentTopElem;
  DocDesc(): string;
};

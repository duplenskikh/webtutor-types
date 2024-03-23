type GoodInstanceDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
PersonFillingBase & {
  Doc: GoodInstanceDocument;
  status: XmlElem<string, typeof common.good_instance_status_types>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  reserved_date: XmlElem<Date>;
  paid_date: XmlElem<Date>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  clear_status(): unknown;
};

type GoodInstanceDocument = XmlDocument & {
  TopElem: GoodInstanceDocumentTopElem;
  good_instance: GoodInstanceDocumentTopElem;
  DocDesc(): string;
};

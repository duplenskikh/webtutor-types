type ChangeDocumentTopElem = XmlTopElem & {
  Doc: ChangeDocument;
  name: XmlElem<string>;
  create_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ChangeDocument = XmlDocument & {
  TopElem: ChangeDocumentTopElem;
  change: ChangeDocumentTopElem;
  DocDesc(): string;
};

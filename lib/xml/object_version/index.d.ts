type ObjectVersionDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ObjectVersionDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null, typeof common.agreement_status_types>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  object_id: XmlElem<number | null>;
  object_modification_date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  object_xml: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ObjectVersionDocument = XmlDocument & {
  TopElem: ObjectVersionDocumentTopElem;
  object_version: ObjectVersionDocumentTopElem;
  DocDesc(): string;
};

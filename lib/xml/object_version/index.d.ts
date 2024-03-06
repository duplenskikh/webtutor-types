type ObjectVersionDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  Doc: ObjectVersionDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string, typeof common.agreement_status_types>;
  catalog_name: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_modification_date: XmlElem<Date>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  object_xml: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ObjectVersionDocument = XmlDocument & {
  TopElem: ObjectVersionDocumentTopElem;
  object_version: ObjectVersionDocumentTopElem;
  DocDesc(): unknown;
};

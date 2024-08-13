type ReprimandDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ReprimandDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  reprimand_type_id: XmlElem<number | null, ReprimandTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ReprimandDocument = XmlDocument & {
  TopElem: ReprimandDocumentTopElem;
  reprimand: ReprimandDocumentTopElem;
  DocDesc(): string;
};

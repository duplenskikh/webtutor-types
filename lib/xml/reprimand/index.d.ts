type ReprimandDocumentTopElem = XmlTopElem &
CustomElemsBase & {
  Doc: ReprimandDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  reprimand_type_id: XmlElem<number, ReprimandTypeCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  date: XmlElem<Date>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ReprimandDocument = XmlDocument & {
  TopElem: ReprimandDocumentTopElem;
};

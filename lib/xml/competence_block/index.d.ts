type CompetenceBlockDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: CompetenceBlockDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  parent_object_id: XmlElem<number, CompetenceBlockCatalogDocumentTopElem>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type CompetenceBlockDocument = XmlDocument & {
  TopElem: CompetenceBlockDocumentTopElem;
  competence_block: CompetenceBlockDocumentTopElem;
  DocDesc(): string;
};

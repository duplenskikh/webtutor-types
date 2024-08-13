type CompetenceBlockDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  Doc: CompetenceBlockDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  parent_object_id: XmlElem<number | null, CompetenceBlockCatalogDocumentTopElem>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type CompetenceBlockDocument = XmlDocument & {
  TopElem: CompetenceBlockDocumentTopElem;
  competence_block: CompetenceBlockDocumentTopElem;
  DocDesc(): string;
};

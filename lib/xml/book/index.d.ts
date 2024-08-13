type BookDocumentTopElem = XmlTopElem &
KnowledgePartsBase &
KnowledgePartsBaseOld &
AdminAccessBase &
CustomElemsBase & {
  Doc: BookDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  library_section_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type BookDocument = XmlDocument & {
  TopElem: BookDocumentTopElem;
  book: BookDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

interface LibrarySectionDocumentAdministrator extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type LibrarySectionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LibrarySectionDocument;
  parent_object_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  position: XmlElem<number | null>;
  link: XmlElem<string | null>;
  web_view: XmlElem<string | null, typeof common.library_section_web_templates>;
  administrators: XmlMultiElem<LibrarySectionDocumentAdministrator | null>;
  external_id: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibrarySectionDocument = XmlDocument & {
  TopElem: LibrarySectionDocumentTopElem;
  library_section: LibrarySectionDocumentTopElem;
  DocDesc(): string;
};

interface LibrarySectionDocumentAdministrator extends PersonFillingBase {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
}

type LibrarySectionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LibrarySectionDocument;
  parent_object_id: XmlElem<number, LibrarySectionCatalogDocumentTopElem>;
  position: XmlElem<number>;
  link: XmlElem<string>;
  web_view: XmlElem<string, typeof common.library_section_web_templates>;
  administrators: XmlMultiElem<LibrarySectionDocumentAdministrator>;
  external_id: XmlElem<string>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
};

type LibrarySectionDocument = XmlDocument & {
  TopElem: LibrarySectionDocumentTopElem;
  library_section: LibrarySectionDocumentTopElem;
  DocDesc(): string;
};

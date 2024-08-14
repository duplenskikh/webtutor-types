interface LibrarySectionDocumentAdministrator extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

type LibrarySectionDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LibrarySectionDocument;
  /** Родительский раздел */
  parent_object_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  /** Позиция */
  position: XmlElem<number | null>;
  /** Ссылка */
  link: XmlElem<string | null>;
  web_view: XmlElem<string | null, typeof common.library_section_web_templates>;
  administrators: XmlMultiElem<LibrarySectionDocumentAdministrator | null>;
  external_id: XmlElem<string | null>;
  /** Комментарий */
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibrarySectionDocument = XmlDocument & {
  TopElem: LibrarySectionDocumentTopElem;
  library_section: LibrarySectionDocumentTopElem;
  DocDesc(): string;
};

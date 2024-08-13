interface UnfoldedContentBaseContentContentContentContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
}

interface UnfoldedContentBaseContentContentContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContentContentContent | null>;
}

interface UnfoldedContentBaseContentContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContentContent | null>;
}

interface UnfoldedContentBaseContent {
  id(): string;
  number: XmlElem<number | null>;
  title: XmlElem<string | null>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContent | null>;
}

interface UnfoldedContentBase {
  contents: XmlMultiElem<UnfoldedContentBaseContent | null>;
}

interface UnfoldedDocumentBaseUnfoldedDocumentPage {
  page_id: XmlElem<string | null>;
  url: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface UnfoldedDocumentBaseUnfoldedDocument extends UnfoldedContentBase {
  title: XmlElem<string | null>;
  orientation: XmlElem<string | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
  show_contents: XmlElem<boolean>;
  base_url: XmlElem<string | null>;
  pages: XmlMultiElem<UnfoldedDocumentBaseUnfoldedDocumentPage | null>;
}

interface UnfoldedDocumentBase {
  unfolded_document: XmlElem<UnfoldedDocumentBaseUnfoldedDocument | null>;
}

interface UnfoldedDocumentBasePage {
  page_id: XmlElem<string | null>;
  url: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface LibraryMaterialDocumentLibraryMaterialFormat {
  library_material_format_id: XmlElem<number | null, LibraryMaterialFormatCatalogDocumentTopElem>;
  number: XmlElem<number | null>;
}

interface LibraryMaterialDocumentGroup {
  group_id: XmlElem<number | null, GroupCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
}

interface LibraryMaterialDocumentSubscribedPerson {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
}

interface LibraryMaterialDocumentPathSection {
  id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  name: XmlElem<string | null>;
  parent_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
}

type LibraryMaterialDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
UnfoldedDocumentBase &
CatalogListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: LibraryMaterialDocument;
  access: XmlElem<AccessDocBase | null>;
  author: XmlElem<string | null>;
  publisher: XmlElem<string | null>;
  section_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  library_system_id: XmlElem<number | null, LibrarySystemCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  library_material_type_id: XmlElem<number | null, LibraryMaterialTypeCatalogDocumentTopElem>;
  library_material_formats: XmlMultiElem<LibraryMaterialDocumentLibraryMaterialFormat | null>;
  year: XmlElem<number | null>;
  isbn: XmlElem<string | null>;
  state_id: XmlElem<number, typeof common.library_states>;
  file_name: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  online_video_prepared: XmlElem<boolean>;
  use_old_format: XmlElem<boolean>;
  online_video_quality: XmlElem<string | null>;
  allow_download: XmlElem<boolean>;
  allow_self_viewing: XmlElem<boolean>;
  image: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  description: XmlElem<string | null>;
  contents: XmlElem<string | null>;
  is_need_admin_approval: XmlElem<boolean>;
  is_closed: XmlElem<boolean>;
  groups: XmlMultiElem<LibraryMaterialDocumentGroup | null>;
  external_id: XmlElem<string | null>;
  subscribed_persons: XmlMultiElem<LibraryMaterialDocumentSubscribedPerson | null>;
  default_response_type_id: XmlElem<number | null, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  old_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  path_sections: XmlMultiElem<LibraryMaterialDocumentPathSection | null>;
  filling_path_sections(): unknown;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type LibraryMaterialDocument = XmlDocument & {
  TopElem: LibraryMaterialDocumentTopElem;
  library_material: LibraryMaterialDocumentTopElem;
  DocDesc(): string;
};

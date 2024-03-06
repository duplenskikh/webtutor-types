interface UnfoldedContentBaseContentContentContentContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
}

interface UnfoldedContentBaseContentContentContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContentContentContent>;
}

interface UnfoldedContentBaseContentContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContentContent>;
}

interface UnfoldedContentBaseContent {
  id(): unknown;
  number: XmlElem<number>;
  title: XmlElem<string>;
  contents: XmlMultiElem<UnfoldedContentBaseContentContent>;
}

interface UnfoldedContentBase {
  contents: XmlMultiElem<UnfoldedContentBaseContent>;
}

interface UnfoldedDocumentBaseUnfoldedDocumentPage {
  page_id: XmlElem<string>;
  url: XmlElem<string>;
  name: XmlElem<string>;
}

interface UnfoldedDocumentBaseUnfoldedDocument extends UnfoldedContentBase {
  title: XmlElem<string>;
  orientation: XmlElem<string>;
  width: XmlElem<number>;
  height: XmlElem<number>;
  show_contents: XmlElem<boolean>;
  base_url: XmlElem<string>;
  pages: XmlMultiElem<UnfoldedDocumentBaseUnfoldedDocumentPage>;
}

interface UnfoldedDocumentBase {
  unfolded_document: XmlElem<UnfoldedDocumentBaseUnfoldedDocument>;
}

interface UnfoldedDocumentBasePage {
  page_id: XmlElem<string>;
  url: XmlElem<string>;
  name: XmlElem<string>;
}

interface LibraryMaterialDocumentLibraryMaterialFormat {
  library_material_format_id: XmlElem<number, LibraryMaterialFormatCatalogDocumentTopElem>;
  number: XmlElem<number>;
}

interface LibraryMaterialDocumentGroup {
  group_id: XmlElem<number, GroupCatalogDocumentTopElem>;
  name: XmlElem<string>;
}

interface LibraryMaterialDocumentSubscribedPersonsSubscribedPerson {
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
}

interface LibraryMaterialDocumentSubscribedPersons {
  subscribed_person: XmlElem<LibraryMaterialDocumentSubscribedPersonsSubscribedPerson>;
}

interface LibraryMaterialDocumentPathSection {
  id: XmlElem<number, LibrarySectionCatalogDocumentTopElem>;
  name: XmlElem<string>;
  parent_id: XmlElem<number, LibrarySectionCatalogDocumentTopElem>;
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
  access: XmlElem<AccessDocBase>;
  author: XmlElem<string>;
  publisher: XmlElem<string>;
  section_id: XmlElem<number, LibrarySectionCatalogDocumentTopElem>;
  library_system_id: XmlElem<number, LibrarySystemCatalogDocumentTopElem>;
  number: XmlElem<string>;
  library_material_type_id: XmlElem<number, LibraryMaterialTypeCatalogDocumentTopElem>;
  library_material_formats: XmlMultiElem<LibraryMaterialDocumentLibraryMaterialFormat>;
  year: XmlElem<number>;
  isbn: XmlElem<string>;
  state_id: XmlElem<number, typeof common.library_states>;
  file_name: XmlElem<number, ResourceCatalogDocumentTopElem>;
  online_video_prepared: XmlElem<boolean>;
  use_old_format: XmlElem<boolean>;
  online_video_quality: XmlElem<string>;
  allow_download: XmlElem<boolean>;
  allow_self_viewing: XmlElem<boolean>;
  image: XmlElem<number, ResourceCatalogDocumentTopElem>;
  description: XmlElem<string>;
  contents: XmlElem<string>;
  is_need_admin_approval: XmlElem<boolean>;
  is_closed: XmlElem<boolean>;
  groups: XmlMultiElem<LibraryMaterialDocumentGroup>;
  external_id: XmlElem<string>;
  subscribed_persons: XmlElem<LibraryMaterialDocumentSubscribedPersons>;
  default_response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  mandatory_fill_response: XmlElem<boolean>;
  old_id: XmlElem<number, LibrarySectionCatalogDocumentTopElem>;
  path_sections: XmlMultiElem<LibraryMaterialDocumentPathSection>;
  filling_path_sections(): unknown;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LibraryMaterialDocument = XmlDocument & {
  TopElem: LibraryMaterialDocumentTopElem;
  library_material: LibraryMaterialDocumentTopElem;
  DocDesc(): unknown;
};

interface LibraryMaterialDocumentLibraryMaterialFormat {
  library_material_format_id: XmlElem<number>;
  number: XmlElem<number>;
}

interface LibraryMaterialDocumentGroup {
  group_id: XmlElem<number>;
  name: XmlElem<string>;
}

interface LibraryMaterialDocumentSubscribedPerson {
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
}

interface LibraryMaterialDocumentPathSection {
  id: XmlElem<number>;
  name: XmlElem<string>;
  parent_id: XmlElem<number>;
}

type LibraryMaterialDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialDocument } &
ObjectCodeNameBase &
CatalogListBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
GameBonusBase &
AdminAccessBase &
CustomElemsBase & {
  access: XmlElem<AccessDocBase>;
  author: XmlElem<string>;
  publisher: XmlElem<string>;
  section_id: XmlElem<number>;
  library_system_id: XmlElem<number>;
  number: XmlElem<string>;
  library_material_type_id: XmlElem<number>;
  library_material_formats: XmlMultiElem<LibraryMaterialDocumentLibraryMaterialFormat>;
  year: XmlElem<number>;
  isbn: XmlElem<string>;
  state_id: XmlElem<number, typeof common.learning_states>;
  file_name: XmlElem<number>;
  online_video_prepared: XmlElem<boolean>;
  use_old_format: XmlElem<boolean>;
  online_video_quality: XmlElem<string>;
  allow_download: XmlElem<boolean>;
  allow_self_viewing: XmlElem<boolean>;
  image: XmlElem<number>;
  description: XmlElem<string>;
  contents: XmlElem<string>;
  is_need_admin_approval: XmlElem<boolean>;
  is_closed: XmlElem<boolean>;
  groups: XmlMultiElem<LibraryMaterialDocumentGroup>;
  external_id: XmlElem<string>;
  subscribed_persons: XmlMultiElem<LibraryMaterialDocumentSubscribedPerson>;
  default_response_type_id: XmlElem<number>;
  mandatory_fill_response: XmlElem<boolean>;
  old_id: XmlElem<number>;
  path_sections: XmlMultiElem<LibraryMaterialDocumentPathSection>;
  filling_path_sections(): unknown;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type LibraryMaterialDocument = XmlDocument & {
  TopElem: LibraryMaterialDocumentTopElem;
};

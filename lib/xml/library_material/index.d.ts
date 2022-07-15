interface LibraryMaterialLibraryMaterialFormat {
  library_material_format_id?: XmlElem<number>;
  number?: XmlElem<number>;
}

interface LibraryMaterialGroup {
  group_id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface LibraryMaterialSubscribedPerson {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
}

interface LibraryMaterialPathSection {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface LibraryMaterialViewFilter extends AuFtFilter {
}

interface LibraryMaterialView extends DescBase {
  filter?: XmlElem<LibraryMaterialViewFilter>;
}

interface LibraryMaterialTopElem extends XmlTopElem<LibraryMaterialDocument>, ObjectCodeNameBase, UnfoldedDocumentBase, CatalogListBase, KnowledgePartsBase, KnowledgePartsBaseOld, GameBonusBase, AdminAccessBase, CustomElemsBase {
  author?: XmlElem<string>;
  publisher?: XmlElem<string>;
  section_id?: XmlElem<number>;
  library_system_id?: XmlElem<number>;
  number?: XmlElem<string>;
  library_material_type_id?: XmlElem<number>;
  year?: XmlElem<number>;
  isbn?: XmlElem<string>;
  state_id?: XmlElem<number>;
  file_name?: XmlElem<number>;
  online_video_prepared?: XmlElem<boolean>;
  use_old_format?: XmlElem<boolean>;
  online_video_quality?: XmlElem<string>;
  allow_download?: XmlElem<boolean>;
  allow_self_viewing?: XmlElem<boolean>;
  image?: XmlElem<number>;
  description?: XmlElem<string>;
  contents?: XmlElem<string>;
  is_need_admin_approval?: XmlElem<boolean>;
  is_closed?: XmlElem<boolean>;
  external_id?: XmlElem<string>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  old_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
  library_material_formats?: XmlMultiElem<LibraryMaterialLibraryMaterialFormat>;
  groups?: XmlMultiElem<LibraryMaterialGroup>;
  subscribed_persons?: XmlMultiElem<LibraryMaterialSubscribedPerson>;
  path_sections?: XmlMultiElem<LibraryMaterialPathSection>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<LibraryMaterialView>;
  filling_path_sections?(): any;
}

type LibraryMaterialDocument = XmlDocument<LibraryMaterialTopElem>;

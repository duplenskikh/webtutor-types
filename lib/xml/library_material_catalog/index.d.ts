type LibraryMaterialCatalogDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
AdminAccessBase & {
  author: XmlElem<string | null>;
  section_id: XmlElem<number | null, LibrarySectionCatalogDocumentTopElem>;
  year: XmlElem<number | null>;
  isbn: XmlElem<string | null>;
  state_id: XmlElem<number | null, typeof common.library_states>;
  has_digital: XmlElem<boolean>;
  has_physical: XmlElem<boolean>;
  allow_download: XmlElem<boolean>;
  allow_self_viewing: XmlElem<boolean>;
  online_video_prepared: XmlElem<boolean>;
  library_material_type_id: XmlElem<number | null, LibraryMaterialTypeCatalogDocumentTopElem>;
  library_material_formats: XmlElem<string | null>;
  external_id: XmlElem<string | null>;
  file_name: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  is_need_admin_approval: XmlElem<boolean>;
  is_closed: XmlElem<boolean>;
  image: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  previous_version_object_id: XmlElem<number | null>;
  creation_date: XmlElem<Date | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  status_in_knowledge_map: XmlElem<string, typeof common.status_in_knowledge_map_types>;
  OnBuild(): void;
};

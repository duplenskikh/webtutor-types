type LibraryMaterialCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialCatalogDocument } & 
ObjectCodeNameBase &
AdminAccessBase & {
  author: XmlElem<string>;
  section_id: XmlElem<number>;
  year: XmlElem<number>;
  isbn: XmlElem<string>;
  state_id: XmlElem<number>;
  has_digital: XmlElem<boolean>;
  has_physical: XmlElem<boolean>;
  allow_download: XmlElem<boolean>;
  allow_self_viewing: XmlElem<boolean>;
  online_video_prepared: XmlElem<boolean>;
  library_material_type_id: XmlElem<number>;
  library_material_formats: XmlElem<string>;
  external_id: XmlElem<string>;
  file_name: XmlElem<number>;
  is_need_admin_approval: XmlElem<boolean>;
  is_closed: XmlElem<boolean>;
  image: XmlElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  previous_version_object_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  status_in_knowledge_map: XmlElem<string>;
}

type LibraryMaterialCatalogDocument = XmlDocument & { TopElem: LibraryMaterialCatalogDocumentTopElem; };

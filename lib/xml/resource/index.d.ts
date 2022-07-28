interface ResourceDocumentLink {
  object_id?: XmlElem<number>;
  object_catalog?: XmlElem<string>;
  object_name?: XmlElem<string>;
  date_modify?: XmlElem<Date>;
}

interface ResourceDocumentFileUrl {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  url?: XmlElem<string>;
}

type ResourceDocumentTopElem = XmlTopElem & { Doc: ResourceDocument } & 
  ObjectCodeNameBase &
  CustomElemsBase &
  KnowledgePartsBase &
  KnowledgePartsBaseOld &
  GameBonusBase & {
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  file_name?: XmlElem<string>;
  allow_download?: XmlElem<boolean>;
  allow_unauthorized_download?: XmlElem<boolean>;
  allow_search?: XmlElem<boolean>;
  data?: XmlElem<Binary>;
  file_url?: XmlElem<string>;
  size?: XmlElem<number>;
  use_count?: XmlElem<number>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  file_source?: XmlElem<number>;
  resource_type_id?: XmlElem<number>;
  file_path?: XmlElem<string>;
  checksum?: XmlElem<string>;
  links?: XmlMultiElem<ResourceDocumentLink>;
  library_player_id?: XmlElem<number>;
  file_urls?: XmlMultiElem<ResourceDocumentFileUrl>;
  access?: XmlElem<AccessDocBase>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  save_data?(): unknown;
  get_data?(): unknown;
  get_data_add?(): unknown;
  download?(): unknown;
  download_add?(): unknown;
  check_resource_double?(): unknown;
  put_data?(): unknown;
  put_data_add?(): unknown;
  del_data_add?(): unknown;
  put_str?(): unknown;
  add_counter?(): unknown;
  del_counter?(): unknown;
  obtain_link?(): unknown;
  guess_type?(): unknown;
  role_id?: XmlMultiElem<number>;
}

type ResourceDocument = XmlDocument & { TopElem: ResourceDocumentTopElem; };

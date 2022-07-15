interface ResourceLink {
  object_id?: XmlElem<number>;
  object_catalog?: XmlElem<string>;
  object_name?: XmlElem<string>;
  date_modify?: XmlElem<Date>;
}

interface ResourceFileUrl {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  url?: XmlElem<string>;
}

interface ResourcePresentationSlideShapePoint {
  class?: XmlElem<any>;
  x?: XmlElem<string>;
  y?: XmlElem<string>;
}

interface ResourcePresentationSlideShape {
  class?: XmlElem<any>;
  shapeClassName?: XmlElem<string>;
  id?: XmlElem<string>;
  roomID?: XmlElem<string>;
  presentationId?: XmlElem<string>;
  pageID?: XmlElem<string>;
  ownerId?: XmlElem<string>;
  ownerName?: XmlElem<string>;
  type?: XmlElem<string>;
  x?: XmlElem<string>;
  y?: XmlElem<string>;
  width?: XmlElem<string>;
  height?: XmlElem<string>;
  lineWidth?: XmlElem<number>;
  fillStartColor?: XmlElem<number>;
  fillEndColor?: XmlElem<number>;
  useGradient?: XmlElem<boolean>;
  lineColor?: XmlElem<number>;
  opacity?: XmlElem<string>;
  rotation?: XmlElem<string>;
  text?: XmlElem<string>;
  source?: XmlElem<string>;
  fileID?: XmlElem<string>;
  resourceID?: XmlElem<string>;
  quality?: XmlElem<string>;
  position?: XmlElem<number>;
  playing?: XmlElem<boolean>;
  lastPlayingTime?: XmlElem<number>;
  points?: XmlMultiElem<ResourcePresentationSlideShapePoint>;
}

interface ResourcePresentationSlide {
  class?: XmlElem<any>;
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  number?: XmlElem<number>;
  shapes?: XmlMultiElem<ResourcePresentationSlideShape>;
}

interface ResourcePresentation {
  class?: XmlElem<string>;
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  file_id?: XmlElem<number>;
  current_slide_id?: XmlElem<number>;
  slides?: XmlMultiElem<ResourcePresentationSlide>;
}

interface ResourceLastData {
  file_name?: XmlElem<string>;
  size?: XmlElem<number>;
}

interface ResourceViewEdit {
  pic_path?: XmlElem<string>;
  new_width?: XmlElem<number>;
  new_height?: XmlElem<number>;
  proportional?: XmlElem<boolean>;
}

interface ResourceView {
  edit?: XmlElem<ResourceViewEdit>;
}

interface ResourceTopElem extends XmlTopElem<ResourceDocument>, ObjectCodeNameBase, CustomElemsBase, KnowledgePartsBase, KnowledgePartsBaseOld, GameBonusBase {
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
  library_player_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  role_id?: XmlMultiElem<number>;
  links?: XmlMultiElem<ResourceLink>;
  file_urls?: XmlMultiElem<ResourceFileUrl>;
  presentation?: XmlElem<ResourcePresentation>;
  last_data?: XmlElem<ResourceLastData>;
  view?: XmlElem<ResourceView>;
  access?: XmlElem<AccessDocBase>;
  save_data?(): any;
  get_data?(): any;
  get_data_add?(): any;
  download?(): any;
  download_add?(): any;
  check_resource_double?(): any;
  put_data?(): any;
  put_data_add?(): any;
  del_data_add?(): any;
  put_str?(): any;
  add_counter?(): any;
  del_counter?(): any;
  obtain_link?(): any;
  guess_type?(): any;
}

type ResourceDocument = XmlDocument<ResourceTopElem>;

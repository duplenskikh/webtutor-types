interface ClVideoCourseDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
}

interface ClVideoCourseDocumentTempMediaFileLowresMediaFile {
  lowres_media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  size: XmlElem<string | null>;
}

interface ClVideoCourseDocumentTempMediaFile {
  media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  lowres_media_files: XmlMultiElem<ClVideoCourseDocumentTempMediaFileLowresMediaFile | null>;
}

interface ClVideoCourseDocumentFragmentLayerCoordinate {
  top_left_x: XmlElem<number | null>;
  top_left_y: XmlElem<number | null>;
  box_width: XmlElem<number | null>;
  box_height: XmlElem<number | null>;
}

interface ClVideoCourseDocumentFragmentLayerVideoScreenshot {
  video_screenshot_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  time: XmlElem<number | null>;
  time_str: XmlElem<string | null>;
}

interface ClVideoCourseDocumentFragmentLayerSprite {
  sprite_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  cells_count: XmlElem<number | null>;
  rows_count: XmlElem<number | null>;
  cell_width: XmlElem<number | null>;
  cell_height: XmlElem<number | null>;
  step: XmlElem<number | null>;
}

interface ClVideoCourseDocumentFragmentLayerTextBlock {
  text: XmlElem<string | null>;
  text_html: XmlElem<string | null>;
  font: XmlElem<string | null>;
  font_size: XmlElem<number | null>;
  align: XmlElem<string | null>;
  valign: XmlElem<string | null>;
  color: XmlElem<string | null>;
  color_html: XmlElem<string | null>;
  padding: XmlElem<number | null>;
}

interface ClVideoCourseDocumentFragmentLayer {
  id: XmlElem<string | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type_id: XmlElem<string | null, typeof common.layer_types>;
  start_second: XmlElem<number | null>;
  end_second: XmlElem<number | null>;
  duration: XmlElem<number | null>;
  crop_start: XmlElem<number | null>;
  crop_end: XmlElem<number | null>;
  coordinate: XmlElem<ClVideoCourseDocumentFragmentLayerCoordinate | null>;
  video_screenshots: XmlMultiElem<ClVideoCourseDocumentFragmentLayerVideoScreenshot | null>;
  sprite: XmlElem<ClVideoCourseDocumentFragmentLayerSprite | null>;
  original_width: XmlElem<number | null>;
  original_height: XmlElem<number | null>;
  background_color: XmlElem<string | null>;
  background_color_html: XmlElem<string | null>;
  mute_audio: XmlElem<boolean | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  resource_name: XmlElem<string | null>;
  resource_draft_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  layer_poster_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  angle_rotation: XmlElem<number | null>;
  compression_ratio: XmlElem<number | null>;
  border_color: XmlElem<string | null>;
  border_color_html: XmlElem<string | null>;
  border_width: XmlElem<number | null>;
  text_block: XmlElem<ClVideoCourseDocumentFragmentLayerTextBlock | null>;
}

interface ClVideoCourseDocumentFragment {
  id: XmlElem<string | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
  poster_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  duration: XmlElem<number | null>;
  start_time: XmlElem<number | null>;
  transition_type: XmlElem<string | null>;
  layers: XmlMultiElem<ClVideoCourseDocumentFragmentLayer | null>;
}

type ClVideoCourseDocumentTopElem = XmlTopElem & {
  Doc: ClVideoCourseDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  course_width: XmlElem<number | null>;
  course_height: XmlElem<number | null>;
  max_bitrate: XmlElem<number | null>;
  output_format: XmlElem<string | null>;
  authors: XmlMultiElem<ClVideoCourseDocumentAuthor | null>;
  last_compile_date: XmlElem<Date | null>;
  media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  lowres_media_file_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  temp_media_files: XmlMultiElem<ClVideoCourseDocumentTempMediaFile | null>;
  current_fragment: XmlElem<number>;
  current_layer: XmlElem<number>;
  current_position: XmlElem<number>;
  fragments: XmlMultiElem<ClVideoCourseDocumentFragment | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
};

type ClVideoCourseDocument = XmlDocument & {
  TopElem: ClVideoCourseDocumentTopElem;
  cl_video_course: ClVideoCourseDocumentTopElem;
  DocDesc(): string;
};

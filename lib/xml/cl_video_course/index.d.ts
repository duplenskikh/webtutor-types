interface ClVideoCourseDocumentAuthor extends PersonFillingBase {
  person_id: XmlElem<number>;
}

interface ClVideoCourseDocumentTempMediaFileLowresMediaFile {
  lowres_media_file_id: XmlElem<number>;
  size: XmlElem<string>;
}

interface ClVideoCourseDocumentTempMediaFile {
  media_file_id: XmlElem<number>;
  lowres_media_files: XmlMultiElem<ClVideoCourseDocumentTempMediaFileLowresMediaFile>;
}

interface ClVideoCourseDocumentFragmentLayerVideoScreenshot {
  video_screenshot_id: XmlElem<number>;
  time: XmlElem<number>;
  time_str: XmlElem<string>;
}

interface ClVideoCourseDocumentFragmentLayerCoordinate {
  top_left_x: XmlElem<number>;
  top_left_y: XmlElem<number>;
  box_width: XmlElem<number>;
  box_height: XmlElem<number>;
}

interface ClVideoCourseDocumentFragmentLayerTextBlock {
  text: XmlElem<string>;
  text_html: XmlElem<string>;
  font: XmlElem<string>;
  font_size: XmlElem<number>;
  align: XmlElem<string>;
  valign: XmlElem<string>;
  color: XmlElem<string>;
  color_html: XmlElem<string>;
  padding: XmlElem<number>;
}

interface ClVideoCourseDocumentFragmentLayer {
  id: XmlElem<string>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type_id: XmlElem<string>;
  start_second: XmlElem<number>;
  end_second: XmlElem<number>;
  duration: XmlElem<number>;
  crop_start: XmlElem<number>;
  crop_end: XmlElem<number>;
  coordinate: XmlElem<ClVideoCourseDocumentFragmentLayerCoordinate>;
  video_screenshots: XmlMultiElem<ClVideoCourseDocumentFragmentLayerVideoScreenshot>;
  original_width: XmlElem<number>;
  original_height: XmlElem<number>;
  background_color: XmlElem<string>;
  background_color_html: XmlElem<string>;
  mute_audio: XmlElem<boolean>;
  resource_id: XmlElem<number>;
  resource_name: XmlElem<string>;
  resource_draft_id: XmlElem<number>;
  layer_poster_id: XmlElem<number>;
  angle_rotation: XmlElem<number>;
  compression_ratio: XmlElem<number>;
  border_color: XmlElem<string>;
  border_color_html: XmlElem<string>;
  border_width: XmlElem<number>;
  text_block: XmlElem<ClVideoCourseDocumentFragmentLayerTextBlock>;
}

interface ClVideoCourseDocumentFragment {
  id: XmlElem<string>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  width: XmlElem<number>;
  height: XmlElem<number>;
  poster_id: XmlElem<number>;
  duration: XmlElem<number>;
  start_time: XmlElem<number>;
  transition_type: XmlElem<string>;
  layers: XmlMultiElem<ClVideoCourseDocumentFragmentLayer>;
}

type ClVideoCourseDocumentTopElem = XmlTopElem & {
  Doc: ClVideoCourseDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  course_width: XmlElem<number>;
  course_height: XmlElem<number>;
  max_bitrate: XmlElem<number>;
  output_format: XmlElem<string>;
  authors: XmlMultiElem<ClVideoCourseDocumentAuthor>;
  last_compile_date: XmlElem<Date>;
  media_file_id: XmlElem<number>;
  lowres_media_file_id: XmlElem<number>;
  temp_media_files: XmlMultiElem<ClVideoCourseDocumentTempMediaFile>;
  current_fragment: XmlElem<number>;
  current_layer: XmlElem<number>;
  current_position: XmlElem<number>;
  fragments: XmlMultiElem<ClVideoCourseDocumentFragment>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
};

type ClVideoCourseDocument = XmlDocument & {
  TopElem: ClVideoCourseDocumentTopElem;
};

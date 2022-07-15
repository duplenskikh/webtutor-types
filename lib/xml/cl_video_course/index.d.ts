interface ClVideoCourseAuthor extends PersonFillingBase {
  person_id?: XmlElem<number>;
}

interface ClVideoCourseTempMediaFileLowresMediaFile {
  lowres_media_file_id?: XmlElem<number>;
  size?: XmlElem<string>;
}

interface ClVideoCourseTempMediaFile {
  media_file_id?: XmlElem<number>;
  lowres_media_files?: XmlMultiElem<ClVideoCourseTempMediaFileLowresMediaFile>;
}

interface ClVideoCourseFragmentLayerVideoScreenshot {
  video_screenshot_id?: XmlElem<number>;
  time?: XmlElem<number>;
  time_str?: XmlElem<string>;
}

interface ClVideoCourseFragmentLayerCoordinate {
  top_left_x?: XmlElem<number>;
  top_left_y?: XmlElem<number>;
  box_width?: XmlElem<number>;
  box_height?: XmlElem<number>;
}

interface ClVideoCourseFragmentLayerTextBlock {
  text?: XmlElem<string>;
  text_html?: XmlElem<string>;
  font?: XmlElem<string>;
  font_size?: XmlElem<number>;
  align?: XmlElem<string>;
  valign?: XmlElem<string>;
  color?: XmlElem<string>;
  color_html?: XmlElem<string>;
  padding?: XmlElem<number>;
}

interface ClVideoCourseFragmentLayer {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type_id?: XmlElem<string>;
  start_second?: XmlElem<number>;
  end_second?: XmlElem<number>;
  duration?: XmlElem<number>;
  crop_start?: XmlElem<number>;
  crop_end?: XmlElem<number>;
  original_width?: XmlElem<number>;
  original_height?: XmlElem<number>;
  background_color?: XmlElem<string>;
  background_color_html?: XmlElem<string>;
  mute_audio?: XmlElem<boolean>;
  resource_id?: XmlElem<number>;
  resource_name?: XmlElem<string>;
  resource_draft_id?: XmlElem<number>;
  layer_poster_id?: XmlElem<number>;
  angle_rotation?: XmlElem<number>;
  compression_ratio?: XmlElem<number>;
  border_color?: XmlElem<string>;
  border_color_html?: XmlElem<string>;
  border_width?: XmlElem<number>;
  video_screenshots?: XmlMultiElem<ClVideoCourseFragmentLayerVideoScreenshot>;
  coordinate?: XmlElem<ClVideoCourseFragmentLayerCoordinate>;
  text_block?: XmlElem<ClVideoCourseFragmentLayerTextBlock>;
}

interface ClVideoCourseFragment {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  width?: XmlElem<number>;
  height?: XmlElem<number>;
  poster_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  start_time?: XmlElem<number>;
  transition_type?: XmlElem<string>;
  layers?: XmlMultiElem<ClVideoCourseFragmentLayer>;
}

interface ClVideoCourseTopElem extends XmlTopElem<ClVideoCourseDocument> {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  course_width?: XmlElem<number>;
  course_height?: XmlElem<number>;
  max_bitrate?: XmlElem<number>;
  output_format?: XmlElem<string>;
  last_compile_date?: XmlElem<Date>;
  media_file_id?: XmlElem<number>;
  lowres_media_file_id?: XmlElem<number>;
  current_fragment?: XmlElem<number>;
  current_layer?: XmlElem<number>;
  current_position?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  authors?: XmlMultiElem<ClVideoCourseAuthor>;
  temp_media_files?: XmlMultiElem<ClVideoCourseTempMediaFile>;
  fragments?: XmlMultiElem<ClVideoCourseFragment>;
}

type ClVideoCourseDocument = XmlDocument<ClVideoCourseTopElem>;

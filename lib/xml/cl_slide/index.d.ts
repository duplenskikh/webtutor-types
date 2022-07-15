interface ClSlideSubslideObject {
  id?: XmlElem<string>;
  guid?: XmlElem<string>;
  type?: XmlElem<string>;
  left?: XmlElem<number>;
  top?: XmlElem<number>;
  width?: XmlElem<number>;
  height?: XmlElem<number>;
  display?: XmlElem<string>;
  begin?: XmlElem<number>;
  displaytime?: XmlElem<number>;
  tranin?: XmlElem<string>;
  tranout?: XmlElem<string>;
  durin?: XmlElem<number>;
  durout?: XmlElem<number>;
  preload?: XmlElem<string>;
  fill_color?: XmlElem<string>;
  line_color?: XmlElem<string>;
  line_width?: XmlElem<string>;
  line_style?: XmlElem<string>;
  draggable?: XmlElem<boolean>;
  rotation?: XmlElem<number>;
  soundsrc?: XmlElem<string>;
  play?: XmlElem<boolean>;
  state_extension?: XmlElem<boolean>;
  hide_design?: XmlElem<boolean>;
  template?: XmlElem<string>;
  template_id?: XmlElem<number>;
  designcontentxml?: XmlElem<string>;
  contentxml?: XmlElem<string>;
  paramsxml?: XmlElem<string>;
  eventsxml?: XmlElem<string>;
}

interface ClSlideSubslide {
  id?: XmlElem<string>;
  guid?: XmlElem<string>;
  duration?: XmlElem<number>;
  infinite?: XmlElem<boolean>;
  eventsxml?: XmlElem<string>;
  actionboxesxml?: XmlElem<string>;
  groupsxml?: XmlElem<string>;
  objects?: XmlMultiElem<ClSlideSubslideObject>;
}

interface ClSlideComment {
  date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  text?: XmlElem<string>;
}

interface ClSlideView {
  selector?: XmlElem<string>;
}

interface ClSlideTopElem extends XmlTopElem<ClSlideDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  cl_course_id?: XmlElem<number>;
  cl_module_id?: XmlElem<number>;
  guid?: XmlElem<string>;
  sid?: XmlElem<number>;
  master_id?: XmlElem<number>;
  master_code?: XmlElem<string>;
  is_master?: XmlElem<boolean>;
  is_splash?: XmlElem<boolean>;
  indent?: XmlElem<number>;
  infinite?: XmlElem<boolean>;
  advance?: XmlElem<string>;
  transition?: XmlElem<number>;
  durout?: XmlElem<number>;
  eventsxml?: XmlElem<string>;
  actionboxesxml?: XmlElem<string>;
  flag_locked?: XmlElem<boolean>;
  greedy_person_id?: XmlElem<number>;
  greedy_person_fullname?: XmlElem<string>;
  flag_completion?: XmlElem<boolean>;
  champion_id?: XmlElem<number>;
  champion_fullname?: XmlElem<string>;
  approval_status?: XmlElem<number>;
  desc?: XmlElem<string>;
  stamp?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  subslides?: XmlMultiElem<ClSlideSubslide>;
  comments?: XmlMultiElem<ClSlideComment>;
  view?: XmlElem<ClSlideView>;
}

type ClSlideDocument = XmlDocument<ClSlideTopElem>;

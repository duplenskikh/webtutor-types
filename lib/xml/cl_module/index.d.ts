interface ClModuleGuideLine {
  pos?: XmlElem<number>;
  is_vertical?: XmlElem<boolean>;
}

interface ClModuleSlide {
  id?: XmlElem<number>;
}

interface ClModuleTemplateSlide {
  id?: XmlElem<string>;
  guid?: XmlElem<string>;
  template_slide_xml?: XmlElem<string>;
}

interface ClModuleDesignModuleColor {
  color?: XmlElem<string>;
}

interface ClModuleDesignFont {
  face?: XmlElem<string>;
  style?: XmlElem<string>;
  size?: XmlElem<number>;
  color?: XmlElem<string>;
}

interface ClModuleDesignNewids {
  slide?: XmlElem<string>;
  subslide?: XmlElem<string>;
  iebox?: XmlElem<string>;
  image?: XmlElem<string>;
  object?: XmlElem<string>;
  group?: XmlElem<string>;
}

interface ClModuleDesign {
  slide_width?: XmlElem<number>;
  slide_height?: XmlElem<number>;
  module_colors?: XmlMultiElem<ClModuleDesignModuleColor>;
  font?: XmlElem<ClModuleDesignFont>;
  newids?: XmlElem<ClModuleDesignNewids>;
}

interface ClModuleRuntimeRuntimecheck {
  id?: XmlElem<string>;
  check?: XmlElem<boolean>;
}

interface ClModuleRuntimeObjective {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  cs?: XmlElem<string>;
  ss?: XmlElem<string>;
  scoremin?: XmlElem<number>;
  scoremax?: XmlElem<number>;
  module?: XmlElem<boolean>;
}

interface ClModuleRuntimeRuleCondition {
  type?: XmlElem<string>;
  op?: XmlElem<string>;
  slideidfrom?: XmlElem<string>;
  slideidto?: XmlElem<string>;
  objective?: XmlElem<string>;
  comp?: XmlElem<string>;
  score?: XmlElem<number>;
  cs?: XmlElem<string>;
  ss?: XmlElem<string>;
}

interface ClModuleRuntimeRuleConditiongroup {
  op?: XmlElem<string>;
  open?: XmlElem<number>;
  close?: XmlElem<number>;
}

interface ClModuleRuntimeRule {
  objective_id?: XmlElem<string>;
  cs?: XmlElem<string>;
  ss?: XmlElem<string>;
  conditions?: XmlMultiElem<ClModuleRuntimeRuleCondition>;
  conditiongroups?: XmlMultiElem<ClModuleRuntimeRuleConditiongroup>;
}

interface ClModuleRuntimeNextidentity {
  slide?: XmlElem<number>;
  subslide?: XmlElem<number>;
  object?: XmlElem<number>;
  group?: XmlElem<number>;
  mousepointer?: XmlElem<number>;
  actionbox?: XmlElem<number>;
}

interface ClModuleRuntimeImport {
  masterid?: XmlElem<number>;
  left?: XmlElem<number>;
  top?: XmlElem<number>;
  width?: XmlElem<number>;
  height?: XmlElem<number>;
  comments_left?: XmlElem<number>;
  comments_top?: XmlElem<number>;
  comments_width?: XmlElem<number>;
  comments_height?: XmlElem<number>;
  import_comments?: XmlElem<boolean>;
  commentscolor?: XmlElem<string>;
  fiximages?: XmlElem<boolean>;
}

interface ClModuleRuntime {
  showsplash?: XmlElem<boolean>;
  seqslides?: XmlElem<boolean>;
  preloadimages?: XmlElem<boolean>;
  normalize?: XmlElem<boolean>;
  preview_fullscreen?: XmlElem<boolean>;
  preview_fitwindow?: XmlElem<boolean>;
  fit_small_window?: XmlElem<boolean>;
  runtimechecks?: XmlMultiElem<ClModuleRuntimeRuntimecheck>;
  objectives?: XmlMultiElem<ClModuleRuntimeObjective>;
  rules?: XmlMultiElem<ClModuleRuntimeRule>;
  nextidentity?: XmlElem<ClModuleRuntimeNextidentity>;
  import?: XmlElem<ClModuleRuntimeImport>;
}

interface ClModuleView {
  selector?: XmlElem<string>;
  module_view_selector?: XmlElem<number>;
  module_href?: XmlElem<string>;
}

interface ClModuleTopElem extends XmlTopElem<ClModuleDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  cl_course_id?: XmlElem<number>;
  resource_url?: XmlElem<string>;
  is_template?: XmlElem<boolean>;
  category?: XmlElem<string>;
  category_label?: XmlElem<string>;
  format?: XmlElem<string>;
  rev?: XmlElem<number>;
  template?: XmlElem<string>;
  template_id?: XmlElem<number>;
  file?: XmlElem<string>;
  cx_settings?: XmlElem<string>;
  cx_groups?: XmlElem<string>;
  desc?: XmlElem<string>;
  stamp?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  guide_lines?: XmlMultiElem<ClModuleGuideLine>;
  slides?: XmlMultiElem<ClModuleSlide>;
  template_slides?: XmlMultiElem<ClModuleTemplateSlide>;
  design?: XmlElem<ClModuleDesign>;
  runtime?: XmlElem<ClModuleRuntime>;
  view?: XmlElem<ClModuleView>;
  access?: XmlElem<AccessDocBase>;
  module_href_get?(): any;
  export_2_scorm?(): any;
}

type ClModuleDocument = XmlDocument<ClModuleTopElem>;

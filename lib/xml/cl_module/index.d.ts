interface ClModuleDocumentDesignFont {
  face: XmlElem<string>;
  style: XmlElem<string>;
  size: XmlElem<number>;
  color: XmlElem<string>;
}

interface ClModuleDocumentDesignNewids {
  slide: XmlElem<string>;
  subslide: XmlElem<string>;
  iebox: XmlElem<string>;
  image: XmlElem<string>;
  object: XmlElem<string>;
  group: XmlElem<string>;
}

interface ClModuleDocumentDesignModuleColor {
  color: XmlElem<string>;
}

interface ClModuleDocumentDesign {
  slide_width: XmlElem<number>;
  slide_height: XmlElem<number>;
  font: XmlElem<ClModuleDocumentDesignFont>;
  newids: XmlElem<ClModuleDocumentDesignNewids>;
  module_colors: XmlMultiElem<ClModuleDocumentDesignModuleColor>;
}

interface ClModuleDocumentRuntimeNextidentity {
  slide: XmlElem<number>;
  subslide: XmlElem<number>;
  object: XmlElem<number>;
  group: XmlElem<number>;
  mousepointer: XmlElem<number>;
  actionbox: XmlElem<number>;
}

interface ClModuleDocumentRuntimeImport {
  masterid: XmlElem<number>;
  left: XmlElem<number>;
  top: XmlElem<number>;
  width: XmlElem<number>;
  height: XmlElem<number>;
  comments_left: XmlElem<number>;
  comments_top: XmlElem<number>;
  comments_width: XmlElem<number>;
  comments_height: XmlElem<number>;
  import_comments: XmlElem<boolean>;
  commentscolor: XmlElem<string>;
  fiximages: XmlElem<boolean>;
}

interface ClModuleDocumentRuntimeRuntimecheck {
  id: XmlElem<string>;
  check: XmlElem<boolean>;
}

interface ClModuleDocumentRuntimeObjective {
  id: XmlElem<string>;
  name: XmlElem<string>;
  cs: XmlElem<string>;
  ss: XmlElem<string>;
  scoremin: XmlElem<number>;
  scoremax: XmlElem<number>;
  module: XmlElem<boolean>;
}

interface ClModuleDocumentRuntimeRuleCondition {
  type: XmlElem<string>;
  op: XmlElem<string>;
  slideidfrom: XmlElem<string>;
  slideidto: XmlElem<string>;
  objective: XmlElem<string>;
  comp: XmlElem<string>;
  score: XmlElem<number>;
  cs: XmlElem<string>;
  ss: XmlElem<string>;
}

interface ClModuleDocumentRuntimeRuleConditiongroup {
  op: XmlElem<string>;
  open: XmlElem<number>;
  close: XmlElem<number>;
}

interface ClModuleDocumentRuntimeRule {
  objective_id: XmlElem<string>;
  cs: XmlElem<string>;
  ss: XmlElem<string>;
  conditions: XmlMultiElem<ClModuleDocumentRuntimeRuleCondition>;
  conditiongroups: XmlMultiElem<ClModuleDocumentRuntimeRuleConditiongroup>;
}

interface ClModuleDocumentRuntime {
  showsplash: XmlElem<boolean>;
  seqslides: XmlElem<boolean>;
  preloadimages: XmlElem<boolean>;
  normalize: XmlElem<boolean>;
  preview_fullscreen: XmlElem<boolean>;
  preview_fitwindow: XmlElem<boolean>;
  fit_small_window: XmlElem<boolean>;
  nextidentity: XmlElem<ClModuleDocumentRuntimeNextidentity>;
  import: XmlElem<ClModuleDocumentRuntimeImport>;
  runtimechecks: XmlMultiElem<ClModuleDocumentRuntimeRuntimecheck>;
  objectives: XmlMultiElem<ClModuleDocumentRuntimeObjective>;
  rules: XmlMultiElem<ClModuleDocumentRuntimeRule>;
}

interface ClModuleDocumentGuideLine {
  pos: XmlElem<number>;
  is_vertical: XmlElem<boolean>;
}

interface ClModuleDocumentSlide {
  id: XmlElem<number, ClSlideCatalogDocumentTopElem>;
}

interface ClModuleDocumentTemplateSlide {
  id: XmlElem<string>;
  guid: XmlElem<string>;
  template_slide_xml: XmlElem<string>;
}

type ClModuleDocumentTopElem = XmlTopElem & {
  Doc: ClModuleDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  cl_course_id: XmlElem<number, ClCourseCatalogDocumentTopElem>;
  resource_url: XmlElem<string>;
  is_template: XmlElem<boolean>;
  category: XmlElem<string>;
  category_label: XmlElem<string>;
  format: XmlElem<string>;
  rev: XmlElem<number>;
  template: XmlElem<string>;
  template_id: XmlElem<number, ClModuleCatalogDocumentTopElem>;
  file: XmlElem<string>;
  design: XmlElem<ClModuleDocumentDesign>;
  runtime: XmlElem<ClModuleDocumentRuntime>;
  cx_settings: XmlElem<string>;
  cx_groups: XmlElem<string>;
  guide_lines: XmlMultiElem<ClModuleDocumentGuideLine>;
  slides: XmlMultiElem<ClModuleDocumentSlide>;
  template_slides: XmlMultiElem<ClModuleDocumentTemplateSlide>;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  stamp: XmlElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  module_href_get(): false | void;
  export_2_scorm(): false | void;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
};

type ClModuleDocument = XmlDocument & {
  TopElem: ClModuleDocumentTopElem;
  cl_module: ClModuleDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

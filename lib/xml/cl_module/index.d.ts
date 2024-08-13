interface ClModuleDocumentDesignFont {
  face: XmlElem<string | null>;
  style: XmlElem<string | null>;
  size: XmlElem<number | null>;
  color: XmlElem<string | null>;
}

interface ClModuleDocumentDesignNewids {
  slide: XmlElem<string | null>;
  subslide: XmlElem<string | null>;
  iebox: XmlElem<string | null>;
  image: XmlElem<string | null>;
  object: XmlElem<string | null>;
  group: XmlElem<string | null>;
}

interface ClModuleDocumentDesignModuleColor {
  color: XmlElem<string | null>;
}

interface ClModuleDocumentDesign {
  slide_width: XmlElem<number | null>;
  slide_height: XmlElem<number | null>;
  font: XmlElem<ClModuleDocumentDesignFont | null>;
  newids: XmlElem<ClModuleDocumentDesignNewids | null>;
  module_colors: XmlMultiElem<ClModuleDocumentDesignModuleColor | null>;
}

interface ClModuleDocumentRuntimeNextidentity {
  slide: XmlElem<number | null>;
  subslide: XmlElem<number | null>;
  object: XmlElem<number | null>;
  group: XmlElem<number | null>;
  mousepointer: XmlElem<number | null>;
  actionbox: XmlElem<number | null>;
}

interface ClModuleDocumentRuntimeImport {
  masterid: XmlElem<number | null>;
  left: XmlElem<number | null>;
  top: XmlElem<number | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
  comments_left: XmlElem<number | null>;
  comments_top: XmlElem<number | null>;
  comments_width: XmlElem<number | null>;
  comments_height: XmlElem<number | null>;
  import_comments: XmlElem<boolean>;
  commentscolor: XmlElem<string | null>;
  fiximages: XmlElem<boolean>;
}

interface ClModuleDocumentRuntimeRuntimecheck {
  id: XmlElem<string | null>;
  check: XmlElem<boolean>;
}

interface ClModuleDocumentRuntimeObjective {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
  cs: XmlElem<string | null>;
  ss: XmlElem<string | null>;
  scoremin: XmlElem<number | null>;
  scoremax: XmlElem<number | null>;
  module: XmlElem<boolean>;
}

interface ClModuleDocumentRuntimeRuleCondition {
  type: XmlElem<string | null>;
  op: XmlElem<string | null>;
  slideidfrom: XmlElem<string | null>;
  slideidto: XmlElem<string | null>;
  objective: XmlElem<string | null>;
  comp: XmlElem<string | null>;
  score: XmlElem<number | null>;
  cs: XmlElem<string | null>;
  ss: XmlElem<string | null>;
}

interface ClModuleDocumentRuntimeRuleConditiongroup {
  op: XmlElem<string | null>;
  open: XmlElem<number | null>;
  close: XmlElem<number | null>;
}

interface ClModuleDocumentRuntimeRule {
  objective_id: XmlElem<string | null>;
  cs: XmlElem<string | null>;
  ss: XmlElem<string | null>;
  conditions: XmlMultiElem<ClModuleDocumentRuntimeRuleCondition | null>;
  conditiongroups: XmlMultiElem<ClModuleDocumentRuntimeRuleConditiongroup | null>;
}

interface ClModuleDocumentRuntime {
  showsplash: XmlElem<boolean>;
  seqslides: XmlElem<boolean>;
  preloadimages: XmlElem<boolean>;
  normalize: XmlElem<boolean>;
  preview_fullscreen: XmlElem<boolean>;
  preview_fitwindow: XmlElem<boolean>;
  fit_small_window: XmlElem<boolean>;
  nextidentity: XmlElem<ClModuleDocumentRuntimeNextidentity | null>;
  import: XmlElem<ClModuleDocumentRuntimeImport | null>;
  runtimechecks: XmlMultiElem<ClModuleDocumentRuntimeRuntimecheck | null>;
  objectives: XmlMultiElem<ClModuleDocumentRuntimeObjective | null>;
  rules: XmlMultiElem<ClModuleDocumentRuntimeRule | null>;
}

interface ClModuleDocumentGuideLine {
  pos: XmlElem<number | null>;
  is_vertical: XmlElem<boolean>;
}

interface ClModuleDocumentSlide {
  id: XmlElem<number | null, ClSlideCatalogDocumentTopElem>;
}

interface ClModuleDocumentTemplateSlide {
  id: XmlElem<string | null>;
  guid: XmlElem<string | null>;
  template_slide_xml: XmlElem<string | null>;
}

type ClModuleDocumentTopElem = XmlTopElem & {
  Doc: ClModuleDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Курс CourseLab */
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  /** Ссылка на файлы ресурсов объекта */
  resource_url: XmlElem<string | null>;
  /** Является шаблоном */
  is_template: XmlElem<boolean>;
  /** Папка */
  category: XmlElem<string | null>;
  /** Категория */
  category_label: XmlElem<string | null>;
  format: XmlElem<string | null>;
  rev: XmlElem<number | null>;
  template: XmlElem<string | null>;
  template_id: XmlElem<number | null, ClModuleCatalogDocumentTopElem>;
  file: XmlElem<string | null>;
  design: XmlElem<ClModuleDocumentDesign | null>;
  runtime: XmlElem<ClModuleDocumentRuntime | null>;
  cx_settings: XmlElem<string | null>;
  cx_groups: XmlElem<string | null>;
  guide_lines: XmlMultiElem<ClModuleDocumentGuideLine | null>;
  slides: XmlMultiElem<ClModuleDocumentSlide | null>;
  template_slides: XmlMultiElem<ClModuleDocumentTemplateSlide | null>;
  /** Доступ */
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  stamp: XmlElem<number>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
  module_href_get(): false | void;
  export_2_scorm(): false | void;
  /** Является системным */
  is_std: XmlElem<boolean>;
  /** Измененный */
  changed: XmlElem<boolean>;
};

type ClModuleDocument = XmlDocument & {
  TopElem: ClModuleDocumentTopElem;
  cl_module: ClModuleDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

interface ClSlideDocumentSubslideObject {
  id: XmlElem<string | null>;
  guid: XmlElem<string | null>;
  type: XmlElem<string | null>;
  left: XmlElem<number | null>;
  top: XmlElem<number | null>;
  width: XmlElem<number | null>;
  height: XmlElem<number | null>;
  display: XmlElem<string | null>;
  begin: XmlElem<number | null>;
  displaytime: XmlElem<number | null>;
  tranin: XmlElem<string | null>;
  tranout: XmlElem<string | null>;
  durin: XmlElem<number | null>;
  durout: XmlElem<number | null>;
  preload: XmlElem<string | null>;
  fill_color: XmlElem<string | null>;
  line_color: XmlElem<string | null>;
  line_width: XmlElem<string | null>;
  line_style: XmlElem<string | null>;
  draggable: XmlElem<boolean>;
  rotation: XmlElem<number | null>;
  soundsrc: XmlElem<string | null>;
  play: XmlElem<boolean>;
  state_extension: XmlElem<boolean>;
  hide_design: XmlElem<boolean>;
  template: XmlElem<string | null>;
  template_id: XmlElem<number | null, ClObjectCatalogDocumentTopElem>;
  designcontentxml: XmlElem<string | null>;
  contentxml: XmlElem<string | null>;
  paramsxml: XmlElem<string | null>;
  eventsxml: XmlElem<string | null>;
}

interface ClSlideDocumentSubslide {
  id: XmlElem<string | null>;
  guid: XmlElem<string | null>;
  duration: XmlElem<number | null>;
  infinite: XmlElem<boolean>;
  eventsxml: XmlElem<string | null>;
  actionboxesxml: XmlElem<string | null>;
  groupsxml: XmlElem<string | null>;
  objects: XmlMultiElem<ClSlideDocumentSubslideObject | null>;
}

interface ClSlideDocumentComment {
  date: XmlElem<Date | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  text: XmlElem<string | null>;
}

type ClSlideDocumentTopElem = XmlTopElem & {
  Doc: ClSlideDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Курс CourseLab */
  cl_course_id: XmlElem<number | null, ClCourseCatalogDocumentTopElem>;
  /** Модуль Courselab */
  cl_module_id: XmlElem<number | null, ClModuleCatalogDocumentTopElem>;
  guid: XmlElem<string | null>;
  sid: XmlElem<number | null>;
  /** Слайд-хозяин */
  master_id: XmlElem<number | null, ClSlideCatalogDocumentTopElem>;
  /** Код слайда-хозяина */
  master_code: XmlElem<string | null>;
  /** Является хозяином */
  is_master: XmlElem<boolean>;
  /** Является выскакивающим экраном */
  is_splash: XmlElem<boolean>;
  indent: XmlElem<number | null>;
  infinite: XmlElem<boolean>;
  advance: XmlElem<string | null>;
  transition: XmlElem<number | null>;
  durout: XmlElem<number | null>;
  eventsxml: XmlElem<string | null>;
  actionboxesxml: XmlElem<string | null>;
  subslides: XmlMultiElem<ClSlideDocumentSubslide | null>;
  comments: XmlMultiElem<ClSlideDocumentComment | null>;
  /** Заблокировано */
  flag_locked: XmlElem<boolean>;
  /** Владелец ресурса */
  greedy_person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  /** Имя владельца */
  greedy_person_fullname: XmlElem<string | null>;
  /** Слайд завершен */
  flag_completion: XmlElem<boolean>;
  champion_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  champion_fullname: XmlElem<string | null>;
  /** Состояние разработки */
  approval_status: XmlElem<number, typeof common.cl_approval_states>;
  /** Комментарий */
  desc: XmlElem<string | null>;
  stamp: XmlElem<number>;
  /** Информация об объекте */
  doc_info: XmlElem<DocInfoBase | null>;
};

type ClSlideDocument = XmlDocument & {
  TopElem: ClSlideDocumentTopElem;
  cl_slide: ClSlideDocumentTopElem;
  OnBeforeSave(): void;
  DocDesc(): string;
};

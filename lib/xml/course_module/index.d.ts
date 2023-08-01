interface CourseModuleDocumentCmi5 {
  moveon: XmlElem<string>;
  launchmode: XmlElem<string>;
  launchmethod: XmlElem<string>;
}

type CourseModuleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebChecksBase &
KnowledgePartsBase &
CatalogListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CourseModuleDocument;
  desc: XmlElem<string>;
  eid: XmlElem<string>;
  type: XmlElem<string>;
  max_score: XmlElem<number>;
  mastery_score: XmlElem<number>;
  mastery_score_relative: XmlElem<number>;
  url: XmlElem<string>;
  assessment_id: XmlElem<number>;
  attempts_num: XmlElem<number>;
  set_status_side: XmlElem<string>;
  win_width: XmlElem<number>;
  win_height: XmlElem<number>;
  disp_scrolling: XmlElem<boolean>;
  version: XmlElem<string>;
  import_type: XmlElem<string>;
  activation_count: XmlElem<number>;
  launch_count: XmlElem<number>;
  cmi5: XmlElem<CourseModuleDocumentCmi5>;
  access: XmlElem<AccessDocBase>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElem<number>;
};

type CourseModuleDocument = XmlDocument & {
  TopElem: CourseModuleDocumentTopElem;
};

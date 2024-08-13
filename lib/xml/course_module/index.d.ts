interface CourseModuleDocumentCmi5 {
  moveon: XmlElem<string | null>;
  launchmode: XmlElem<string | null>;
  launchmethod: XmlElem<string | null>;
}

type CourseModuleDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebChecksBase &
KnowledgePartsBase &
CatalogListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: CourseModuleDocument;
  desc: XmlElem<string | null>;
  eid: XmlElem<string | null>;
  type: XmlElem<string>;
  max_score: XmlElem<number | null>;
  mastery_score: XmlElem<number | null>;
  mastery_score_relative: XmlElem<number | null>;
  url: XmlElem<string | null>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  attempts_num: XmlElem<number>;
  set_status_side: XmlElem<string>;
  win_width: XmlElem<number | null>;
  win_height: XmlElem<number | null>;
  disp_scrolling: XmlElem<boolean>;
  version: XmlElem<string | null>;
  import_type: XmlElem<string | null, typeof common.course_import_types>;
  activation_count: XmlElem<number | null>;
  launch_count: XmlElem<number | null>;
  cmi5: XmlElem<CourseModuleDocumentCmi5 | null>;
  access: XmlElem<AccessDocBase | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type CourseModuleDocument = XmlDocument & {
  TopElem: CourseModuleDocumentTopElem;
  course_module: CourseModuleDocumentTopElem;
  DocDesc(): string;
};

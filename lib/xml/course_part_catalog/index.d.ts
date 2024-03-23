type CoursePartCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  part_code: XmlElem<string>;
  parent_part_code: XmlElem<string>;
  part_name: XmlElem<string>;
  part_type: XmlElem<string, typeof common.course_part_types>;
  course_module_id: XmlElem<number, CourseModuleCatalogDocumentTopElem>;
  assessment_id: XmlElem<number, AssessmentCatalogDocumentTopElem>;
  activity_id: XmlElem<number, ActivityCatalogDocumentTopElem>;
  object_id: XmlElem<number>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};

type CoursePartCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  course_id: XmlElem<number | null, CourseCatalogDocumentTopElem>;
  part_code: XmlElem<string | null>;
  parent_part_code: XmlElem<string | null>;
  part_name: XmlElem<string | null>;
  part_type: XmlElem<string, typeof common.course_part_types>;
  course_module_id: XmlElem<number | null, CourseModuleCatalogDocumentTopElem>;
  assessment_id: XmlElem<number | null, AssessmentCatalogDocumentTopElem>;
  activity_id: XmlElem<number | null, ActivityCatalogDocumentTopElem>;
  object_id: XmlElem<number | null>;
  MatchDocTypeExt(): void;
  OnBuildExt(): void;
  OnDeleteExt(): void;
};

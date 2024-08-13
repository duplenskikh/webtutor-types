type DnIndEducatPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  student_id: XmlElem<number | null, DnStudentCatalogDocumentTopElem>;
  discipline_id: XmlElem<number | null, DnDisciplineCatalogDocumentTopElem>;
  prog_discipl_id: XmlElem<number | null, DnProgramDisciplCatalogDocumentTopElem>;
  control_form_id: XmlElem<number | null, DnControlFormCatalogDocumentTopElem>;
  is_course_work: XmlElem<string, typeof common.work_types>;
  theme_course_work: XmlElem<string | null>;
  chair_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  lector_id: XmlElem<number | null, LectorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

type DnIndEducatPlanCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  discipline_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  prog_discipl_id: XmlElem<number, DnProgramDisciplCatalogDocumentTopElem>;
  control_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  is_course_work: XmlElem<string, typeof common.work_types>;
  theme_course_work: XmlElem<string>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

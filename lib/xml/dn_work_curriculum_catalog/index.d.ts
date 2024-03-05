type DnWorkCurriculumCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string, typeof common.prog_discipl_states>;
  type: XmlElem<string, typeof common.curriculum_types>;
  student_id: XmlElem<number, DnStudentCatalogDocumentTopElem>;
  academ_year_id: XmlElem<number, DnAcademYearCatalogDocumentTopElem>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  special_id: XmlElem<number, DnSpecialCatalogDocumentTopElem>;
  specialization_id: XmlElem<number, DnSpecializationCatalogDocumentTopElem>;
  qualification_id: XmlElem<number, QualificationCatalogDocumentTopElem>;
  educat_form_id: XmlElem<number, DnEducatFormCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

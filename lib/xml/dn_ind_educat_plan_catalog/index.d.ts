type DnIndEducatPlanCatalogDocumentTopElem = XmlTopElem & { Doc: DnIndEducatPlanCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  student_id: XmlElem<number>;
  discipline_id: XmlElem<number>;
  prog_discipl_id: XmlElem<number>;
  control_form_id: XmlElem<number>;
  is_course_work: XmlElem<string>;
  theme_course_work: XmlElem<string>;
  chair_id: XmlElem<number>;
  lector_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnIndEducatPlanCatalogDocument = XmlDocument & { TopElem: DnIndEducatPlanCatalogDocumentTopElem; };

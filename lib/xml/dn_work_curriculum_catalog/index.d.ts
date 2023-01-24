type DnWorkCurriculumCatalogDocumentTopElem = XmlTopElem & { Doc: DnWorkCurriculumCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string>;
  type: XmlElem<string>;
  student_id: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  special_id: XmlElem<number>;
  specialization_id: XmlElem<number>;
  qualification_id: XmlElem<number>;
  educat_form_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnWorkCurriculumCatalogDocument = XmlDocument & { TopElem: DnWorkCurriculumCatalogDocumentTopElem; };

type DnAcademDebtCatalogDocumentTopElem = XmlTopElem & { Doc: DnAcademDebtCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  state_id: XmlElem<string>;
  stream_id: XmlElem<number>;
  stud_group_id: XmlElem<number>;
  student_id: XmlElem<number>;
  discipl_id: XmlElem<number>;
  contr_form_id: XmlElem<number>;
  latest_date: XmlElem<Date>;
  liquid_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnAcademDebtCatalogDocument = XmlDocument & { TopElem: DnAcademDebtCatalogDocumentTopElem; };

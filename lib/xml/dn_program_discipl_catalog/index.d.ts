type DnProgramDisciplCatalogDocumentTopElem = XmlTopElem & { Doc: DnProgramDisciplCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status_id: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipline_id: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  all_laboriousn_audit: XmlElem<number>;
  all_laboriousn_indep: XmlElem<number>;
  control_form: XmlElem<number>;
  educat_form_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnProgramDisciplCatalogDocument = XmlDocument & { TopElem: DnProgramDisciplCatalogDocumentTopElem; };

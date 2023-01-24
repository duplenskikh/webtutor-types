type DnProgDiscAppendCatalogDocumentTopElem = XmlTopElem & { Doc: DnProgDiscAppendCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  program_discipline_id: XmlElem<number>;
  academ_year_id: XmlElem<number>;
  special_id: XmlElem<number>;
  specialization_id: XmlElem<number>;
  educat_form_id: XmlElem<string>;
  qualification_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnProgDiscAppendCatalogDocument = XmlDocument & { TopElem: DnProgDiscAppendCatalogDocumentTopElem; };

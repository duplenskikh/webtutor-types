type DnRegisterCatalogDocumentTopElem = XmlTopElem & { Doc: DnRegisterCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  control_event_id: XmlElem<number>;
  type_id: XmlElem<string>;
  faculty_id: XmlElem<number>;
  chair_id: XmlElem<number>;
  discipl_id: XmlElem<number>;
  lector_id: XmlElem<number>;
  date_event: XmlElem<Date>;
  contr_form_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DnRegisterCatalogDocument = XmlDocument & { TopElem: DnRegisterCatalogDocumentTopElem; };

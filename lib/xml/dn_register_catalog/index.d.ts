type DnRegisterCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  control_event_id: XmlElem<number, DnControlEventCatalogDocumentTopElem>;
  type_id: XmlElem<string, typeof common.registr_types>;
  faculty_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  chair_id: XmlElem<number, SubdivisionCatalogDocumentTopElem>;
  discipl_id: XmlElem<number, DnDisciplineCatalogDocumentTopElem>;
  lector_id: XmlElem<number, LectorCatalogDocumentTopElem>;
  date_event: XmlElem<Date>;
  contr_form_id: XmlElem<number, DnControlFormCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

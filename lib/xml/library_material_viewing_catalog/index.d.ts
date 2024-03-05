type LibraryMaterialViewingCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  material_name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  state_id: XmlElem<string, typeof common.viewing_states>;
  duration: XmlElem<number>;
  start_viewing_date: XmlElem<Date>;
  last_viewing_date: XmlElem<Date>;
  finish_viewing_date: XmlElem<Date>;
  education_plan_id: XmlElem<number, EducationPlanCatalogDocumentTopElem>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

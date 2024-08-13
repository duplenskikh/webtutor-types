type LibraryMaterialViewingCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  material_name: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof common.viewing_states>;
  duration: XmlElem<number | null>;
  start_viewing_date: XmlElem<Date | null>;
  last_viewing_date: XmlElem<Date | null>;
  finish_viewing_date: XmlElem<Date | null>;
  education_plan_id: XmlElem<number | null, EducationPlanCatalogDocumentTopElem>;
  creation_date: XmlElem<Date | null>;
  creation_user_id: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  modification_user_id: XmlElem<number | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

type LibraryMaterialViewingCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialViewingCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  material_id: XmlElem<number>;
  material_name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  state_id: XmlElem<string>;
  duration: XmlElem<number>;
  start_viewing_date: XmlElem<Date>;
  last_viewing_date: XmlElem<Date>;
  finish_viewing_date: XmlElem<Date>;
  education_plan_id: XmlElem<number>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
  app_instance_id: XmlElem<string>;
}

type LibraryMaterialViewingCatalogDocument = XmlDocument & { TopElem: LibraryMaterialViewingCatalogDocumentTopElem; };

type LibraryMaterialItemCatalogDocumentTopElem = XmlTopElem & { Doc: LibraryMaterialItemCatalogDocument } & 
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  material_id: XmlElem<number>;
  number: XmlElem<string>;
  person_id: XmlElem<number>;
  format_id: XmlElem<number>;
  state_id: XmlElem<string>;
  issue_date: XmlElem<Date>;
  return_plan_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
  app_instance_id: XmlElem<string>;
}

type LibraryMaterialItemCatalogDocument = XmlDocument & { TopElem: LibraryMaterialItemCatalogDocumentTopElem; };

type LibraryMaterialItemCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  material_id: XmlElem<number, LibraryMaterialCatalogDocumentTopElem>;
  number: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  format_id: XmlElem<number, LibraryMaterialFormatCatalogDocumentTopElem>;
  state_id: XmlElem<string, typeof common.availability_states>;
  issue_date: XmlElem<Date>;
  return_plan_date: XmlElem<Date>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  modification_user_id: XmlElem<number>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

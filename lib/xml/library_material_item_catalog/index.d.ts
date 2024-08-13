type LibraryMaterialItemCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  material_id: XmlElem<number | null, LibraryMaterialCatalogDocumentTopElem>;
  number: XmlElem<string | null>;
  person_id: XmlElem<number | null, CollaboratorCatalogDocumentTopElem>;
  format_id: XmlElem<number | null, LibraryMaterialFormatCatalogDocumentTopElem>;
  state_id: XmlElem<string | null, typeof common.availability_states>;
  issue_date: XmlElem<Date | null>;
  return_plan_date: XmlElem<Date | null>;
  creation_date: XmlElem<Date | null>;
  creation_user_id: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  modification_user_id: XmlElem<number | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

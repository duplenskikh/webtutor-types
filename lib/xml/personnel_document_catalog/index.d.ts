type PersonnelDocumentCatalogDocumentTopElem = XmlTopElem &
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  number: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  create_date: XmlElem<Date>;
  acquaint_date: XmlElem<Date>;
  sign_date: XmlElem<Date>;
  state_id: XmlElem<string, typeof common.personnel_document_states>;
  person_signature_date: XmlElem<Date>;
  wredc_data_url: XmlElem<string>;
  personnel_document_type_id: XmlElem<number, PersonnelDocumentTypeCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

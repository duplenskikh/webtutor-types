type PersonnelDocumentTypeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  org_signature_types: XmlMultiElemObject<string, typeof common.signature_types>;
  person_signature_types: XmlMultiElemObject<string, typeof common.signature_types>;
  person_first_signature: XmlElem<boolean>;
  print_form_id: XmlElem<number, PrintFormCatalogDocumentTopElem>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  personnel_event_code: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};

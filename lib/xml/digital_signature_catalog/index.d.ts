type DigitalSignatureCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  sign_date: XmlElem<Date>;
  is_signed: XmlElem<boolean>;
  custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): unknown;
};

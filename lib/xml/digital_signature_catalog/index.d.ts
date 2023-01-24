type DigitalSignatureCatalogDocumentTopElem = XmlTopElem & { Doc: DigitalSignatureCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  create_date: XmlElem<Date>;
  sign_date: XmlElem<Date>;
  is_signed: XmlElem<boolean>;
  custom_web_template_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type DigitalSignatureCatalogDocument = XmlDocument & { TopElem: DigitalSignatureCatalogDocumentTopElem; };

type LikeCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  type_id: XmlElem<string, typeof common.reaction_types>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_name: XmlElem<string>;
  sec_object_id: XmlElem<number>;
  sec_object_type: XmlElem<string, typeof common.exchange_object_types>;
  reaction: XmlElem<string>;
  message_id: XmlElem<string>;
  weight: XmlElem<number>;
  create_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

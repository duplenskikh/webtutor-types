type ObjectVersionCatalogDocumentTopElem = XmlTopElem & { Doc: ObjectVersionCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  catalog_name: XmlElem<string>;
  object_id: XmlElem<number>;
  object_modification_date: XmlElem<Date>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  creation_date: XmlElem<Date>;
  creation_user_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ObjectVersionCatalogDocument = XmlDocument & { TopElem: ObjectVersionCatalogDocumentTopElem; };

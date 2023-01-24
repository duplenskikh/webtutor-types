type LikeCatalogDocumentTopElem = XmlTopElem & { Doc: LikeCatalogDocument } & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  object_id: XmlElem<number>;
  object_type: XmlElem<string>;
  object_name: XmlElem<string>;
  weight: XmlElem<number>;
  create_date: XmlElem<Date>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LikeCatalogDocument = XmlDocument & { TopElem: LikeCatalogDocumentTopElem; };

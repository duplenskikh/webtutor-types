type ResponseCatalogDocumentTopElem = XmlTopElem & { Doc: ResponseCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  type: XmlElem<string>;
  response_type_id: XmlElem<number>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_org_name: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  basic_score: XmlElem<number>;
  basic_desc: XmlElem<string>;
  create_date: XmlElem<Date>;
  is_public: XmlElem<boolean>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ResponseCatalogDocument = XmlDocument & { TopElem: ResponseCatalogDocumentTopElem; };

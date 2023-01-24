type LectorCatalogDocumentTopElem = XmlTopElem & { Doc: LectorCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  resource_id: XmlElem<number>;
  type: XmlElem<string>;
  lector_fullname: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  person_position_name: XmlElem<string>;
  person_subdivision_name: XmlElem<string>;
  email: XmlElem<string>;
  is_dismiss: XmlElem<boolean>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type LectorCatalogDocument = XmlDocument & { TopElem: LectorCatalogDocumentTopElem; };

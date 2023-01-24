type UserAssignmentCatalogDocumentTopElem = XmlTopElem & { Doc: UserAssignmentCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_name: XmlElem<string>;
  role_id: XmlMultiElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type UserAssignmentCatalogDocument = XmlDocument & { TopElem: UserAssignmentCatalogDocumentTopElem; };

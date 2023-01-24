type StatementObjectCatalogDocumentTopElem = XmlTopElem & { Doc: StatementObjectCatalogDocument } & {
  id: XmlElem<number>;
  path: XmlElem<string>;
  object_id: XmlElem<string>;
  object_type: XmlElem<string>;
  statement_id: XmlElem<number>;
  definition_type: XmlElem<string>;
  definition_more_info: XmlElem<string>;
  definition_interaction_type: XmlElem<string>;
  context_activity_type: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type StatementObjectCatalogDocument = XmlDocument & { TopElem: StatementObjectCatalogDocumentTopElem; };

type StatementObjectCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number | null>;
  path: XmlElem<string | null>;
  object_id: XmlElem<string | null>;
  object_type: XmlElem<string | null>;
  statement_id: XmlElem<number | null, StatementCatalogDocumentTopElem>;
  definition_type: XmlElem<string | null>;
  definition_more_info: XmlElem<string | null>;
  definition_interaction_type: XmlElem<string | null>;
  context_activity_type: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

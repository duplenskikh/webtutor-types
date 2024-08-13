type LearningTaskCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  resource_id: XmlElem<number | null, ResourceCatalogDocumentTopElem>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  yourself_start: XmlElem<boolean>;
  use_in_event: XmlElem<boolean>;
  duration: XmlElem<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  experts_id: XmlMultiElemObject<number | null, CollaboratorCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number | null>;
  tags: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  OnBuild(): void;
};

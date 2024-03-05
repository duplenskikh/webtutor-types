type LearningTaskCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  yourself_start: XmlElem<boolean>;
  use_in_event: XmlElem<boolean>;
  duration: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  experts_id: XmlMultiElemObject<number, CollaboratorCatalogDocumentTopElem>;
  role_id: XmlMultiElemObject<number>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  OnBuild(): unknown;
};

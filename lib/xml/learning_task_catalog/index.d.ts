type LearningTaskCatalogDocumentTopElem = XmlTopElem & { Doc: LearningTaskCatalogDocument } & 
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  yourself_start: XmlElem<boolean>;
  use_in_event: XmlElem<boolean>;
  duration: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  experts_id: XmlMultiElem<number>;
  role_id: XmlMultiElem<number>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
}

type LearningTaskCatalogDocument = XmlDocument & { TopElem: LearningTaskCatalogDocumentTopElem; };

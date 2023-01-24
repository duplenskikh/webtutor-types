type CourseModuleCatalogDocumentTopElem = XmlTopElem & { Doc: CourseModuleCatalogDocument } & 
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  eid: XmlElem<string>;
  name: XmlElem<string>;
  activation_count: XmlElem<number>;
  launch_count: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type CourseModuleCatalogDocument = XmlDocument & { TopElem: CourseModuleCatalogDocumentTopElem; };

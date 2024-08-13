type CourseModuleCatalogDocumentTopElem = XmlTopElem &
AccessDocBase &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  eid: XmlElem<string | null>;
  name: XmlElem<string | null>;
  activation_count: XmlElem<number | null>;
  launch_count: XmlElem<number | null>;
  role_id: XmlMultiElemObject<number | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  OnBuild(): void;
};

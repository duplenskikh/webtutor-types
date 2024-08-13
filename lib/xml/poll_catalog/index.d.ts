type PollCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  end_date: XmlElem<Date | null>;
  is_main: XmlElem<boolean>;
  completed: XmlElem<boolean>;
  is_anonymous: XmlElem<boolean>;
  is_one_time: XmlElem<boolean>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  OnBuild(): void;
};

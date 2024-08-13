type QtiItemCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  type_id: XmlElem<string | null, typeof common.item_types>;
  status: XmlElem<string, typeof common.tutor_status_types>;
  title: XmlElem<string | null>;
  question_text: XmlElem<string | null>;
  question_points: XmlElem<number | null>;
  role_id: XmlMultiElemObject<number | null>;
  modification_date: XmlElem<Date | null>;
  app_instance_id: XmlElem<string | null>;
  knowledge_parts: XmlElem<string | null>;
  tags: XmlElem<string | null>;
  experts: XmlElem<string | null>;
  OnBuild(): void;
};

type ItemCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  type_id: XmlElem<string, typeof common.item_types>;
  status: XmlElem<string, typeof common.tutor_status_types>;
  title: XmlElem<string>;
  question_text: XmlElem<string>;
  question_points: XmlElem<number>;
  role_id: XmlMultiElemObject<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  OnBuild(): unknown;
};

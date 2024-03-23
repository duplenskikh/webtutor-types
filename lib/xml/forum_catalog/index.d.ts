type ForumCatalogDocumentTopElem = XmlTopElem &
AdminAccessBase & {
  id: XmlElem<number>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  permit_subscription: XmlElem<boolean>;
  closed: XmlElem<boolean>;
  allow_anonymous_message: XmlElem<boolean>;
  allow_create_closed_theme: XmlElem<boolean>;
  allow_user_delete: XmlElem<boolean>;
  disp_user_status: XmlElem<boolean>;
  course_id: XmlElem<number, CourseCatalogDocumentTopElem>;
  person_id: XmlElem<number, CollaboratorCatalogDocumentTopElem>;
  person_fullname: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  role_id: XmlMultiElemObject<number>;
  OnBuild(): void;
};

type ProjectParticipantRoleCatalogDocumentTopElem = XmlTopElem & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  project_id: XmlElem<number, ProjectCatalogDocumentTopElem>;
  participant_num: XmlElem<number>;
  provider_id: XmlElem<number, ProviderCatalogDocumentTopElem>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
  OnBuild(): void;
};

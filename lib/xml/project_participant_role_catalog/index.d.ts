type ProjectParticipantRoleCatalogDocumentTopElem = XmlTopElem & { Doc: ProjectParticipantRoleCatalogDocument } & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  resource_id: XmlElem<number>;
  project_id: XmlElem<number>;
  participant_num: XmlElem<number>;
  knowledge_parts: XmlElem<string>;
  tags: XmlElem<string>;
  experts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProjectParticipantRoleCatalogDocument = XmlDocument & { TopElem: ProjectParticipantRoleCatalogDocumentTopElem; };

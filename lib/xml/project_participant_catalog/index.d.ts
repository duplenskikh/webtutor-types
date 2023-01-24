type ProjectParticipantCatalogDocumentTopElem = XmlTopElem & { Doc: ProjectParticipantCatalogDocument } & 
PersonFillingBase &
AdminAccessBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  catalog: XmlElem<string>;
  object_id: XmlElem<number>;
  object_name: XmlElem<string>;
  person_id: XmlElem<number>;
  boss_type_id: XmlElem<number>;
  project_id: XmlElem<number>;
  participant_roles_id: XmlMultiElem<number>;
  is_excluded: XmlElem<boolean>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  plan_load: XmlElem<number>;
  percent_plan_load: XmlElem<number>;
  status_id: XmlElem<string>;
  workflow_id: XmlElem<number>;
  workflow_state: XmlElem<string>;
  workflow_state_name: XmlElem<string>;
  workflow_person_id: XmlMultiElem<number>;
  workflow_matching_type: XmlElem<string>;
  experts: XmlElem<string>;
  tags: XmlElem<string>;
  knowledge_parts: XmlElem<string>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type ProjectParticipantCatalogDocument = XmlDocument & { TopElem: ProjectParticipantCatalogDocumentTopElem; };

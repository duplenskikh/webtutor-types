type KnowledgeAcquaintCatalogDocumentTopElem = XmlTopElem & { Doc: KnowledgeAcquaintCatalogDocument } & 
PersonFillingBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  knowledge_part_id: XmlElem<number>;
  knowledge_part_name: XmlElem<string>;
  person_id: XmlElem<number>;
  level_id: XmlElem<string>;
  level_index: XmlElem<number>;
  level_name: XmlElem<string>;
  sec_object_type: XmlElem<string>;
  sec_object_id: XmlElem<number>;
  sec_object_name: XmlElem<string>;
  state_id: XmlElem<string>;
  type_id: XmlElem<string>;
  confirmation_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  confirmation_type: XmlElem<string>;
  confirmation_expert_type: XmlElem<string>;
  confirmation_boss_type_id: XmlElem<number>;
  project_participant_id: XmlElem<number>;
  modification_date: XmlElem<Date>;
  app_instance_id: XmlElem<string>;
}

type KnowledgeAcquaintCatalogDocument = XmlDocument & { TopElem: KnowledgeAcquaintCatalogDocumentTopElem; };

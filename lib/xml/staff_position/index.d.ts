interface StaffPositionDocumentCompetenceProfile {
  id?: XmlElem<number>;
}

type StaffPositionDocumentTopElem = XmlTopElem & { Doc: StaffPositionDocument } & 
RequirementsBase &
FileListBase &
KnowledgePartsBase &
AdminAccessBase &
CustomElemsBase & {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  status?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  org_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
  position_common_id?: XmlElem<number>;
  profession_id?: XmlElem<number>;
  profession_category_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  staff_num?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  knowledge_profile_id?: XmlElem<number>;
  competence_profile_id?: XmlElem<number>;
  competence_profiles?: XmlMultiElem<StaffPositionDocumentCompetenceProfile>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type StaffPositionDocument = XmlDocument & { TopElem: StaffPositionDocumentTopElem; };

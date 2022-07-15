interface GroupCollaborator extends PersonForeignBase {
  collaborator_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  collaborator_fullname?(): any;
}

interface GroupViewFilter extends AuFtFilter {
}

interface GroupView extends DescBase {
  filter?: XmlElem<GroupViewFilter>;
}

interface GroupTopElem extends XmlTopElem<GroupDocument>, ObjectCodeNameBase, EducGroupsBase, FuncManagersBase, CustomElemsBase, DocumentPersonsBase, RequirementsBase, KnowledgePartsBase, KnowledgePartsBaseOld, ViewConditionsBase, PersonObjectLinksBase {
  show_detailed?: XmlElem<boolean>;
  is_dynamic?: XmlElem<boolean>;
  is_educ?: XmlElem<boolean>;
  is_hidden?: XmlElem<boolean>;
  allow_social_post?: XmlElem<boolean>;
  forum_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  join_mode?: XmlElem<string>;
  default_request_type_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  rows?: XmlElem<any>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  list_variant?: XmlElem<any>;
  role_id?: XmlMultiElem<number>;
  collaborators?: XmlMultiElem<GroupCollaborator>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<GroupView>;
  person_num?(): any;
  dynamic_select_person?(): any;
  start_action?(): any;
  activateCourseToPersons?(): any;
  add_collaborator?(): any;
  remove_collaborator?(): any;
}

type GroupDocument = XmlDocument<GroupTopElem>;

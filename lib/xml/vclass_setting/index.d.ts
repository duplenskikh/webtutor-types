interface VclassSettingProgramCompletedParentProgram {
  program_id?: XmlElem<number>;
}

interface VclassSettingProgram {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_progpam_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  person_num?: XmlElem<number>;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  weight?: XmlElem<number>;
  start_type?: XmlElem<string>;
  required?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  completed_parent_programs?: XmlMultiElem<VclassSettingProgramCompletedParentProgram>;
}

interface VclassSettingViewFilter extends AuFtFilter {
}

interface VclassSettingView extends DescBase {
  part_index?: XmlElem<number>;
  filter?: XmlElem<AuFtFilter>;
  filter?: XmlElem<VclassSettingViewFilter>;
}

interface VclassSettingTopElem extends XmlTopElem<VclassSettingDocument>, CustomElemsBase, AdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  event_id?: XmlElem<number>;
  conversation_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  programs?: XmlMultiElem<VclassSettingProgram>;
  view?: XmlElem<VclassSettingView>;
}

type VclassSettingDocument = XmlDocument<VclassSettingTopElem>;

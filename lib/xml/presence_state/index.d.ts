interface PresenceStateDisplayField {
  value?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface PresenceStateRequiredField {
  value?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface PresenceStateTopElem extends XmlTopElem<PresenceStateDocument>, CustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  state_id?: XmlElem<string>;
  state_name?: XmlElem<string>;
  accessible?: XmlElem<boolean>;
  is_absence?: XmlElem<boolean>;
  workflow_id?: XmlElem<number>;
  can_cancel?: XmlElem<boolean>;
  can_change?: XmlElem<boolean>;
  cancel_workflow_id?: XmlElem<number>;
  change_workflow_id?: XmlElem<number>;
  position?: XmlElem<number>;
  style_css?: XmlElem<string>;
  all_day?: XmlElem<boolean>;
  is_sub_work_time?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  display_fields?: XmlMultiElem<PresenceStateDisplayField>;
  required_fields?: XmlMultiElem<PresenceStateRequiredField>;
}

type PresenceStateDocument = XmlDocument<PresenceStateTopElem>;

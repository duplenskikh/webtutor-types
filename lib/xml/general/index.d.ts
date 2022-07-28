
interface ObjectInnerBaseSettingsAuxAuxParam {
  id?: XmlElem<string>;
  value?: XmlElem<string>;
  tag?: XmlElem<string>;
}

interface ObjectInnerBaseSettingsAux {
  aux_param?: XmlMultiElem<undefined>;
  aux_param?: XmlElem<ObjectInnerBaseSettingsAuxAuxParam>;
}

interface ObjectInnerBaseSettings extends WebVariablesBase {
  aux?: XmlElem<ObjectInnerBaseSettingsAux>;
}

interface ObjectInnerBase {
  id?: XmlElem<number>;
  catalog?: XmlElem<string>;
  uid?: XmlElem<number>;
  title?: XmlElem<string>;
  parent_section_id?: XmlElem<number>;
  is_default?: XmlElem<boolean>;
  is_menu?: XmlElem<boolean>;
  is_offline?: XmlElem<boolean>;
  hidden?: XmlElem<boolean>;
  settings?: XmlElem<ObjectInnerBaseSettings>;
}

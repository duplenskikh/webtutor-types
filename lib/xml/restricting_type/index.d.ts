interface RestrictingTypeRestricting {
  id?: XmlElem<string>;
  presence_state_id?: XmlElem<number>;
  start_time_from?: XmlElem<string>;
  start_time_to?: XmlElem<string>;
  end_time_from?: XmlElem<string>;
  end_time_to?: XmlElem<string>;
  min_work_days?: XmlElem<number>;
  max_work_days?: XmlElem<number>;
  min_hours?: XmlElem<number>;
  max_hours?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface RestrictingTypeTopElem extends XmlTopElem<RestrictingTypeDocument> {
  id?: XmlElem<number>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  period_type_id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  restrictings?: XmlMultiElem<RestrictingTypeRestricting>;
}

type RestrictingTypeDocument = XmlDocument<RestrictingTypeTopElem>;

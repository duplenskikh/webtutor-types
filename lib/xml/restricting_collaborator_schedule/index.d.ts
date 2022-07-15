interface RestrictingCollaboratorScheduleTopElem extends XmlTopElem<RestrictingCollaboratorScheduleDocument>, PersonFillingBase {
  id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  restriction_type_id?: XmlElem<number>;
  state_id?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
}

type RestrictingCollaboratorScheduleDocument = XmlDocument<RestrictingCollaboratorScheduleTopElem>;

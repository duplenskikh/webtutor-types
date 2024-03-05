interface EstaffEventTypeDocumentPositionCommon {
  position_common_id: XmlElem<number, PositionCommonCatalogDocumentTopElem>;
}

interface EstaffEventTypeDocumentEventType {
  id: XmlElem<string>;
  name: XmlElem<string>;
}

interface EstaffEventTypeDocumentCompletionSign {
  id: XmlElem<number, EstaffEventTypeCatalogDocumentTopElem>;
}

type EstaffEventTypeDocumentTopElem = XmlTopElem &
WebVariablesBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: EstaffEventTypeDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  status: XmlElem<string>;
  position_commons: XmlMultiElem<EstaffEventTypeDocumentPositionCommon>;
  event_types: XmlMultiElem<EstaffEventTypeDocumentEventType>;
  completion_signs: XmlMultiElem<EstaffEventTypeDocumentCompletionSign>;
  event_type_estaff_id: XmlElem<string>;
  event_type_estaff_name: XmlElem<string>;
  org_id: XmlElem<number, OrgCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number, RecruitmentSystemCatalogDocumentTopElem>;
  visibility_condition: XmlElem<string>;
  run_visibility_condition_url: XmlElem<string>;
  action_event_occurs: XmlElem<string>;
  run_action_event_occurs_url: XmlElem<string>;
  check_event_processing: XmlElem<string>;
  run_check_event_processing_url: XmlElem<string>;
  eval_action_event_occurs(iEstaffEventIDParam: number, iPersonIDParam: number, iObjectIDParam: number, iCandidateEIDParam: number, iVacancyEIDParam: number, iRecruterIDParam: number): unknown;
  eval_check_event_process(iEstaffEventIDParam: number, iPersonIDParam: number, iObjectIDParam: number, sUrlParam: string, sActionParam: string, sEstaffEventStatusParam: string, SourceParam: unknown): unknown;
  eval_visibility_condition(iEstaffEventIDParam: number, iPersonIDParam: number, iCurUserIDParam: number, iObjectIDParam: number): unknown;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type EstaffEventTypeDocument = XmlDocument & {
  TopElem: EstaffEventTypeDocumentTopElem;
};

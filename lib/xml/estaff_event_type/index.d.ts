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
  eval_action_event_occurs(estaffEventId: number, personId: number, objectId: number, candidateEId: number, vacancyEId: number, recruterId: number): unknown;
  eval_check_event_process(estaffEventId: number, personId: number, objectId: number, url: string, action: string, estaffEventStatus: string, source: unknown): unknown;
  eval_visibility_condition(estaffEventId: number, personId: number, curUserId: number, objectId: number): unknown;
  desc: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type EstaffEventTypeDocument = XmlDocument & {
  TopElem: EstaffEventTypeDocumentTopElem;
  estaff_event_type: EstaffEventTypeDocumentTopElem;
  DocDesc(): string;
};

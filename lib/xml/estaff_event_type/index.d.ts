interface EstaffEventTypeDocumentPositionCommon {
  position_common_id: XmlElem<number | null, PositionCommonCatalogDocumentTopElem>;
}

interface EstaffEventTypeDocumentEventType {
  id: XmlElem<string | null>;
  name: XmlElem<string | null>;
}

interface EstaffEventTypeDocumentCompletionSign {
  id: XmlElem<number | null, EstaffEventTypeCatalogDocumentTopElem>;
}

type EstaffEventTypeDocumentTopElem = XmlTopElem &
WebVariablesBase &
AdminAccessBase &
CustomElemsBase & {
  Doc: EstaffEventTypeDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  status: XmlElem<string | null>;
  position_commons: XmlMultiElem<EstaffEventTypeDocumentPositionCommon | null>;
  event_types: XmlMultiElem<EstaffEventTypeDocumentEventType | null>;
  completion_signs: XmlMultiElem<EstaffEventTypeDocumentCompletionSign | null>;
  event_type_estaff_id: XmlElem<string | null>;
  event_type_estaff_name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  recruitment_system_id: XmlElem<number | null, RecruitmentSystemCatalogDocumentTopElem>;
  visibility_condition: XmlElem<string | null>;
  run_visibility_condition_url: XmlElem<string | null>;
  action_event_occurs: XmlElem<string | null>;
  run_action_event_occurs_url: XmlElem<string | null>;
  check_event_processing: XmlElem<string | null>;
  run_check_event_processing_url: XmlElem<string | null>;
  eval_action_event_occurs(estaffEventId: number, personId: number, objectId: number, candidateEId: number, vacancyEId: number, recruterId: number): unknown;
  eval_check_event_process(estaffEventId: number, personId: number, objectId: number, url: string, action: string, estaffEventStatus: string, source: unknown): unknown;
  eval_visibility_condition(estaffEventId: number, personId: number, curUserId: number, objectId: number): unknown;
  desc: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type EstaffEventTypeDocument = XmlDocument & {
  TopElem: EstaffEventTypeDocumentTopElem;
  estaff_event_type: EstaffEventTypeDocumentTopElem;
  DocDesc(): string;
};

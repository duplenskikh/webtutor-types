interface CollaboratorDocumentChangeLog extends CustomElemsBase {
  id: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  position_parent_name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string | null>;
  date: XmlElem<Date | null>;
  comment: XmlElem<string | null>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  working_days: XmlElem<number | null>;
  working_hours: XmlElem<number | null>;
  rate: XmlElem<number | null>;
  rate_percent: XmlElem<number | null>;
}

interface CollaboratorDocumentHistoryState {
  id: XmlElem<string | null>;
  state_id: XmlElem<string | null, typeof lists.person_states>;
  start_date: XmlElem<Date | null>;
  finish_date: XmlElem<Date | null>;
  object_id: XmlElem<number | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  comment: XmlElem<string | null>;
}

interface CollaboratorDocumentPersonalConfig {
  avatar_filename: XmlElem<string | null>;
  nick: XmlElem<string | null>;
  status: XmlElem<string | null>;
  default_info_type: XmlElem<string, typeof common.forum_person_info_types>;
}

interface CollaboratorDocumentCustomParam {
  name: XmlElem<string | null>;
  value: XmlElem<string | null>;
}

interface CollaboratorDocumentCompBenPaymentType {
  payment_type_id: XmlElem<number | null, PaymentTypeCatalogDocumentTopElem>;
  max_value: XmlElem<number | null>;
  comment: XmlElem<string | null>;
}

interface CollaboratorDocumentCompBen {
  salary: XmlElem<number | null>;
  currency_type_id: XmlElem<string | null, typeof lists.currency_types>;
  payment_period: XmlElem<string | null, typeof common.perioditys>;
  comment: XmlElem<string | null>;
  payment_types: XmlMultiElem<CollaboratorDocumentCompBenPaymentType | null>;
}

interface CollaboratorDocumentLastData {
  web_banned: XmlElem<boolean>;
  login: XmlElem<string | null>;
  password: XmlElem<string | null>;
  access_role: XmlElem<string | null>;
  is_arm_admin: XmlElem<boolean>;
  is_application_admin: XmlElem<boolean>;
  is_content_admin: XmlElem<boolean>;
  in_request_black_list: XmlElem<boolean>;
  position_id: XmlElem<number | null>;
  pict_url: XmlElem<string | null>;
  avatar_filename: XmlElem<string | null>;
}

type CollaboratorDocumentTopElem = XmlTopElem &
PersonBase &
PassportDataBase &
FileListBase &
FuncManagersBase &
PathSubsBase &
KnowledgePartsBase &
KnowledgePartsBaseOld &
CustomElemsBase &
PersonObjectLinksBase & {
  Doc: CollaboratorDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  eid: XmlElem<string | null>;
  name(): string;
  snils: XmlElem<string | null>;
  position_id: XmlElem<number | null, PositionCatalogDocumentTopElem>;
  position_name: XmlElem<string | null>;
  position_parent_id: XmlElem<number | null, SubdivisionCatalogDocumentTopElem>;
  position_parent_name: XmlElem<string | null>;
  org_id: XmlElem<number | null, OrgCatalogDocumentTopElem>;
  org_name: XmlElem<string | null>;
  change_password: XmlElem<boolean>;
  is_candidate: XmlElem<boolean>;
  is_outstaff: XmlElem<boolean>;
  candidate_status_type_id: XmlElem<number | null, CandidateStatusTypeCatalogDocumentTopElem>;
  candidate_id: XmlElem<number | null>;
  is_dismiss: XmlElem<boolean>;
  hire_date: XmlElem<Date | null>;
  dismiss_date: XmlElem<Date | null>;
  position_date: XmlElem<Date | null>;
  in_request_black_list: XmlElem<boolean>;
  request_black_list_data: XmlElem<Date | null>;
  request_black_list_comment: XmlElem<string | null>;
  place_id: XmlElem<number | null, PlaceCatalogDocumentTopElem>;
  region_id: XmlElem<number | null, RegionCatalogDocumentTopElem>;
  access: XmlElem<AccessBase | null>;
  cost_center_id: XmlElem<number | null, CostCenterCatalogDocumentTopElem>;
  provider_legal_id: XmlElem<string | null>;
  lng_id: XmlElem<string | null>;
  location_id: XmlElem<string | null, typeof lists.locations>;
  pict_url: XmlElem<string | null>;
  access_time_start: XmlElem<string | null>;
  access_time_end: XmlElem<string | null>;
  is_time_access(): boolean;
  desc: XmlElem<string | null>;
  disp_empty_fields: XmlElem<boolean>;
  disp_personal_info: XmlElem<boolean>;
  disp_login: XmlElem<boolean>;
  disp_sex: XmlElem<boolean>;
  disp_desc: XmlElem<boolean>;
  disp_files: XmlElem<boolean>;
  disp_birthdate: XmlElem<boolean>;
  disp_birthdate_year: XmlElem<boolean>;
  disp_resume: XmlElem<boolean>;
  allow_personal_chat_request: XmlElem<boolean>;
  personal_chat_confirmation_required: XmlElem<boolean>;
  development_potential_id: XmlElem<number | null, DevelopmentPotentialCatalogDocumentTopElem>;
  efficiency_estimation_id: XmlElem<number | null, EfficiencyEstimationCatalogDocumentTopElem>;
  web_enter_date: XmlElem<Date | null>;
  category_id: XmlMultiElemObject<string | null, CategoryCatalogDocumentTopElem>;
  change_logs: XmlMultiElem<CollaboratorDocumentChangeLog | null>;
  current_state: XmlElem<string | null>;
  history_states: XmlMultiElem<CollaboratorDocumentHistoryState | null>;
  personal_config: XmlElem<CollaboratorDocumentPersonalConfig | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  last_import_date: XmlElem<Date | null>;
  custom_params: XmlMultiElem<CollaboratorDocumentCustomParam | null>;
  level_id: XmlElem<number | null, LevelCatalogDocumentTopElem>;
  grade_id: XmlElem<number | null, GradeCatalogDocumentTopElem>;
  comp_ben: XmlElem<CollaboratorDocumentCompBen | null>;
  gdpr: XmlElem<boolean>;
  consent_kedo: XmlElem<boolean>;
  consent_kedo_date: XmlElem<Date | null>;
  last_data: XmlElem<CollaboratorDocumentLastData | null>;
  clear_cur_position(): void;
  start_action(type: string): number;
  set_basic_position(positionId: number): boolean;
  get_courses(type: string): (ActiveLearningCatalogDocumentTopElem | LearningCatalogDocumentTopElem)[];
  get_tests(type: string): (ActiveTestLearningCatalogDocumentTopElem | TestLearningCatalogDocumentTopElem)[];
  assign_course(courseId: number, start: Date, end: Date, eventId: number): number;
  assign_test(testId: number, start: Date, end: Date, eventId: number): number;
  get_info(): null | Object;
  get_events(type: string, status: string, roleCollab: string): EventCollaboratorCatalogDocumentTopElem[];
  get_groups(): GroupCollaboratorCatalogDocumentTopElem[];
  get_event_results(): EventResultCatalogDocumentTopElem[];
  update_info(lastname: string, firstname: string, middlename: string, address: string, phone: string, email: string, login: string, password: string): Object;
  clear_subs_fields(): void;
};

type CollaboratorDocument = XmlDocument & {
  TopElem: CollaboratorDocumentTopElem;
  collaborator: CollaboratorDocumentTopElem;
  OnCreate(): void;
  OnSave(): void;
  OnBeforeSave(): void;
  DocDesc(): string;
};

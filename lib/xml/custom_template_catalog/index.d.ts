interface CustomFieldsFieldEntry {
  value: XmlElem<string>;
}

interface CustomFieldsField {
  name: XmlElem<string>;
  type: XmlElem<string, typeof common.template_field_types>;
  title: XmlElem<string>;
  catalog: XmlElem<string, typeof common.exchange_object_types>;
  xquery_qual: XmlElem<string>;
  entries: XmlMultiElem<CustomFieldsFieldEntry>;
  sheet_id: XmlElem<string>;
  disp_web: XmlElem<boolean>;
  is_required: XmlElem<boolean>;
  condition_eval: XmlElem<string>;
  comment: XmlElem<string>;
  default_value_eval: XmlElem<string>;
  width: XmlElem<string>;
  height: XmlElem<string>;
  class: XmlElem<string>;
  max_chars: XmlElem<string>;
  view: XmlElem<ViewConditionsBase>;
}

interface CustomFields {
  fields: XmlMultiElem<CustomFieldsField>;
}

interface CustomTemplateBaseSheet extends AdminAccessBase {
  id: XmlElem<string>;
  title: XmlElem<string>;
}

interface CustomTemplateBase extends CustomFields {
  sheets: XmlMultiElem<CustomTemplateBaseSheet>;
  unique_field_name(): unknown;
}

interface CustomTemplatesDocumentRequest {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentRequestTypeItem {
  id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentRequestType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentRequestTypeItem>;
}

interface CustomTemplatesDocumentResponse {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentResponseTypeItem {
  id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentResponseType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentResponseTypeItem>;
}

interface CustomTemplatesDocumentEventResult {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentEventResultTypeItem {
  id: XmlElem<number, EventResultTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentEventResultType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentEventResultTypeItem>;
}

interface CustomTemplatesDocumentObjectData {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentObjectDataTypeItem {
  id: XmlElem<number, ObjectDataTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentObjectDataType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentObjectDataTypeItem>;
}

interface CustomTemplatesDocumentSubmission {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentSubmissionTypeItem {
  id: XmlElem<number, SubmissionTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentSubmissionType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentSubmissionTypeItem>;
}

interface CustomTemplatesDocumentEventAssessmentPlan {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentPollResult {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentTaskTypeItem {
  id: XmlElem<number, TaskTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentTaskType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentTaskTypeItem>;
}

interface CustomTemplatesDocumentKnowledgePart {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentKnowledgePartTypeItem {
  id: XmlElem<number, KnowledgePartTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentKnowledgePartType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentKnowledgePartTypeItem>;
}

interface CustomTemplatesDocumentChatbotChat {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentChatbotItem {
  id: XmlElem<number, ChatbotCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentChatbot {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentChatbotItem>;
}

interface CustomTemplatesDocumentGood {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentGoodTypeItem {
  id: XmlElem<number, GoodTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentGoodType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentGoodTypeItem>;
}

interface CustomTemplatesDocumentWikiArticle {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentWikiArticleTypeItem {
  id: XmlElem<number, WikiArticleTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentWikiArticleType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentWikiArticleTypeItem>;
}

interface CustomTemplatesDocumentWikiArticleCommunication {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentWikiArticleCommunicationTypeItem {
  id: XmlElem<number, WikiArticleCommunicationTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentWikiArticleCommunicationType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentWikiArticleCommunicationTypeItem>;
}

interface CustomTemplatesDocumentConversation {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentConversationTypeItem {
  id: XmlElem<number, ConversationTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentConversationType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentConversationTypeItem>;
}

interface CustomTemplatesDocumentIntervalSchedule {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentPresenceStateIntervalScheduleItem {
  id: XmlElem<number, PresenceStateCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentPresenceStateIntervalSchedule {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentPresenceStateIntervalScheduleItem>;
}

interface CustomTemplatesDocumentPersonnelDocument {
  template_field: XmlElem<string>;
  template_field_id(): string;
}

interface CustomTemplatesDocumentPersonnelDocumentTypeItem {
  id: XmlElem<number, PersonnelDocumentTypeCatalogDocumentTopElem>;
  title(): string;
}

interface CustomTemplatesDocumentPersonnelDocumentType {
  title(): string;
  items: XmlMultiElem<CustomTemplatesDocumentPersonnelDocumentTypeItem>;
}

type CustomTemplateCatalogDocumentTopElem = XmlTopElem & {
  collaborator: XmlElem<CustomTemplateBase>;
  collaborator_change_log: XmlElem<CustomTemplateBase>;
  group: XmlElem<CustomTemplateBase>;
  position: XmlElem<CustomTemplateBase>;
  position_common: XmlElem<CustomTemplateBase>;
  subdivision: XmlElem<CustomTemplateBase>;
  subdivision_group: XmlElem<CustomTemplateBase>;
  org: XmlElem<CustomTemplateBase>;
  staff_position: XmlElem<CustomTemplateBase>;
  staff_position_start: XmlElem<CustomTemplateBase>;
  staff_position_finish: XmlElem<CustomTemplateBase>;
  staff_position_move: XmlElem<CustomTemplateBase>;
  qualification: XmlElem<CustomTemplateBase>;
  qualification_assignment: XmlElem<CustomTemplateBase>;
  position_family: XmlElem<CustomTemplateBase>;
  region: XmlElem<CustomTemplateBase>;
  salary_survey: XmlElem<CustomTemplateBase>;
  payment: XmlElem<CustomTemplateBase>;
  benefit_item: XmlElem<CustomTemplateBase>;
  resume: XmlElem<CustomTemplateBase>;
  career_reserve: XmlElem<CustomTemplateBase>;
  career_plan: XmlElem<CustomTemplateBase>;
  career_reserve_development_program_task: XmlElem<CustomTemplateBase>;
  personnel_reserve: XmlElem<CustomTemplateBase>;
  course: XmlElem<CustomTemplateBase>;
  active_learning: XmlElem<CustomTemplateBase>;
  learning: XmlElem<CustomTemplateBase>;
  assessment: XmlElem<CustomTemplateBase>;
  active_test_learning: XmlElem<CustomTemplateBase>;
  test_learning: XmlElem<CustomTemplateBase>;
  item: XmlElem<CustomTemplateBase>;
  site: XmlElem<CustomTemplateBase>;
  forum: XmlElem<CustomTemplateBase>;
  forum_entry: XmlElem<CustomTemplateBase>;
  document: XmlElem<CustomTemplateBase>;
  blog: XmlElem<CustomTemplateBase>;
  blog_entry: XmlElem<CustomTemplateBase>;
  blog_entry_comment: XmlElem<CustomTemplateBase>;
  subscription: XmlElem<CustomTemplateBase>;
  budget: XmlElem<CustomTemplateBase>;
  budget_period: XmlElem<CustomTemplateBase>;
  cost_center: XmlElem<CustomTemplateBase>;
  expense_item: XmlElem<CustomTemplateBase>;
  education_org: XmlElem<CustomTemplateBase>;
  education_method: XmlElem<CustomTemplateBase>;
  compound_program: XmlElem<CustomTemplateBase>;
  compound_program_program: XmlElem<CustomTemplateBase>;
  event: XmlElem<CustomTemplateBase>;
  event_type: XmlElem<CustomTemplateBase>;
  lector: XmlElem<CustomTemplateBase>;
  traning_order: XmlElem<CustomTemplateBase>;
  request: XmlElem<CustomTemplatesDocumentRequest>;
  request_type: XmlElem<CustomTemplatesDocumentRequestType>;
  response: XmlElem<CustomTemplatesDocumentResponse>;
  response_type: XmlElem<CustomTemplatesDocumentResponseType>;
  event_result: XmlElem<CustomTemplatesDocumentEventResult>;
  event_result_type: XmlElem<CustomTemplatesDocumentEventResultType>;
  object_data: XmlElem<CustomTemplatesDocumentObjectData>;
  object_data_type: XmlElem<CustomTemplatesDocumentObjectDataType>;
  certificate: XmlElem<CustomTemplateBase>;
  certificate_type: XmlElem<CustomTemplateBase>;
  submission: XmlElem<CustomTemplatesDocumentSubmission>;
  submission_type: XmlElem<CustomTemplatesDocumentSubmissionType>;
  event_assessment_plan: XmlElem<CustomTemplatesDocumentEventAssessmentPlan>;
  doc_type: XmlElem<CustomTemplateBase>;
  poll: XmlElem<CustomTemplateBase>;
  poll_result: XmlElem<CustomTemplatesDocumentPollResult>;
  poll_procedure: XmlElem<CustomTemplateBase>;
  poll_question: XmlElem<CustomTemplateBase>;
  server_agent: XmlElem<CustomTemplateBase>;
  statistic_rec: XmlElem<CustomTemplateBase>;
  education_plan: XmlElem<CustomTemplateBase>;
  education_plan_program: XmlElem<CustomTemplateBase>;
  covenant: XmlElem<CustomTemplateBase>;
  contract: XmlElem<CustomTemplateBase>;
  exchange_server: XmlElem<CustomTemplateBase>;
  assessment_appraise: XmlElem<CustomTemplateBase>;
  competence_profile: XmlElem<CustomTemplateBase>;
  development_plan: XmlElem<CustomTemplateBase>;
  competence: XmlElem<CustomTemplateBase>;
  indicator: XmlElem<CustomTemplateBase>;
  kpi: XmlElem<CustomTemplateBase>;
  kpi_group: XmlElem<CustomTemplateBase>;
  kpi_profile: XmlElem<CustomTemplateBase>;
  kpi_profile_kpi: XmlElem<CustomTemplateBase>;
  kpi_value: XmlElem<CustomTemplateBase>;
  kpi_plan: XmlElem<CustomTemplateBase>;
  scale: XmlElem<CustomTemplateBase>;
  formula: XmlElem<CustomTemplateBase>;
  pa: XmlElem<CustomTemplateBase>;
  assessment_plan: XmlElem<CustomTemplateBase>;
  development_method: XmlElem<CustomTemplateBase>;
  assessment_result_recommend: XmlElem<CustomTemplateBase>;
  task: XmlElem<CustomTemplateBase>;
  task_type: XmlElem<CustomTemplatesDocumentTaskType>;
  bonus_profile: XmlElem<CustomTemplateBase>;
  bonus_item: XmlElem<CustomTemplateBase>;
  knowledge_part: XmlElem<CustomTemplatesDocumentKnowledgePart>;
  knowledge_part_type: XmlElem<CustomTemplatesDocumentKnowledgePartType>;
  chatbot_chat: XmlElem<CustomTemplatesDocumentChatbotChat>;
  chatbot: XmlElem<CustomTemplatesDocumentChatbot>;
  knowledge_classifier: XmlElem<CustomTemplateBase>;
  expert: XmlElem<CustomTemplateBase>;
  expert_question: XmlElem<CustomTemplateBase>;
  book: XmlElem<CustomTemplateBase>;
  article: XmlElem<CustomTemplateBase>;
  library_material: XmlElem<CustomTemplateBase>;
  library_section: XmlElem<CustomTemplateBase>;
  resource: XmlElem<CustomTemplateBase>;
  position_assessment_form: XmlElem<CustomTemplateBase>;
  dn_student: XmlElem<CustomTemplateBase>;
  dn_stud_group: XmlElem<CustomTemplateBase>;
  dn_stream: XmlElem<CustomTemplateBase>;
  dn_work_curriculum: XmlElem<CustomTemplateBase>;
  dn_schedule: XmlElem<CustomTemplateBase>;
  dn_lesson: XmlElem<CustomTemplateBase>;
  dn_control_event: XmlElem<CustomTemplateBase>;
  dn_register: XmlElem<CustomTemplateBase>;
  dn_academ_debt: XmlElem<CustomTemplateBase>;
  dn_discipline: XmlElem<CustomTemplateBase>;
  dn_block_discipline: XmlElem<CustomTemplateBase>;
  dn_program_discipl: XmlElem<CustomTemplateBase>;
  dn_train_method_complex: XmlElem<CustomTemplateBase>;
  transaction: XmlElem<CustomTemplateBase>;
  vacancy: XmlElem<CustomTemplateBase>;
  vacancy_response: XmlElem<CustomTemplateBase>;
  recruitment_plan: XmlElem<CustomTemplateBase>;
  recommendation: XmlElem<CustomTemplateBase>;
  tutor: XmlElem<CustomTemplateBase>;
  exclusion_reason: XmlElem<CustomTemplateBase>;
  talent_pool_nomination: XmlElem<CustomTemplateBase>;
  development_potential: XmlElem<CustomTemplateBase>;
  efficiency_estimation: XmlElem<CustomTemplateBase>;
  risk_perspective: XmlElem<CustomTemplateBase>;
  risk_level: XmlElem<CustomTemplateBase>;
  key_position_threat: XmlElem<CustomTemplateBase>;
  key_position: XmlElem<CustomTemplateBase>;
  readiness_level: XmlElem<CustomTemplateBase>;
  successor: XmlElem<CustomTemplateBase>;
  digital_signature: XmlElem<CustomTemplateBase>;
  project: XmlElem<CustomTemplateBase>;
  project_participant: XmlElem<CustomTemplateBase>;
  good: XmlElem<CustomTemplatesDocumentGood>;
  good_type: XmlElem<CustomTemplatesDocumentGoodType>;
  typical_development_program: XmlElem<CustomTemplateBase>;
  typical_development_program_task: XmlElem<CustomTemplateBase>;
  outstaff_provider: XmlElem<CustomTemplateBase>;
  outstaff_contract: XmlElem<CustomTemplateBase>;
  outstaff_order: XmlElem<CustomTemplateBase>;
  outstaff_order_execution: XmlElem<CustomTemplateBase>;
  outstaff_order_execution_stage: XmlElem<CustomTemplateBase>;
  candidate_status_type: XmlElem<CustomTemplateBase>;
  selected_resume: XmlElem<CustomTemplateBase>;
  vacancy_source: XmlElem<CustomTemplateBase>;
  work_schedule: XmlElem<CustomTemplateBase>;
  estaff_event: XmlElem<CustomTemplateBase>;
  professional_area: XmlElem<CustomTemplateBase>;
  personnel_committee: XmlElem<CustomTemplateBase>;
  committee_member: XmlElem<CustomTemplateBase>;
  provider: XmlElem<CustomTemplateBase>;
  sale_contract: XmlElem<CustomTemplateBase>;
  pay_stage: XmlElem<CustomTemplateBase>;
  sale: XmlElem<CustomTemplateBase>;
  sale_status: XmlElem<CustomTemplateBase>;
  messenger_service: XmlElem<CustomTemplateBase>;
  cl_course: XmlElem<CustomTemplateBase>;
  notification: XmlElem<CustomTemplateBase>;
  notification_template: XmlElem<CustomTemplateBase>;
  order: XmlElem<CustomTemplateBase>;
  learning_task: XmlElem<CustomTemplateBase>;
  learning_task_result: XmlElem<CustomTemplateBase>;
  reprimand: XmlElem<CustomTemplateBase>;
  wiki_base: XmlElem<CustomTemplateBase>;
  wiki_article: XmlElem<CustomTemplatesDocumentWikiArticle>;
  wiki_article_type: XmlElem<CustomTemplatesDocumentWikiArticleType>;
  wiki_article_communication: XmlElem<CustomTemplatesDocumentWikiArticleCommunication>;
  wiki_article_communication_type: XmlElem<CustomTemplatesDocumentWikiArticleCommunicationType>;
  conversation: XmlElem<CustomTemplatesDocumentConversation>;
  conversation_type: XmlElem<CustomTemplatesDocumentConversationType>;
  component_package: XmlElem<CustomTemplateBase>;
  presence_state: XmlElem<CustomTemplateBase>;
  schedule_day: XmlElem<CustomTemplateBase>;
  collaborator_schedule: XmlElem<CustomTemplateBase>;
  mobile_app_config: XmlElem<CustomTemplateBase>;
  contest: XmlElem<CustomTemplateBase>;
  place: XmlElem<CustomTemplateBase>;
  substitution_type: XmlElem<CustomTemplateBase>;
  substitution: XmlElem<CustomTemplateBase>;
  object_link: XmlElem<CustomTemplateBase>;
  recommender_algorithm_applying: XmlElem<CustomTemplateBase>;
  recommender_select_collaborator: XmlElem<CustomTemplateBase>;
  user_recommendation: XmlElem<CustomTemplateBase>;
  repositorium: XmlElem<CustomTemplateBase>;
  object_resource: XmlElem<CustomTemplateBase>;
  training_plan: XmlElem<CustomTemplateBase>;
  interval_schedule: XmlElem<CustomTemplatesDocumentIntervalSchedule>;
  presence_state_interval_schedule: XmlElem<CustomTemplatesDocumentPresenceStateIntervalSchedule>;
  profession: XmlElem<CustomTemplateBase>;
  profession_category: XmlElem<CustomTemplateBase>;
  personnel_document: XmlElem<CustomTemplatesDocumentPersonnelDocument>;
  personnel_document_type: XmlElem<CustomTemplatesDocumentPersonnelDocumentType>;
  estaff_event_type: XmlElem<CustomTemplateBase>;
  license: XmlElem<CustomTemplateBase>;
};

interface XmElem<T> {
  /**
   * Значение XmlElem поля
   */
  Value: T;

  /**
   * Проверка на существование значения у XmlElem
   */
  HasValue: boolean;

  /**
   * Получение связного списка с текущим XmlElem.
   * Если связанного списка не получить, то вызов свойства гененрирует ошибку
   */
  ForeignElem: any;

  OptForeignElem: any;
  Name: string;
  PrimaryKey?: XmlElem<any>;
  Clear(): void;
}

interface XmMultiElem<T> {
  [index: number]: T;
  HasValue: boolean;
  Name: string;
  /**
   * 
   * Добавляет дочерний элемент и возвращает указатель на него.
   * Если текущий элемент создан по форме, то он должен быть простым массивом. При этом аргументы для вызова функции не требуются.
   * Если текущий элемент является динамическим (т.е. построенным без формы), то добавляется дочерний динамический элемент с именем и типом, указанных в качестве аргументов.   

   * @param {string} name - имя дочернего элемента (String). Необязательный аргумент
   * @param {string} type - тип дочернего элемента (String). Необязательный аргумент
   * @returns {XmlElem}
   */
  Add(): any;
  AddChild(name?: string, type?: string): XmlElem<T>;
  ByValueExists(value: any): Boolean;
  Child(index: number): XmlElem<T>;
  GetChildByKey(name: string): any;
  GetOptChildByKey(name: string, defaultValue?: any): any;
  ObtainChildByKey(key: string, value?: any): T;
  ObtainByValue(value: any): T;
  DeleteChildren(condition: string): any;
  DeleteChildByKey(value: any, key: string): any;
  OptChild(name: string): XmlElem<any>;
  AssignElem(element: any): any;
  Clear(): void;
}

type XmlElem<T> = XmElem<T> & T;
type XmlMultiElem<T> = XmMultiElem<T> & T;

interface IWTXmlDocument {
  DocID: number;
  TopElem: IWTXmlDocumentTopElem;
  Save(): undefined;
  BindToDb(): undefined;
  WriteDocInfo: boolean;
}

interface IWTXmlDocumentTopElem {
  Name: string;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  Doc: IWTXmlDocument;
  role_id?: XmlMultiElem<number>;
  doc_info?: XmlElem<IWTDocInfo>;
  OptChild(childName: string): any;
  AssignElem(TopElem: IWTXmlDocumentTopElem): void;
  EvalPath(pathName: string): XmlElem<any> | XmlMultiElem<any> | never;
  tags?: XmlMultiElem<IWTKnowledgePartsBaseTag>;
  access?: XmlElem<IWTAccessDocBase>;
}

interface ObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTAdminAccessBase {
  user_access_role?: XmlElem<string>;
  user_group_id?: XmlElem<number>;
}

interface ObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTVDialogEditTextTopElem extends IWTXmlDocumentTopElem {
  url?: XmlElem<string>;
  desc?: XmlElem<string>;
  title?: XmlElem<string>;
  is_rich?: XmlElem<boolean>;
}
interface IWTDialogNotificationTemplateRecipient {
  recipient_type?: XmElem<string>;
  func_manager_type_id?: XmElem<number>;
  eval_str?: XmElem<string>;
  eval_ids_str?: XmElem<string>;
  notification_template_id?: XmElem<number>;
}

interface IWTDialogNotificationTemplateAttachment {
  name?: XmElem<string>;
  data?: XmElem<string>;
}

interface IWTDialogNotificationTemplateTopElem extends IWTXmlDocumentTopElem {
  subject?: XmElem<string>;
  body?: XmElem<string>;
  body_type?: XmElem<string>;
  notification_template_id?: XmElem<number>;
  sender_selector?: XmElem<number>;
  sender_email?: XmElem<string>;
  recipients?: XmMultiElem<IWTDialogNotificationTemplateRecipient>;
  attachments?: XmMultiElem<IWTDialogNotificationTemplateAttachment>;
  notification_system_id?: XmElem<number>;
}

interface IWTDialogNotificationTemplate extends IWTXmlDocument {
  TopElem: IWTDialogNotificationTemplateTopElem;
}

interface IWTVDialogEditTextDocument extends IWTXmlDocument {
  TopElem: IWTVDialogEditTextTopElem;
}

interface IWTWebVariableBaseWvarEntry {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
}

interface IWTWebVariableBaseWvar {
  name?: XmlElem<string>;
  parent_wvar_name?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
  entries?: Array<IWTWebVariableBaseWvarEntry>;
  description?: XmlElem<string>;
  is_modify?: XmlElem<boolean>;
  position?: XmlElem<number>;
}

interface IWTWebVariablesBase {
  wvars?: Array<IWTWebVariableBaseWvar>;
  wvars_selector?: XmlElem<string>;
  wvars_num?: number;
}

interface IWTViewConditionBase {
  top_elem?: XmlElem<string>;
  field?: XmlElem<string>;
  title?: XmlElem<string>;
  value?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
  and_or?: XmlElem<string>;
  is_multiple?: XmlElem<boolean>;
  value_multiple?: XmlMultiElem<string>;
  bracket?: XmlElem<string>;
}

interface IWTViewConditionsBase {
  conditions?: XmlMultiElem<IWTViewConditionBase>;
  conditions_qual?: XmlElem<string>;
}

interface IWTTypicalDevelopmentProgramTask {
  id: XmlElem<string>;
  name: XmlElem<string>;
  type: XmlElem<string>;
  due_date: XmlElem<number>;
  start_edit_days: XmlElem<number>;
  parent_task_id: XmlElem<string>;
  duration_days: XmlElem<number>;
  desc: XmlElem<string>;
  object_type: XmlElem<string>;
  object_id: XmlElem<number>;
  auto_appoint_learning: XmlElem<boolean>;
  type_document: XmlElem<string>;
  link_document: XmlElem<string>;
  forbid_task_portal_edit: XmlElem<boolean>;
}

interface IWTTypicalDevelopmentProgramTopElem extends IWTXmlDocumentTopElem, IWTDocInfo {
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  tasks?: XmlMultiElem<IWTTypicalDevelopmentProgramTask>;
}

interface IWTTypicalDevelopmentProgramDocument extends IWTXmlDocument {
  TopElem: IWTTypicalDevelopmentProgramTopElem;
}

interface IWTAppointmentTypeTopElem extends IWTXmlDocumentTopElem, ObjectCodeNameBase, IWTAdminAccessBase, IWTDocInfo {
  comment?: XmlElem<string>;
}

interface IWTAppointmentTypeDocument extends IWTXmlDocument {
  TopElem: IWTAppointmentTypeTopElem;
}

interface IWTLearningSection {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
  score?: XmlElem<number>;
}

interface IWTTutorTopElem extends IWTXmlDocumentTopElem,
  IWTPersonFillingBase,
  IWTFileListBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase
{
  code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  career_reserve_type_id?: XmlElem<number>;
  status?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  position_commons?: XmlMultiElem<any>;
  access?: XmlElem<IWTAccessDocBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
}

interface IWTTutorDocument extends IWTXmlDocument {
  TopElem: IWTTutorTopElem;
}

interface IWTTimeZoneTopElem extends IWTXmlDocumentTopElem {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  offset?: XmlMultiElem<XmlElem<number>>;
  is_rus?: XmlMultiElem<XmlElem<boolean>>;
  is_default?: XmlElem<boolean>;
}

interface IWTTimeZoneDocument extends IWTXmlDocument {
  TopElem: IWTTimeZoneTopElem;
}

interface IWTLearningSection {
  id?: XmlElem<string>;
  title?: XmlElem<string>;
  score?: XmlElem<number>;
}

interface IWTTestLearningTopElem extends IWTXmlDocumentTopElem, IWTAnnalsNumsBase, IWTAdminAccessBase, IWTDocInfo, IWTPersonFillingBase {
  id?: XmlElem<number>;
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  group_id?: XmlElem<number>;
  sections?: XmlMultiElem<IWTLearningSection>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  score?: XmlElem<number>;
  text_result?: XmlElem<string>;
  state_id?: XmlElem<number>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  education_plan_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  creation_date?: XmlElem<Date>;
  creation_user_id?: XmlElem<number>;
  modification_date?: XmlElem<Date>;
  modification_user_id?: XmlElem<number>;
  app_instance_id?: XmlElem<string>;
  use_proctoring?: XmlElem<boolean>;
}

interface IWTTestLearningDocument extends IWTXmlDocument {
  TopElem: IWTTestLearningTopElem;
}

interface IWTSubdivisionGroupSubdivisions {
  subdivision_id?: XmlElem<number>;
  subdivision_name?: XmlElem<string>;
}

interface IWTSubdivisionGroupTopElem extends IWTXmlDocumentTopElem, IWTDocInfo, IWTKnowledgePartsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_dynamic?: XmlElem<boolean>;
  subdivisions?: Array<IWTSubdivisionGroupSubdivisions>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  dynamic_select_person?(clearList?: boolean): void;
}

interface IWTSubdivisionGroupDocument extends IWTXmlDocument {
  TopElem: IWTSubdivisionGroupTopElem;
}

interface IWTOutstaffPeriodsBase {
  periods?: XmlMultiElem<any>;
  materials?: XmlMultiElem<any>;
}

interface IWTObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTSubdivisionTopElem extends IWTXmlDocumentTopElem,
  IWTObjectCodeNameBase,
  IWTFileListBase,
  IWTFuncManagersBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTDocumentPersonsBase
{
  org_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;
  is_disbanded?: XmlElem<boolean>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  show_detailed?: XmlElem<boolean>;
  show_children?: XmlElem<boolean>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  formed_date?: XmlElem<Date>;
  disbanded_date?: XmlElem<Date>;
  cost_center_id?: XmlElem<number>;
  is_faculty?: XmlElem<boolean>;
  outstaff?: XmlElem<IWTOutstaffPeriodsBase>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  start_action?(): any
}

interface IWTSubdivisionDocument extends IWTXmlDocument {
  TopElem: IWTSubdivisionTopElem;
}

interface IWTSpxmlUnibridgeConfig {
  appSettings?: XmlMultiElem<XmlElem<any>>;
}

interface IWTSiteTopElem extends IWTXmlDocumentTopElem,
  IWTObjectCodeNameBase,
  IWTFuncManagersBase,
  IWTCustomElemsBase
{
  title?: XmlElem<string>;
  html_header?: XmlElem<string>;
  html_icon_href?: XmlElem<string>;
  web_design_id?: XmlElem<number>;
  lng_id?: XmlElem<string>;
  owner_objects?: XmlMultiElem<any>;
  menus?: XmlMultiElem<any>;
  web_designs?: XmlMultiElem<any>;
  first_unauthorized_url?: XmlElem<string>;
  first_authorized_url?: XmlElem<string>;
  anonym_collaborator_id?: XmlElem<number>;
  anonymous_modes?: XmlMultiElem<any>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  is_std?: XmlElem<boolean>;
}

interface IWTSiteDocument extends IWTXmlDocument {
  TopElem: IWTSiteTopElem;
}

interface IWTSession extends Object {
  Env: IWTEnv;
  sid: number;
}

interface IWTServerAgentTopElem extends IWTXmlDocumentTopElem {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  obj?: XmlElem<any>;
  block?: XmlElem<string>;
  type?: XmlElem<string>;
  run_code_url?: XmlElem<string>;
  run_code?: XmlElem<string>;
  run_agent?(iObjectIDParam: any, sObjectsIDsParam: any, sTenancyNameParam: string, dDateParam: Date): boolean;
  discharge_id?: XmlElem<number>;
  user_assignment_id?: XmlElem<number>;
  import_excel_person_scheme_id?: XmlElem<string>;
  import_excel_id?: XmlElem<number>;
  exchange_server_id?: XmlElem<number>;
  is_std?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  converter?: XmlElem<boolean>;
}

interface IWTServerAgentDocument extends IWTXmlDocument {
  TopElem: IWTServerAgentTopElem;
}

interface ResponseTopElem extends IWTXmlDocumentTopElem {
  code?: XmlElem<string>;
  response_type_id?: XmlElem<number>;
  type?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  is_public?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface ResponseDocument extends IWTXmlDocument {
  TopElem: ResponseTopElem;
}

interface ResponseTypeTopElem extends IWTXmlDocumentTopElem, IWTDocInfo {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  create_redirect?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface ResponseTypeDoument extends IWTXmlDocument {
  TopElem: ResponseTopElem;
}

interface IWTResourceFileUrl {
  id?: XmlElem<string>;
  code?: XmlElem<string>;
  url?: XmlElem<string>;
}
interface IWTResourceLink {
  object_id?: XmlElem<number>;
  object_catalog?: XmlElem<string>;
  object_name?: XmlElem<string>;
  date_modify?: XmlElem<Date>;
}
interface IWTResourceDocumentTopElem extends IWTXmlDocumentTopElem, ObjectCodeNameBase, IWTDocInfo {
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  file_name?: XmlElem<string>;
  allow_download?: XmlElem<boolean>;
  allow_unauthorized_download?: XmlElem<boolean>;
  allow_search?: XmlElem<boolean>;
  file_url?: XmlElem<string>;
  size?: XmlElem<number>;
  use_count?: XmlElem<number>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  file_source?: number;
  resource_type_id?: XmlElem<number>
  file_path?: XmlElem<string>;
  checksum?: XmlElem<string>;
  links?: Array<IWTResourceLink>;
  library_player_id?: XmlElem<number>;
  file_urls?: XmlElem<IWTResourceFileUrl>;

  last_data?: {
    file_name?: XmlElem<string>;
    size?: XmlElem<number>;
  }

  comment?: XmlElem<string>;

  save_data?(): boolean;
  get_data?(url: string): string;
  get_data_add?(sIDParam: number, sUrlParam: string): string;
  download?(oRequest: Request, oResponse: Response): any;
  download_add?(sIDParam: number, oRequest: Request, oResponse: Response): any;
  check_resource_double?(sFileName: string, iSize: number): Object;
  put_data?(_url: string, _source: any): void;
  put_data_add?(sUrlParam: string, sCodeParam: string): void;
  del_data_add?(sIDParam: number): void;
  put_str?(sDataPARAM: string, _filename: string, _source?: any): void;
  add_counter?(source: any): number;
  del_counter?(_source: any, _source_id: number): boolean;
  obtain_link?(_source: any): null | void;
  guess_type?(sFileUrlParam: string): void;
}

interface IWTResourceDocument extends IWTXmlDocument {
  TopElem: IWTResourceDocumentTopElem;
}

interface RequestTopElem extends IWTXmlDocumentTopElem, IWTPersonFillingBase, IWTDocInfo, IWTCustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  request_type_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  type?: XmlElem<string>;
  status_id?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  close_date?: XmlElem<Date>;
  plan_close_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  object_type?: XmlElem<string>;
  is_group?: XmlElem<boolean>;
  workflow_matching_type?: XmlElem<string>;
  workflow_id?: XmlElem<number>;
  workflow_state?: XmlElem<string>;
  workflow_state_name?: XmlElem<string>;
  workflow_state_last_date?: XmlElem<Date>;
  get_workflow_state_name?(workflowTopElem: IWTXmlDocumentTopElem): void;
  set_workflow_state_last_date?(Param: Object): void;
  add_workflow_log_entry?(Param: Object): void;
  is_workflow_init?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
}

interface IWTConditionsBase {
  conditions?: XmlMultiElem<IWTConditionsBase>;
  condition_eval_str?: XmlElem<string>;
  desc_str?: XmlElem<string>;
  has_error?: XmlElem<boolean>;
  warning_str?: XmlElem<string>;
  error_str?: XmlElem<string>;
  is_false?: XmlElem<boolean>;
  error_eval?(): void;
}

interface IWTWorkflowFieldsStatesBaseWorkflowFieldEntry {
  value?: XmlElem<any>;
}
interface IWTWorkflowFieldsStatesBaseWorkflowField {
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  catalog?: XmlElem<string>;
  title?: XmlElem<string>;
  tooltip?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
  entries?: XmlMultiElem<IWTWorkflowFieldsStatesBaseWorkflowFieldEntry>;
  external_value?: XmlElem<string>;
  external_array?: XmlElem<string>;
  field_group_id?: XmlElem<string>;
  is_required?: XmlElem<boolean>;
}

interface IWTWorkflowFieldsStatesBaseState {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  duration?: XmlElem<number>;
  parameters?: XmlElem<string>;
}

interface IWTWorkflowFieldsStatesBase {
  workflow_fields?: XmlMultiElem<IWTWorkflowFieldsStatesBaseWorkflowField>;
  states?: XmlMultiElem<IWTWorkflowFieldsStatesBaseState>;
}

interface IWTWorkflowFieldGroup {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  read_conditions?: IWTConditionsBase;
  write_conditions?: IWTConditionsBase;
}

interface IWTWorkflowElemOperationBase {
  type?: XmlElem<string>;
	workflow_state_id?: XmlElem<string>;
	workflow_field_id?: XmlElem<string>;
	workflow_field_value?: XmlElem<string>;
	request_status_id?: XmlElem<string>;
	eval_str?: XmlElem<string>;
	notification_id?: XmlElem<number>;
	print_form_id?: XmlElem<number>;
}

interface IWTWorkflowElemOperationsBase {
  operations?: XmlMultiElem<IWTWorkflowElemOperationBase>;
}

interface IWTWorkflowAction extends IWTWorkflowElemOperationsBase,
  IWTConditionsBase,
  IWTWorkflowElemOperationsBase
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  is_trigger?: XmlElem<boolean>;
}

interface IWTWorkflowEscalationCourse {
  course_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTWorkflowEscalationAssessment {
  assessment_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTWorkflowEscalationPoll {
  poll_id?: XmlElem<number>;
  status?: XmlElem<number>;
}

interface IWTWorkflowEscalation extends IWTWorkflowElemOperationBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  workflow_state_id?: XmlElem<string>;
  auto_escalation?: XmlElem<boolean>;
  auto_escalation_by_end_date?: XmlElem<boolean>;
  auto_escalation_days?: XmlElem<number>;
  auto_escalation_repeat?: XmlElem<boolean>;
  escalation_eval_str?: XmlElem<string>;
  escalation_eval_negative?: XmlElem<boolean>;
  courses?: XmlMultiElem<IWTWorkflowEscalationCourse>;
  assessments?: XmlMultiElem<IWTWorkflowEscalationAssessment>;
  polls?: XmlMultiElem<IWTWorkflowEscalationPoll>;
}

interface IWTWorkflowTuneFieldTuneFieldChain {
  name?: XmlElem<string>;
  path?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  type?: XmlElem<string>;
  is_multiple?: XmlElem<boolean>;
  pk?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTWorkflowTuneField {
  tune_field_chain: XmlMultiElem<IWTWorkflowTuneFieldTuneFieldChain>;
}

interface IWTWorkflowTopElem extends IWTDocumentTopElem,
  IWTConditionsBase,
  IWTWorkflowFieldsStatesBase,
  IWTDocInfo
{
  id?: XmlElem<number>;
	code?: XmlElem<string>;
	name?: XmlElem<string>;
	add_conditions?: IWTConditionsBase;
  field_groups?: XmlMultiElem<IWTWorkflowFieldGroup>;
  actions?: XmlMultiElem<IWTWorkflowAction>;
	use_triggers?(): boolean;
  escalations?: XmlMultiElem<IWTWorkflowEscalation>;
	default_state?: XmlElem<string>;
	default_action?: XmlElem<string>;
	auto_submit_fields?: XmlElem<boolean>;
	comment?: XmlElem<string>;
	destination_object_name?: XmlElem<string>;
  tune_fields?: XmlMultiElem<IWTWorkflowTuneField>;
	is_std?: XmlElem<boolean>;
	run_action?(actionParam: any): void;
}

interface IWTWorkflowDocument extends IWTXmlDocument {
  TopElem: IWTWorkflowTopElem;
}

interface RequestDocument extends IWTXmlDocument {
  TopElem: RequestTopElem;
}

interface RequestTypeTopElem extends IWTXmlDocumentTopElem, ObjectCodeNameBase, IWTDocInfo {
  object_type?: XmlElem<string>;
  is_group?: XmlElem<boolean>;
  is_can_be_group?: XmlElem<boolean>;
  is_can_be_add_youself?: XmlElem<boolean>;
  hide_portal_comment?: XmlElem<boolean>;
  forbid_rejection?: XmlElem<boolean>;
  forbid_copy?: XmlElem<boolean>;
  boss_only?: XmlElem<boolean>;
  show_all?: XmlElem<boolean>;
  ignore_black_list?: XmlElem<boolean>;
  workflow_id?: XmlElem<number>;
  create_message?: XmlElem<string>;
  use_standart_processing?: XmlElem<boolean>;
  processing_code?: XmlElem<string>;
  reject_processing_code?: XmlElem<string>;
  request_custom_web_template_id?: XmlElem<number>;
  reject_redirect_url?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
}

interface RequestTypeDocument extends IWTXmlDocument {
  TopElem: RequestTypeTopElem;
}

interface IWTRemoteSecutiryProfileMethodAccess {
  access_block_id?: XmlElem<string>;
  library_profile?: XmlElem<string>;
}

interface IWTRemoteSecurityProfileTopElem extends IWTXmlDocumentTopElem {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  method_access_list?: XmlMultiElem<IWTRemoteSecutiryProfileMethodAccess>
}

interface IWTRemoteSecurityProfileDocument extends IWTXmlDocument {
  TopElem: IWTRemoteSecurityProfileTopElem;
}

interface IWTRemoteApplicationCredential {
  id?: XmlElem<number>;
}

interface IWTRemoteApplicationTopElem extends IWTXmlDocumentTopElem, IWTDocInfo {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  app_id?: XmlElem<string>;
  credentials?: XmlMultiElem<IWTRemoteApplicationCredential>;
  category_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTRemoteApplicationDocument extends IWTXmlDocument {
  TopElem: IWTRemoteApplicationTopElem;
}

interface IWTQualificationTopElem extends IWTXmlDocumentTopElem {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  courses?: XmlMultiElem<XmlElem<number>>
  assessments?: XmlMultiElem<XmlElem<number>>
}

interface IWTQualificationDocument extends IWTXmlDocument {
  TopElem: IWTQualificationTopElem;
}

interface IWTQualificationAssignmentLearning {
  learning_id?: XmlElem<number>;
}

interface IWTQualificationAssignmentTestLearning {
  test_learning_id?: XmlElem<number>;
}

interface IWTQualificationAssignmentEducationMethod {
  education_method_id?: XmlElem<number>;
}

interface IWTQualificationAssignmentTopElem extends IWTXmlDocumentTopElem,
  IWTPersonFillingBase,
  IWTFileListBase,
  IWTDocInfo,
  IWTAdminAccessBase,
  IWTCustomElemsBase {
  assignment_date?: XmlElem<Date>;
  expiration_date?: XmlElem<Date>;
  plan_end_date?: XmlElem<Date>;
  reason?: XmlElem<string>;
  status?: XmlElem<string>;
  qualification_id?: XmlElem<number>;
  person_id?: XmlElem<number>;
  event_id?: XmlElem<number>;

  learnings?: XmlElem<IWTQualificationAssignmentLearning>;
  test_learnings?: XmlElem<IWTQualificationAssignmentTestLearning>;
  education_methods?: XmlElem<IWTQualificationAssignmentEducationMethod>;

  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTQualificationAssignmentDocument extends IWTXmlDocument {
  TopElem: IWTQualificationAssignmentTopElem;
}

interface IWTPersonNameBase {
  lastname?: XmlElem<string>;
  firstname?: XmlElem<string>;
  middlename?: XmlElem<string>;
  fullname?(): string;
  shortname?(): string;
}

interface IWTPersonBase extends IWTPersonNameBase {
  sex?: XmlElem<string>;
  birth_date?: XmlElem<Date>;
  address?: XmlElem<string>;
  phone?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  mobile_phone_conf_code?: XmlElem<string>;
  mobile_phone_conf_date?: XmlElem<Date>;
  mobile_phone_conf?: XmlElem<boolean>;
  email?: XmlElem<string>;
  email_conf_code?: XmlElem<string>;
  email_conf_date?: XmlElem<Date>;
  email_conf?: XmlElem<boolean>;
  system_email?: XmlElem<string>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTPassportDataBase {
  passport_type_id?: XmlElem<string>;
  series?: XmlElem<string>;
  num?: XmlElem<string>;
  registration_date?: XmlElem<Date>;
  registration_agency?: XmlElem<string>;
}

declare namespace ms_tools {
  function raise_system_event_env(systemEventIdentificator: string | number, params: any): void;
}

interface IWTMSDialogObjectSelectDocument extends IWTXmlDocument {
  TopElem: IWTMSDialogObjectSelectTopElem;
}

interface IWTWTVDlgEditTextTopElem extends IWTXmlDocumentTopElem {
  url?: XmlElem<string>;
  desc?: XmlElem<string>;
  title?: XmlElem<string>;
  is_rich?: XmlElem<boolean>;
}

interface IWTWTVDlgEditTextDocument extends IWTXmlDocument {
  TopElem: IWTWTVDlgEditTextTopElem;
}

interface IWTMSDialogObjectSelectTopElem extends IWTXmlDocumentTopElem {
  object_id?: XmlElem<number>;
  object_str?: XmlElem<string>;
  object_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  multi_select?: XmlElem<boolean>;
  dialog_title?: XmlElem<string>;
  values?: XmlMultiElem<{
    key?: XmlElem<number>;
    key_str?: XmlElem<string>;
    key_name?: XmlElem<string>;
    org_id?: XmlElem<number>;
  }>;

  catalog_name?: XmlElem<string>;
  xquery_qual?: XmlElem<string>;
}

interface IWTMenu {
  name?: XmlElem<string>;
}

interface IWTListsObjectResourceType {
  id: string;
  name: string;
}

interface IWTListsCurrencyTypeModName {
  id: number;
  name: string;
  cent_name: string;
}

interface IWTListsCurrencyType {
  id: string;
  name: string;
  short_name: string;
  cent_name: string;
  mod_names: Array<IWTListsCurrencyTypeModName>;
}

interface IWTListsEventForm {
  id: string;
  name: string;
}

interface IWTListsOrganizationalForm {
  id: string;
  name: string;
}

interface IWTListsFactColumn {
  id: string;
  name: string;
  query_name: string;
  title: string;
}

interface IWTListsFactExtraColumn {
  id: number;
  name: string;
  title: string;
}

interface IWTListsFact {
  id: number;
  name: string;
  type: number;
  catalog: string;
  columns: Array<IWTListsFactColumn>;
  extra_columns: Array<IWTListsFactExtraColumn>;
}

interface IWTListsProfessionalArea {
  id: string;
  name: string;
}

interface IWTListsWebRequirement {
  id: string;
  name: string;
  is_std: boolean;
}

interface IWTListsExternalScript {
  id: string;
  source_url: string;
}

interface lists extends Object {
  object_resource_types: Array<IWTListsObjectResourceType>;
  currency_types: Array<IWTListsCurrencyType>;
  event_forms: Array<IWTListsEventForm>;
  organizational_forms: Array<IWTListsOrganizationalForm>;
  facts: Array<IWTListsFact>;
  professional_areas: Array<IWTListsProfessionalArea>;
  web_requirements: Array<IWTListsWebRequirement>;
  ext_externalscripts: Array<IWTListsExternalScript>;
}

declare var lists: lists;

interface IWTLibraryMaterialDocument extends IWTXmlDocument {
  TopElem: IWTLibraryMaterialTopElem;
}

interface IWTLibraryMaterialFormat {
  library_material_format_id?: XmlElem<number>;
  number?: XmlElem<number>;
}

interface IWTLibraryMaterialGroup {
  group_id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface IWTLibraryMaterialSubscribedPerson {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
}

interface IWTLibraryMaterialPathSection {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface IWTLibraryMaterialTopElem extends IWTXmlDocumentTopElem {
  name?: XmlElem<string>;
  author?: XmlElem<string>;
  publisher?: XmlElem<string>;
  section_id?: XmlElem<number>;
  library_system_id?: XmlElem<number>;
  number?: XmlElem<string>;
  library_material_type_id?: XmlElem<number>;
  library_material_formats?: Array<IWTLibraryMaterialFormat>;
  year?: XmlElem<number>;
  isbn?: XmlElem<string>;
  state_id?: XmlElem<number>;
  file_name?: XmlElem<number>;
  online_video_prepared?: XmlElem<boolean>;
  use_old_format?: XmlElem<boolean>;
  online_video_quality?: XmlElem<string>;
  allow_download?: XmlElem<boolean>;
  allow_self_viewing?: XmlElem<boolean>;
  image?: XmlElem<number>;
  description?: XmlElem<string>;
  contents?: XmlElem<string>;
  is_need_admin_approval?: XmlElem<boolean>;
  is_closed?: XmlElem<boolean>;
  groups?: Array<IWTLibraryMaterialGroup>;
  subscribed_persons?: Array<IWTLibraryMaterialSubscribedPerson>;
  external_id?: XmlElem<string>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  old_id?: XmlElem<number>;
  path_sections?: Array<IWTLibraryMaterialPathSection>;
  comment?: XmlElem<string>;

  filling_path_sections?(): Array<IWTLibraryMaterialPathSection>;
}

interface IWTLearningTopElem
  extends
  IWTDocumentTopElem,
  IWTPersonFillingBase,
  IWTDocInfo,
  IWTCustomElemsBase,
  IWTAdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  course_id?: XmlElem<number>;
  course_name?: XmlElem<string>;
  course_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  event_name?: XmlElem<string>;
  event_start_date?: XmlElem<Date>;
  group_id?: XmlElem<number>;
  education_plan_id?: XmlElem<number>;

  parts?: [{
    part?: IWTLearningPartBase
  }]

  no_encoding_core_lesson?: XmlElem<boolean>;
  time?: XmlElem<number>;

  events?: [{
    event_id?: XmlElem<number>;
    score?: XmlElem<number>;
  }]

  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  is_self_enrolled?: XmlElem<boolean>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  base_url?: XmlElem<string>;
  score?: XmlElem<number>;
  text_result?: XmlElem<string>;
  state_id?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  active_learning_deleted?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface IWTLearningDocument extends IWTXmlDocument {
  TopElem: IWTLearningTopElem;
}

interface IWTLearningTaskExpert extends IWTPersonFillingBase {
  id?: XmlElem<string>;
}

interface IWTLearningTaskTopElem extends
  IWTXmlDocumentTopElem,
  ObjectCodeNameBase,
  IWTFileListBase {
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  yourself_start?: XmlElem<boolean>;
  desc?: XmlElem<string>;
  experts?: Array<IWTLearningTaskExpert>;
}

interface IWTLearningTaskDocument extends IWTXmlDocument {
  TopElem: IWTLearningTaskTopElem;
}

type IWTLectorTypes = "invitee" | "collaborator"

interface IWTLectorTopElem extends
  IWTXmlDocumentTopElem,
  IWTPersonBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase,
  IWTDocInfo,
  ObjectCodeNameBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  type?: XmlElem<IWTLectorTypes>;
  resource_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  person_position_name?: XmlElem<string>;
  person_subdivision_name?: XmlElem<string>;
  allow_publication?: XmlElem<boolean>;
  is_dismiss?: XmlElem<boolean>;
  lector_fullname?: XmlElem<string>;
}

declare interface IWTLectorDocument extends IWTXmlDocument {
  TopElem: IWTLectorTopElem;
}

declare interface IWTLearningTaskResultTopElem extends
  IWTXmlDocumentTopElem,
  IWTPersonFillingBase,
  IWTFileListBase,
  IWTCustomElemsBase
{
  learning_task_id?: XmlElem<number>;
  learning_task_name?: XmlElem<string>;
  person_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  answer?: XmlElem<string>;
  expert_id?: XmlElem<number>;
  expert_comment?: XmlElem<string>;
  mark?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  plan_start_date?: XmlElem<Date>;
  plan_end_date?: XmlElem<Date>;
}

interface IWTLearningTaskResultDocument extends IWTXmlDocument {
  TopElem: IWTLearningTaskResultTopElem;
}

interface IWTLearningPartBase extends IWTCoreLessonInfoBase, IWTCoreLessonBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  parent_part_code?: XmlElem<string>;
  course_module_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
  lesson_location?: XmlElem<string>;
  score?: XmlElem<number>;
  score_str?: XmlElem<string>;
  start_usage_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  cur_attempt_num?: XmlElem<number>;
  use_proctoring?: XmlElem<boolean>;
  logs?: [{
    date?: XmlElem<Date>;
    location?: XmlElem<string>;
    type?: XmlElem<string>;
    text?: XmlElem<string>;
    log?: XmlElem<string>;
    comment?: XmlElem<string>;
  }];
  statements?: [{
    statement_id?: XmlElem<number>;
    activity_state_id?: XmlElem<number>;
    score?: XmlElem<number>;
  }];
}

interface IWTLearningCurrentStateBase {
  cur_score?: XmlElem<number>;
  cur_score_str?: XmlElem<string>;
  cur_state_id?: XmlElem<number>;
}

interface IWTLearningAssessmentBase extends IWTAnnalsObjectsBase {
  assessment_id?: XmlElem<number>;
  assessment_name?: XmlElem<string>;
  assessment_code?: XmlElem<string>;
  qti_text?: XmlElem<string>;
  qti_date?: XmlElem<Date>;
  expert_eval?: XmlElem<boolean>;
  adaptive_eval?: XmlElem<boolean>;
  is_self_enrolled?: XmlElem<boolean>;
}

interface IWTLastAttemptTestLearningsBaseTestLearning {
  test_learning_id?: XmlElem<number>;
  state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  start_usage_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
}

interface IWTLastAttemptTestLearningsBase {
  test_learnings?: Array<IWTLastAttemptTestLearningsBaseTestLearning>;
}

interface IWTKnowledgePartsBaseTag {
  tag_id: XmlElem<number>;
  tag_name: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface IWTKnowledgePartsBaseExpert {
  expert_id: XmlElem<number>;
}

interface IWTKnowledgePartsBaseKnowledgePart {
  knowledge_part_id: XmlElem<number>;
  knowledge_part_name: XmlElem<string>;
  knowledge_part_level_id: XmlElem<number>;
  full_path: XmlElem<string>;
  desc: XmlElem<string>;
  require_acknowledgement: XmlElem<boolean>;
}

interface IWTKnowledgePartsFieldsBase {
  knowledge_parts?: XmlMultiElem<IWTKnowledgePartsBaseKnowledgePart>;
}

interface IWTKnowledgePartsBase extends IWTKnowledgePartsFieldsBase {
  tags?: XmlMultiElem<IWTKnowledgePartsBaseTag>;
  experts?: XmlMultiElem<IWTKnowledgePartsBaseExpert>;
  acquaint_time?: XmlElem<number>;
  previous_version_object_id?: XmlElem<number>;
  status_in_knowledge_map?: XmlElem<string>;
  kp_start_date?: XmlElem<Date>;
  kp_end_date?: XmlElem<Date>;
  view_knowledge_classifier_id?: XmlElem<number>;
}

interface IWTKnowledgePartsBaseOld {
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
}

interface IWTPersonForeignBase {
	person_fullname?(): any;
	person_position_name?(): any;
	person_org_name?(): any;
	person_subdivision_name?(): any;
	person_instance_id?(): any;
	person_code?(): any;
}

interface IWTGroupCollaborator extends IWTPersonForeignBase {
  collaborator_id?: XmlElem<number>;
  collaborator_fullname?: XmlElem<string>;
  desc?: XmlElem<string>;
}

interface IWTRequirementsBase {
  requirements?: XmlMultiElem<any>;
  certificate_types?: XmlMultiElem<any>;
  compound_programs?: XmlMultiElem<any>;
  education_methods?: XmlMultiElem<any>;
  obligatory_education_amount?: XmlElem<number>;
  education_period?: XmlElem<number>;
  typical_development_programs?: XmlMultiElem<any>;
  qualifications?: XmlMultiElem<any>;
  assessments?: XmlMultiElem<any>;
  recomended_library_materials?: XmlMultiElem<any>;
  professional_areas?: XmlMultiElem<any>;
  educ_type_id?: XmlElem<string>;
  education_type_id?: XmlElem<number>;
  age_min?: XmlElem<number>;
  age_max?: XmlElem<number>;
  experience_in_company?: XmlElem<number>;
  experience_in_current_position?: XmlElem<number>;
}

interface IWTGroupTopElem extends IWTXmlDocumentTopElem,
  IWTObjectCodeNameBase,
  IWTEducGroupsBase,
  IWTFuncManagersBase,
  IWTCustomElemsBase,
  IWTDocumentPersonsBase,
  IWTRequirementsBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTViewConditionsBase,
  IWTPersonObjectLinksBase
{
  show_detailed?: XmlElem<boolean>;
  is_dynamic?: XmlElem<boolean>;
  is_educ?: XmlElem<boolean>;
  is_hidden?: XmlElem<boolean>;
  allow_social_post?: XmlElem<boolean>;
  collaborators?: XmlMultiElem<IWTGroupCollaborator>;
  person_num?(): any
  forum_id?: XmlElem<number>;
  kpi_profile_id?: XmlElem<number>;
  bonus_profile_id?: XmlElem<number>;
  schedule_type_id?: XmlElem<number>;
  join_mode?: XmlElem<string>;
  default_request_type_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  access?: XmlElem<IWTAccessDocBase>;
  desc?: XmlElem<string>;
  dynamic_select_person?(_clear_list: any): any
  start_action?(_item_name: any): any
  activateCourseToPersons?(oInputParam: any): any
  add_collaborator?(iPersonIdParam: number, docPersonParam?: any): any
  remove_collaborator?(iPersonIdParam: number): any
  role_id?: XmlMultiElem<number>;
}

interface IWTEducGroupsBaseEducGroup {
  group_id?: XmlElem<string>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  place_id?: XmlElem<number>;
  conversation_id?: XmlElem<number>;
  collaborators?: XmlMultiElem<any>;
  lectors?: XmlMultiElem<any>;
}

interface IWTEducGroupsBase {
  educ_groups?: XmlMultiElem<IWTEducGroupsBaseEducGroup>;
}

interface IWTGroupDocument extends IWTXmlDocument {
  TopElem: IWTGroupTopElem;
}

interface IWTGameBonusBaseGameBonus {
  id?: XmlElem<string>;
  currency_type_id?: XmlElem<string>;
  sum?: XmlElem<number>;
}

interface IWTGameBonusBase {
  game_bonuss?: Array<IWTGameBonusBaseGameBonus>;
}

interface IWTFileBase {
  file_id?: XmlElem<number>;
}

interface IWTFileListBase {
  files?: XmlMultiElem<IWTFileBase>;
  AddFile?(_file_id: number, docResourceParam: IWTResourceDocument): boolean;
}

interface IWTFieldNamesBaseFieldName extends IWTFieldNamesBase {
  level?: XmlElem<number>;
  field_names?: Array<IWTFieldNamesBaseFieldName>;
}

interface IWTFieldNamesBase {
  field_names?: Array<IWTFieldNamesBaseFieldName>;
}

interface IWTEventPhaseCollaborator {
  collaborator_id: XmlElem<number>;
  is_assist: XmlElem<boolean>;
}

interface IWTEventPhase {
  id: XmlElem<string>;
  lector_id: XmlElem<number>;
  object_resource_id: XmlElem<number>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  comment: XmlElem<string>;
  reserve_desc: XmlElem<string>;
  collaborators: Array<IWTEventPhaseCollaborator>;
}
interface IWTEventLearningTask {
  learning_task_id: XmlElem<number>;
}
interface IWTEventLibraryMaterial {
  library_material_id: XmlElem<number>;
}

interface IWTEventFile {
  file_id: XmlElem<number>;
  presentation_id: XmlElem<number>;
  visibility: XmlElem<string>;
}

interface IWTEventExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
  unnamed_person_sum: XmlElem<number>;
  total_sum: XmlElem<number>;
}

interface IWTEventContract {
  code: XmlElem<string>;
  date: XmlElem<Date>;
  legal_entity_name: XmlElem<string>;
  legal_entity_code: XmlElem<string>;
  desc: XmlElem<string>;
}

interface IWTEventObjectResource {
  object_resource_id: XmlElem<number>;
}

interface IWTEventTutor extends IWTPersonFillingBase {
  collaborator_id: XmlElem<number>;
  telephone_out: XmlElem<string>;
  telephone_in: XmlElem<string>;
  main: XmlElem<boolean>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
}

interface IWTEventGroup {
  group_id: XmlElem<number>;
}

interface IWTEventEvenPreparations {
  even_preparation_id: XmlElem<string>;
  person_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
  plan_date: XmlElem<Date>;
  fact_date: XmlElem<Date>;
  status_id: XmlElem<string>;
  comment: XmlElem<string>;
  comment_person: XmlElem<string>;
}

interface IWTEventUnnamedPersonByOrgs {
  org_id: XmlElem<number>;
  org_name: XmlElem<string>;
  unnamed_person_num: XmlElem<number>;
  collaborator_id: XmlElem<number>;
  person_fullname: XmlElem<string>;
}

interface IWTExpenseItem {
  expense_item_id: XmlElem<number>;
  sum: XmlElem<number>;
}

interface IWTEventCollaborator extends IWTPersonFillingBase {
  collaborator_id: XmlElem<number>;
  last_exist_date: XmlElem<Date>;
  education_plan_id: XmlElem<number>;
  request_person_id: XmlElem<number>;
  active_test_learning_id: XmlElem<number>;
  controller_code: XmlElem<string>;
  webinar_url: XmlElem<string>;
  participation_id: XmlElem<string>;
  expense_items: XmlElem<IWTExpenseItem>;
  cost_center_id: XmlElem<number>;
  total_sum: XmlElem<number>;
  not_pay: XmlElem<boolean>;
  can_use_camera: XmlElem<boolean>;
  can_use_microphone: XmlElem<boolean>;
  current_state: XmlElem<string>;
  edu_group_name: XmlElem<string>;
}

interface IWTEventForm {
  form_id: XmlElem<string>;
}

interface IWTEventStage {
  stage_id: XmlElem<number>;
  parent_id: XmlElem<number>;
  name: XmlElem<string>;
  start_date: XmlElem<Date>;
  finish_date: XmlElem<Date>;
  is_active: XmlElem<boolean>;
}

declare interface IWTEventLector {
  lector_id: XmlElem<number>;
}

interface IWTEventSettingsBase {
  event_settings?: {
    send_type?: XmlElem<string>;
    send_collaborators?: XmlElem<boolean>;
    send_bosses?: XmlElem<boolean>;
    send_lectors?: XmlElem<boolean>;
    send_tutors?: XmlElem<boolean>;
    send_event_preparations?: XmlElem<boolean>;
    show_result_fields?: XmlElem<boolean>;
  }
}

interface IWTEventTopElem extends IWTXmlDocumentTopElem, IWTCustomElemsBase, IWTKnowledgePartsBase, IWTEventSettingsBase {
  /** ID мероприятия */
  id?: XmlElem<number>;
  /** Код мероприятия */
  code?: XmlElem<string>;
  /** Название мероприятия */
  name?: XmlElem<string>;
  /** ID ресурса мероприятия */
  resource_id?: XmlElem<number>;
  /** Код типа мероприятия */
  type_id?: XmlElem<string>;
  /** ID типа мероприятия */
  event_type_id?: XmlElem<number>;
  /** Дата начала мероприятия */
  start_date?: XmlElem<Date>;
  /** Дата окончания мероприятия */
  finish_date?: XmlElem<Date>;
  /** Является ли мероприятия эталонным */
  is_model?: XmlElem<boolean>;
  is_room?: XmlElem<boolean>;
  /** ID расположения мероприятия */
  place_id?: XmlElem<number>;
  /** Название места проведения мероприятия */
  place?: XmlElem<string>;
  cost?: XmlElem<string>;
  lectors?: XmlMultiElem<IWTEventLector>;
  cost_type?: XmlElem<string>;
  vclass_host?: XmlElem<string>;
  use_camera_capture?: XmlElem<boolean>;
  login_with_camera_only?: XmlElem<boolean>;
  capture_rate?: XmlElem<number>;
  record_status?: XmlElem<string>;
  record_exists?: XmlElem<boolean>;
  record_id?: XmlElem<number>;
  record_date?: XmlElem<Date>;
  record_download_count?: XmlElem<number>;
  record_view_count?: XmlElem<number>;
  bandwidth?: XmlElem<number>;
  use_record_camera_capture?: XmlElem<boolean>;
  view_with_camera_only?: XmlElem<boolean>;
  record_capture_rate?: XmlElem<number>;
  current_presentation_id?: XmlElem<number>;
  webinar_system_id?: XmlElem<number>;
  use_vclass?: XmlElem<boolean>;
  vclass_setting_id?: XmlElem<number>;
  show_record?: XmlElem<boolean>;
  allow_record_download?: XmlElem<boolean>;
  use_reserve_server?: XmlElem<boolean>;
  compound_program_id?: XmlElem<number>;
  education_program_id?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  program_id?: XmlElem<number>;
  create_compound_program_id?: XmlElem<number>;
  training_plan_id?: XmlElem<number>;
  education_org_id?: XmlElem<number>;
  education_org_type?: XmlElem<string>;
  education_org_name?: XmlElem<string>;
  course_id?: XmlElem<number>;
  forum_id?: XmlElem<number>;
  chat_id?: XmlElem<number>;
  poll_id?: XmlElem<number>;
  status_id?: XmlElem<string>;
  is_public?: XmlElem<boolean>;
  is_open?: XmlElem<boolean>;
  allow_guest_login?: XmlElem<boolean>;
  is_open_case?: XmlElem<boolean>;
  public_answers?: XmlElem<boolean>;
  duration_plan?: XmlElem<number>;
  duration_days_plan?: XmlElem<number>;
  duration_fact?: XmlElem<number>;
  duration_days_fact?: XmlElem<number>;
  max_person_num?: XmlElem<number>;
  min_person_num?: XmlElem<number>;
  person_num?(): number;
  assist_person_num?(): number;
  course_finished?: XmlElem<number>;
  course_process?: XmlElem<number>;
  course_started?: XmlElem<number>;
  course_began?: XmlElem<number>;
  test_finished?: XmlElem<number>;
  test_process?: XmlElem<number>;
  test_started?: XmlElem<number>;
  test_began?: XmlElem<number>;
  tutor_main?: XmlElem<string>;
  contract_id?: XmlElem<number>;
  organizational_form?: XmlElem<string>;
  event_form?: XmlElem<string>;
  event_forms?: Array<IWTEventForm>;
  stages?: Array<IWTEventStage>;
  org_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  collaborators?: XmlMultiElem<IWTEventCollaborator>;
  group_educ_group_id?: XmlElem<string>;
  unnamed_person_by_orgs?: Array<IWTEventUnnamedPersonByOrgs>;
  unnamed_person_num?: XmlElem<number>;
  unnamed_person_sum?: XmlElem<number>;
  group_formed?: XmlElem<boolean>;
  quota_org?: XmlElem<number>;
  quota_subdivision?: XmlElem<number>;
  quota_person?: XmlElem<number>;
  even_preparations?: XmlMultiElem<IWTEventEvenPreparations>;
  groups?: Array<IWTEventGroup>;
  tutors?: XmlMultiElem<IWTEventTutor>;
  object_resources?: Array<IWTEventObjectResource>;
  total_cost?: XmlElem<number>;
  total_cost_plan?: XmlElem<number>;
  contracts?: Array<IWTEventContract>;
  cost_center_id?: XmlElem<number>;
  cost_center_type?: XmlElem<string>;
  default_cost_center_id?: XmlElem<number>;
  distribute_cost_type?: XmlElem<string>;
  expense_items?: Array<IWTEventExpenseItem>;
  budget_period_id?: XmlElem<number>;
  files?: Array<IWTEventFile>;
  library_materials?: Array<IWTEventLibraryMaterial>;
  learning_tasks?: Array<IWTEventLearningTask>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  default_request_type_id?: XmlElem<number>;
  use_object_workflow?: XmlElem<boolean>;
  default_event_result_type_id?: XmlElem<number>;
  main_material_url?: XmlElem<string>;
  main_material_width?: XmlElem<string>;
  main_material_height?: XmlElem<string>;
  use_video?: XmlElem<boolean>;
  video_url?: XmlElem<string>;
  video_login?: XmlElem<string>;
  video_password?: XmlElem<string>;
  use_audio?: XmlElem<boolean>;
  audio_url?: XmlElem<string>;
  audio_channel_login?: XmlElem<string>;
  audio_channel_password?: XmlElem<string>;
  audio_login?: XmlElem<string>;
  audio_password?: XmlElem<string>;
  date_request_begin?: XmlElem<Date>;
  date_request_over?: XmlElem<Date>;
  date_request_rejection_over?: XmlElem<Date>;
  parent_event_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  phases?: XmlMultiElem<IWTEventPhase>;
  disp_collaborator_phase_presence?: XmlElem<boolean>;
  disp_persons_for_all?: XmlElem<boolean>;
  has_lector_appraise?: XmlElem<boolean>;
  has_lector_comp?: XmlElem<boolean>;
  has_lector_quest?: XmlElem<boolean>;
  lector_restype?: XmlElem<number>;
  lector_date_start?: XmlElem<Date>;
  has_self_appraise?: XmlElem<boolean>;
  has_self_comp?: XmlElem<boolean>;
  has_self_quest?: XmlElem<boolean>;
  self_restype?: XmlElem<number>;
  self_date_start?: XmlElem<Date>;
  has_manager_appraise?: XmlElem<boolean>;
  has_manager_comp?: XmlElem<boolean>;
  has_manager_quest?: XmlElem<boolean>;
  manager_restype?: XmlElem<number>;
  manager_date_start?: XmlElem<Date>;
  disp_all_assessment_plan?: XmlElem<boolean>;
  AddFile?(resourceId: number, resourceDocument?: IWTResourceDocument): void;
  get_chat_messages?(dtLastMessageParam: string | Date): Array<any>;
  send_chat_message?(sTextParam: string, sFullnameParam: string): boolean;
  set_status?(sNewStatusParam: string, bSendNotificationsParam: boolean, oScreenParam: Object): IWTEventDocument;
  send_notifications?(sSendTypeParam: string): boolean;
  create_results?(): any;
  change_tutor_list?(): any;
  change_even_preparation_list?(): any;
  change_lector_list?(): any;
  obtain_collaborator?(_person_id: any, _person_doc?: IWTCollaboratorTopElem): any;
  add_group?(_group_id: any): any;
  get_workflow_id?(): any;
  create_certificate?(_type_id: any, _type_doc: any): any;
  start_action?(sTypeParam: any): any;
  clear_elems?(): any;
  activate_test?(_test_id: any, _test_doc: any, _duration: any, _start_learning_date: any, _last_learning_date: any, sActTypeParam: any, bSkipDismissed: any): any;
  assign_qualification?(_qualification_id: any, _assignment_date: any, _expiration_date: any, _send_mail: any): any;
  check_request_quote?(_request_id: any, _request_doc: any): any;
  create_event_phases?(): any;
  filling_event_phases?(): any;
  distribute_cost_centers?(): any;
  distribute_total_cost?(): any;
  obtain_pay_phases?(): any;
  save_distributed_total_cost?(_result_array: any): any;
  calc_duration_plan?(): any;
  update_event_results?(): any;
  addPerson?(oInputParam: any): any;
  delPerson?(oInputParam: any): any;
  changeTutorList?(oInputParam: any): any;
  get_info?(): any;
  remove_collaborator?(iPersonIdParam: any): any;
  get_webinar_admin_template?(): any;
  get_webinar_setting?(sSettingNameParam: any): any;
  call_webinar_system_method?(sMethodNameParam: any, oParams: any, bReloadDocument: any): any;
  set_webinar_setting?(sSettingNameParam: any, sSettingValueParam: any, sSettingTypeParam: any): any;
  get_webinar_url?(iUserIdParam: any, sUrl: any): any;
  get_webinar_record_url?(sCurrentHostParam: any): any;
  get_webinar_record_download_url?(sCurrentHostParam: any): any;
}

interface IWTEventDocument extends IWTXmlDocument {
  TopElem: IWTEventTopElem;
}

interface IWTEventResultTopElem extends IWTXmlDocumentTopElem, IWTDocInfo {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  event_id?: XmlElem<number>;
  event_name?: XmlElem<string>;
  event_start_date?: XmlElem<Date>;
  status_id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  event_result_type_id?: XmlElem<number>;
  is_assist?: XmlElem<boolean>;
  is_confirm?: XmlElem<boolean>;
  is_banned?: XmlElem<boolean>;
  not_participate?: XmlElem<boolean>;
  last_sending_date?: XmlElem<Date>;
  last_webinar_activity_date?: XmlElem<Date>;
  webinar_activity_time?: XmlElem<number>;
  is_open?: XmlElem<boolean>;
  score?: XmlElem<number>;
  tutor_comment?: XmlElem<string>;
  collaborator_comment?: XmlElem<string>;
  not_pay?: XmlElem<boolean>;
  default_cost_center_id?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  object_resource_id?: XmlElem<number>;
  certificate_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTEventResultDocument extends IWTXmlDocument {
  TopElem: IWTEventResultTopElem;
}

interface IWTEnv {
  /**
   * Текущий сайт пользователя с которым он взаимодействует
   */
  curSite: IWTSiteDocument;
  /**
   * ID текущего пользователя
   */
  curUserID: number;
  /**
   * Объект пользователя
   */
  curUser: IWTCollaboratorTopElem;
}

interface IWTEducationPlanProgramLearningTask {
  learning_task_id?: XmlElem<number>;
}

interface IWTEducationPlanProgramAssessment {
  assessment_id?: XmlElem<number>;
}

interface IWTEducationPlanNotification {
  notification_template_id?: XmlElem<number>
  subject?: XmlElem<string>
  body?: XmlElem<string>
  body_type?: XmlElem<string>
  edit_notification?: XmlElem<boolean>
}

interface IWTEducationPlanCompletedParentProgram {
  program_id?: XmlElem<number>;
}

interface IWTEducationPlanProgramResult {
  person_id?: XmlElem<number>
  type?: XmlElem<string>
  date?: XmlElem<Date>
}

interface IWTEducationPlanProgram {
  id?: XmlElem<number>
  name?: XmlElem<string>
  parent_progpam_id?: XmlElem<number>
  education_method_id?: XmlElem<number>
  education_program_id?: XmlElem<number>
  start_learning_tasks?: Array<IWTEducationPlanProgramLearningTask>;
  start_assessments?: Array<IWTEducationPlanProgramAssessment>;
  finish_learning_tasks?: Array<IWTEducationPlanProgramLearningTask>;
  finish_assessments?: Array<IWTEducationPlanProgramAssessment>;
  finish_notifiation?: IWTEducationPlanNotification;
  start_notifiation?: IWTEducationPlanNotification;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  create_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  result_type?: XmlElem<string>
  result_object_id?: XmlElem<number>
  result_object_name?: XmlElem<string>
  result_object_code?: XmlElem<string>
  result_object_start_date?: XmlElem<Date>
  result_object_finish_date?: XmlElem<Date>
  state_id?: XmlElem<number>;
  tutor_id?: XmlElem<number>;
  weight?: XmlElem<number>;
  readiness_percent?: XmlElem<number>;
  start_type?: XmlElem<string>;
  mark?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  learning_id?: XmlElem<number>;
  request_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  required?: XmlElem<boolean>;
  completed_parent_programs?: Array<IWTEducationPlanCompletedParentProgram>;
  program_results?: Array<IWTEducationPlanProgramResult>;
}

interface IWTEducationPlanTopElem extends
  IWTXmlDocumentTopElem,
  IWTDocInfo,
  ObjectCodeNameBase,
  IWTPersonFillingBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase {
  group_id?: XmlElem<number>;
  compound_program_id?: XmlElem<number>;
  type?: XmlElem<string>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  tutor_id?: XmlElem<number>;
  update_status_and_activity?: XmlElem<boolean>;
  create_date?: XmlElem<Date>
  finish_date?: XmlElem<Date>
  last_activity_date?: XmlElem<Date>
  plan_date?: XmlElem<Date>
  mark?: XmlElem<number>
  event_id?: XmlElem<number>
  readiness_percent?: XmlElem<number>;
  state_id?: XmlElem<number>;
  last_state_id?: XmlElem<number>;
  programs?: XmlMultiElem<IWTEducationPlanProgram>;
  calculate_state_id?(): number;
  development_plan_id?: XmlElem<number>;
  budget_period_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  calculateMark?(): IWTEducationPlanDocument;
}

interface IWTEducationPlanDocument extends IWTXmlDocument {
  TopElem: IWTEducationPlanTopElem;
}

interface IWTEducationMethodTopElem extends IWTXmlDocumentTopElem, IWTCustomElemsBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  desc?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
}

interface IWTEducationMethodDocument extends IWTXmlDocument {
  TopElem: IWTEducationMethodTopElem;
}

interface IWTDotnetCoreHost {
  Object?: {
    GetAssembly(libName: string): {
      CallClassStaticMethod(className: string, methodName: string, arguments: Array<any>, single?: boolean, wait?: boolean, max_run_time?: number): any;
      CreateClassObject(classObject: string): any;
    };
  };
}

interface IWTDocumentAttributesBase {
  template?: XmlElem<string>;
  position?: XmlElem<number>;
  is_link?: XmlElem<boolean>;
  link_href?: XmlElem<string>;
  link_target?: XmlElem<string>;
  permit_subscription?: XmlElem<boolean>;
}

interface IWTDocumentAttribute extends IWTDocumentAttributesBase {
  is_menu?: XmlElem<boolean>;
  is_main_item?: XmlElem<boolean>;
  is_news?: XmlElem<boolean>;
  left_disp_childs?: XmlElem<boolean>;
  no_disp_childs?: XmlElem<boolean>;
}

interface IWTDocumentTopElem extends IWTXmlDocumentTopElem,
  ObjectCodeNameBase,
  IWTCatalogListBase,
  IWTFileListBase,
  IWTWebVariablesBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTGameBonusBase,
  IWTCatalogListBase,
  IWTDocumentPersonsBase,
  IWTDocInfo {
  create_date?: XmlElem<Date>;
  parent_document_id?: XmlElem<number>;
  site_id?: XmlElem<number>;
  catalog_list_desc?: string;
  text_area?: XmlElem<string>;
  attributes?: IWTDocumentAttribute;
  web_template_type?: XmlElem<string>;
  custom_template_type?: XmlElem<number>;
  templates_source?: XmlElem<string>;
  parent_object_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  set_template?(sTemplateTypeParam: string): void;
  set_default_template?(): boolean;
  update_template?(): boolean;
}

interface IWTTagTopElem extends IWTXmlDocumentTopElem, IWTAdminAccessBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  require_acknowledgement?: XmlElem<boolean>;
  experts?: XmlMultiElem<{
    expert_id: XmlElem<number>;
  }>;
  access?: XmlElem<IWTAccessDocBase>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}

interface IWTTagDocument extends IWTXmlDocument {
  TopElem: IWTTagTopElem;
}

interface IWTAccessDocBase {
  enable_anonymous_access?: XmlElem<boolean>;
  access_level?: XmlElem<number>;
  access_roles?: XmlMultiElem<{
    access_role_id?: XmlElem<string>;
  }>;
  access_groups?: XmlMultiElem<{
    group_id?: XmlElem<number>;
  }>;
  access?: IWTViewConditionsBase;
  access_org_id?: XmlElem<number>;
  access_site_id?: XmlElem<number>;
  access_host_id?: XmlElem<number>;
  web_mode_id?: XmlElem<number>;

  operator?: XmlElem<string>;
}

interface IWTDocument extends IWTXmlDocument {
  TopElem: IWTDocumentTopElem;
}

interface IWTDocumentPersonsBasePerson {
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  can_create?: XmlElem<boolean>;
  can_edit?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
}

interface IWTDocumentPersonsBase {
  document_persons?: Array<IWTDocumentPersonsBasePerson>;
}

interface IWTDocInfoCreation {
  user_login?: XmlElem<string>;
  user_id?: XmlElem<number>;
  date?: XmlElem<Date>;
  app_instance_id?: XmlElem<string>;
}

interface IWTDocInfoModification {
  user_login?: XmlElem<string>;
  user_id?: XmlElem<number>;
  date?: XmlElem<Date>;
}

interface IWTDocInfoBase {
  creation?: XmlElem<IWTDocInfoCreation>;
  modification?: XmlElem<IWTDocInfoModification>;
  invariable?: XmlElem<boolean>;
}

interface IWTDocInfo {
  creation?: XmlElem<IWTDocInfoCreation>;
  modification?: XmlElem<IWTDocInfoModification>;
  invariable?: XmlElem<boolean>;
}

interface IWTCustomReportBaseAggregation {
  aggregate_function?: XmlElem<string>;
  aggregate_column?: XmlElem<number>;
  flag_graph?: XmlElem<boolean>;
  aggregate_secondary: {
    option_type?: XmlElem<string>;
    column_value?: XmlElem<string>;
  }
}

interface IWTCustomReportBase extends IWTCriterionBase, IWTColumnBase, IWTChartReportGraphBase {
  object_name_type?: XmlElem<string>;
  object_name?: XmlElem<string>;
  flag_open_param_tun_section?: XmlElem<boolean>;
  flag_custom_x?: XmlElem<boolean>;
  custom_x?: XmlElem<string>;
  show_table?: XmlElem<boolean>;
  show_chart?: XmlElem<boolean>;
  get_report_data?(iReportID_PARAM: number, iUserID_PARAM: number): any;
  report_result_date?: XmlElem<Date>;
  report_result_author?: XmlElem<string>;
  performance_launch_time?: XmlElem<Date>;
  performance_search_time?: XmlElem<Date>;
  performance_process_time?: XmlElem<Date>;
  categorize?: XmlElem<boolean>;
  categorize_view?: XmlElem<string>;
  categorize_hide_details?: XmlElem<boolean>;
  aggregations?: Array<IWTCustomReportBaseAggregation>;
  show_total?: XmlElem<boolean>;
  integrated_criterion_field?: XmlElem<string>;
  integrated_criterion_field_is_custom?: XmlElem<boolean>;
  integrated_criterion_value?: XmlElem<string>;
}

interface IWTCustomElemsBaseCustomElem {
  name?: XmlElem<string>;
  value?: XmlElem<any>;
}

interface IWTCustomElemsBaseCustomReportFiction extends IWTCustomReportBase {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
}

interface IWTCustomElemsBase {
  custom_elems?: XmlMultiElem<IWTCustomElemsBaseCustomElem>;
  custom_report_fictions?: XmlMultiElem<IWTCustomElemsBaseCustomReportFiction>;
}

interface IWTCriterionBaseCriterionCatalogChain extends IWTViewConditionsBase, IWTFieldNamesBase {
  catalog_name?: XmlElem<string>;
  field?: XmlElem<string>;
  scheme_id?: XmlElem<string>;
}

interface IWTCriterionBaseCriterion {
  value?: XmlElem<string>;
  column_title?: XmlElem<string>;
  type?: XmlElem<string>;
  option_type?: XmlElem<string>;
  and_or?: XmlElem<string>;
  is_custom_field?: XmlElem<boolean>;
  catalog_chains?: Array<IWTCriterionBaseCriterionCatalogChain>;
  flag_value_filter?: XmlElem<boolean>;
  flag_is_parameter?: XmlElem<boolean>;
  flag_hierarchy?: XmlElem<number>;
  flag_active?: XmlElem<boolean>;
  open_bracket?: XmlElem<string>;
  close_bracket?: XmlElem<string>;
}

interface IWTCriterionBase extends IWTFieldNamesBase {
  criterions: Array<IWTCriterionBaseCriterion>;
}

interface IWTCredentialTopElem extends IWTXmlDocumentTopElem, IWTDocInfo {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  login?: XmlElem<string>;
  password?: XmlElem<string>;
  remote_security_profile_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCredentialDocument extends IWTXmlDocument {
  TopElem: IWTCredentialTopElem;
}

interface IWTCoursePartActivityState {
  activity_state_id?: XmlElem<number>;
  score?: XmlElem<number>;
  state_id?: XmlElem<number>;
}

interface IWTCoursePart {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  max_score?: XmlElem<number>;
  mastery_score?: XmlElem<number>;
  mastery_score_relative?: XmlElem<number>;
  url?: XmlElem<string>;
  course_module_id?: XmlElem<number>;
  parent_part_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  win_width?: XmlElem<number>;
  win_height?: XmlElem<number>;
  disp_scrolling?: XmlElem<boolean>;
  resizable?: XmlElem<boolean>;
  is_mandatory?: XmlElem<boolean>;
  is_visible?: XmlElem<boolean>;
  max_time_allowed?: XmlElem<string>;
  time_limit_action?: XmlElem<string>;
  set_status_side?: XmlElem<string>;
  score_factor?: XmlElem<number>;
  assessment_id?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  start_day?: XmlElem<number>;
  duration_day?: XmlElem<number>;
  activity_id?: XmlElem<number>;
  activity_state: Array<IWTCoursePart>;
  object_id?: XmlElem<number>;
  cl_module_view?: XmlElem<string>;
}

interface IWTCourseTopElem extends
  IWTXmlDocumentTopElem,
  ObjectCodeNameBase,
  IWTCourseSettingsBase,
  IWTFileListBase {
  desc?: XmlElem<string>;
  status?: XmlElem<string>;
  win_width?: XmlElem<number>;
  win_height?: XmlElem<number>;
  disp_scrolling?: XmlElem<boolean>;
  resizable?: XmlElem<boolean>;
  struct_type?: XmlElem<string>;
  library_url?: XmlElem<string>;
  parts?: XmlMultiElem<IWTCoursePart>;
  course_finish_redirect?: XmlElem<string>;
  course_finish_redirect_url?: XmlElem<string>;
  base_url?: XmlElem<string>;
  view_type?: XmlElem<string>;
  mastery_score?: XmlElem<number>;
  max_score?: XmlElem<number>;
  score_sum_type?: XmlElem<string>;
  score_sum_eval?: XmlElem<string>;
  yourself_start?: XmlElem<boolean>;
  finish_without_mastery_score?: XmlElem<boolean>;
  auto_finish?: XmlElem<boolean>;
  ignor_location?: XmlElem<boolean>;
  start_after_finish?: XmlElem<boolean>;
  no_url_info?: XmlElem<boolean>;
  disp_folder_desc?: XmlElem<boolean>;
  duration?: XmlElem<number>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  not_use_default_notification?: XmlElem<boolean>;
  persons?: XmlMultiElem<IWTPersonExpert>;
  default_response_type_id?: XmlElem<number>;
  mandatory_fill_response?: XmlElem<boolean>;
  allow_disp_response?: XmlElem<boolean>;
  cl_course_id?: XmlElem<number>;
  version?: XmlElem<string>;
  price?: XmlElem<number>;
  pwt_disp?: XmlElem<boolean>;
  import_type?: XmlElem<string>;
  education_org_id?: XmlElem<number>;
  comment?: XmlElem<string>;
  get_part_code?(): string;
  Width?(partCode: string): number;
  Height?(partCode: string): number;
  DispScrolling?(partCode: string): boolean;
  Resizable?(partCode: string): boolean;
  get_workflow_id?(): null;
  get_pwt_info?(source: XmlElem<any>): IWTXmlDocument;
  GetPartUrl?(partCode: string, index: number): string;
}

interface IWTCourseDocument extends IWTXmlDocument {
  TopElem: IWTCourseTopElem;
}

interface IWTPersonExpert {
  person_id?: number;
  type?: string;
}

interface IWTCourseSettingsBase {
  settings?: {
    open_single_module?: XmlElem<boolean>;
    open_first_module?: XmlElem<boolean>;
    open_last_visited?: XmlElem<boolean>;
    open_next_after_completed?: XmlElem<boolean>;
    launch_type?: XmlElem<string>;
  }
}

interface IWTCoreLessonInfoBase {
  learning_part_id?: XmlElem<number>;
  filing_learning_part?(bSetChangedParam: boolean): void;
  save_learning_part(bSaveParam: number): boolean;
  core_lesson_changed?: XmlElem<boolean>;
  core_lesson_filled?: XmlElem<boolean>;
}

interface IWTCoreLessonBase {
  core_lesson?: XmlElem<string>;
  lesson_report?: XmlElem<string>;
  data_lesson: {
    core_vendor?: XmlElem<string>;
    objectives_status?: XmlElem<string>;
    evaluation?: XmlElem<string>;
    comments?: XmlElem<string>;
    student_data?: XmlElem<string>;
    student_preferences?: XmlElem<string>;
    student_demographics?: XmlElem<string>;
  }
}

interface IWTCompoundProgramProgram {
  id?: XmlElem<number>;
  name?: XmlElem<string>;
  parent_progpam_id?: XmlElem<number>;
  education_program_id?: XmlElem<number>;
  education_method_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  person_num?: XmlElem<number>;
  type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  edit_notification?: XmlElem<boolean>;
  delay_days?: XmlElem<number>;
  days?: XmlElem<number>;
  weight?: XmlElem<number>;
  start_type?: XmlElem<string>;
  required?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface IWTLectorsBaseLector {
  lector_id?: XmlElem<number>;
  hours?: XmlElem<number>;
  weekend_hours?: XmlElem<number>;
  webinar_url?: XmlElem<string>;
  participation_id?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTLectorsBase {
  lectors?: XmlMultiElem<IWTLectorsBaseLector>;
}

interface IWTCompoundProgramTopElem extends IWTXmlDocumentTopElem,
  ObjectCodeNameBase,
  IWTCustomElemsBase,
  IWTLectorsBase,
  IWTFileListBase,
  IWTKnowledgePartsBase,
  IWTDocInfo,
  IWTAdminAccessBase,
  IWTAccessBase {
  desc?: XmlElem<string>;
  min_person_num?: XmlElem<number>;
  programs?: XmlElem<IWTCompoundProgramProgram>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
  activate_program_to_person?(inputParam: Object): IResultActivateProgramToPerson;
}

interface IWTBudgetPeriodDay {
  date?: XmlElem<Date>;
  type?: XmlElem<string>;
  region_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTBudgetPeriodTopElem extends IWTXmlDocumentTopElem,
  IWTAdminAccessBase,
  IWTCustomElemsBase,
  IWTDocInfo
{
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  period_type?: XmlElem<string>;
  days?: XmlMultiElem<IWTBudgetPeriodDay>;
  comment?: XmlElem<string>;
}

interface IWTBudgetPeriodDocument extends IWTXmlDocument {
  TopElem: IWTBudgetPeriodTopElem;
}

interface IResultActivateProgramToPerson {
  result: [{
    id: number;
    error: number;
    text: string;
  }];
}

interface IWTCompoundProgramDocument extends IWTXmlDocument {
  TopElem: IWTCompoundProgramTopElem;
}

interface IWTColumnBaseColumnCCondition {
  option_type?: XmlElem<string>;
  color?: XmlElem<string>;
  bkcolor?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTColumnBaseColumnForeignElem {
  name?: XmlElem<string>;
  catalog?: XmlElem<string>;
  is_custom?: XmlElem<boolean>;
  target?: XmlElem<string>;
}

interface IWTColumnBaseColumn {
  column_name?: Array<string>;
  column_title?: Array<string>;
  column_foreign_name?: Array<string>;
  column_foreign_catalog_2?: Array<string>;
  column_foreign_name_2?: Array<string>;
  column_value?: Array<string>;
  column_width?: Array<number>;
  column_width_unit?: Array<string>;
  column_color?: Array<string>;
  column_bkcolor?: Array<string>;
  datatype?: Array<string>;
  flag_formula?: Array<boolean>;
  flag_formula_post_process?: Array<boolean>;
  flag_color?: Array<boolean>;
  flag_visible?: Array<boolean>;
  flag_lng?: Array<boolean>;
  c_conditions?: Array<IWTColumnBaseColumnCCondition>;
  foreign_elem?: Array<IWTColumnBaseColumnForeignElem>;
}

interface IWTColumnBase {
  columns?: Array<IWTColumnBaseColumn>;
}

interface IWTCollaboratorChangeLog extends IWTCustomElemsBase {
  id?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_parent_id?: XmlElem<number>;
  position_parent_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  date?: XmlElem<Date>;
  comment?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  working_days?: XmlElem<number>;
  working_hours?: XmlElem<number>;
  rate?: XmlElem<number>;
  rate_percent?: XmlElem<number>;
}

interface IWTCollaboratorHistoryState {
  id?: XmlElem<string>;
  state_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  comment?: XmlElem<string>;
}

interface IWTCollaboratorPersonalConfig {
  avatar_filename?: XmlElem<string>;
  nick?: XmlElem<string>;
  status?: XmlElem<string>;
  default_info_type?: XmlElem<string>;
}

interface IWTFuncManagersBaseFuncManager extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
}

interface IWTFuncManagersBase {
  func_managers?: XmlMultiElem<IWTFuncManagersBaseFuncManager>;
  obtain_func_manager_by_id?(managerId: number, bossTypeId?: number): void;
}

interface IWTPathSubBasePathSub {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  name?: XmlElem<string>;
  parent_id?: XmlElem<number>;
}

interface IWTPathSubBase {
  path_subs?: XmlMultiElem<IWTPathSubBasePathSub>;
  filling_path_subs?(): XmlMultiElem<IWTPathSubBasePathSub>;
}

interface IWTPersonObjectLinksBasePersonObjectProfile {
  person_object_profile_id?: XmlElem<number>;
}

interface IWTPersonObjectLinksBasePersonObjectLinkObject {
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  can_edit?: XmlElem<boolean>;
  can_delete?: XmlElem<boolean>;
  access_level?: XmlElem<number>;
}

interface IWTPersonObjectLinksBasePersonObjectLink {
  object_catalog?: XmlElem<string>;
  all_can_create?: XmlElem<boolean>;
  amount?: XmlElem<number>;
  all_can_edit?: XmlElem<boolean>;
  all_can_delete?: XmlElem<boolean>;
  objects?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectLinkObject>;
}

interface IWTPersonObjectLinksBase {
  pol_loaded?: XmlElem<boolean>;
  pol_changed?: XmlElem<boolean>;
  person_object_profiles?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectProfile>;
  person_object_links?: XmlMultiElem<IWTPersonObjectLinksBasePersonObjectLink>;
}

interface IWTCollaboratorCustomParam {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
}

interface IWTCollaboratorCompBenPaymentType {
  payment_type_id?: XmlElem<number>;
  max_value?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCollaboratorCompBen {
  salary?: XmlElem<number>;
  currency_type_id?: XmlElem<string>;
  payment_period?: XmlElem<string>;
  comment?: XmlElem<string>;
  payment_types?: XmlMultiElem<IWTCollaboratorCompBenPaymentType>
}

interface IWTCollaboratorTopElem extends IWTXmlDocumentTopElem,
  IWTPersonBase,
  IWTPassportDataBase,
  IWTFileListBase,
  IWTCustomElemsBase,
  IWTFuncManagersBase,
  IWTPathSubBase,
  IWTKnowledgePartsBase,
  IWTKnowledgePartsBaseOld,
  IWTCustomElemsBase,
  IWTPersonObjectLinksBase,
  IWTDocInfo
  {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  eid?: XmlElem<string>;
  name?: XmlElem<string>;
  fullname?(): string;
  position_id?: XmlElem<number>;
  position_name?: XmlElem<string>;
  position_parent_id?: XmlElem<number>;
  position_parent_name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  org_name?: XmlElem<string>;
  change_password?: XmlElem<boolean>;
  is_candidate?: XmlElem<boolean>;
  is_outstaff?: XmlElem<boolean>;
  candidate_status_type_id?: XmlElem<number>;
  candidate_id?: XmlElem<number>;
  is_dismiss?: XmlElem<boolean>;
  hire_date?: XmlElem<Date>;
  dismiss_date?: XmlElem<Date>;
  position_date?: XmlElem<Date>;
  in_request_black_list?: XmlElem<boolean>;
  request_black_list_data?: XmlElem<Date>;
  request_black_list_comment?: XmlElem<string>;
  place_id?: XmlElem<number>;
  region_id?: XmlElem<number>;
  cost_center_id?: XmlElem<number>;
  lng_id?: XmlElem<string>;
  location_id?: XmlElem<string>;
  pict_url?: XmlElem<string>;
  access_time_start?: XmlElem<string>;
  access_time_end?: XmlElem<string>;
  /** Проверяет доступ пользователя к порталу на текущий момент */
  is_time_access?(): boolean;
  /** Описание */
  desc?: XmlElem<string>;
  disp_empty_fields?: XmlElem<boolean>;
  disp_personal_info?: XmlElem<boolean>;
  disp_login?: XmlElem<boolean>;
  disp_sex?: XmlElem<boolean>;
  disp_desc?: XmlElem<boolean>;
  disp_files?: XmlElem<boolean>;
  disp_birthdate?: XmlElem<boolean>;
  disp_birthdate_year?: XmlElem<boolean>;
  disp_resume?: XmlElem<boolean>;
  allow_personal_chat_request?: XmlElem<boolean>;
  personal_chat_confirmation_required?: XmlElem<boolean>;
  development_potential_id?: XmlElem<number>;
  efficiency_estimation_id?: XmlElem<number>;
  web_enter_date?: XmlElem<Date>;
  category_id?: XmlMultiElem<string>;
  change_logs?: XmlMultiElem<IWTCollaboratorChangeLog>;
  current_state?: XmlElem<string>;
  history_states?: XmlMultiElem<IWTCollaboratorHistoryState>;
  personal_config?: XmlElem<IWTCollaboratorPersonalConfig>;
  last_import_date?: XmlElem<Date>;
  custom_params?: XmlMultiElem<IWTCollaboratorCustomParam>;
  level_id?: XmlElem<number>;
  comp_ben?: XmlElem<IWTCollaboratorCompBen>;
  gdpr?: XmlElem<boolean>;
  clear_cur_position?(): undefined;
  row_disp_elem?: XmlElem<string>;
  row_list_field?: XmlElem<string>;
  row_key_field?: XmlElem<string>;
  start_action?(type: string): number;
  set_basic_position?(positionId: number): boolean;
  get_courses?(type: string): Array<any>
  get_tests?(type: string): Array<any>;
  assign_course?(courseId: number, startDate: Date, endDate: Date, eventId: number): number;
  assign_test?(assessmentId: number, startDate: Date, endDate: Date, eventId: number): number;
  get_info?(): any;
  get_events?(type: string, status: string, role: string): Array<any>;
  get_groups?(): Array<any>;
  get_event_results?(): Array<any>;
  update_info?(lastname: string, firstname: string, middlename: string, address: string, phone: string, email: string, login: string, password: string): any;
  clear_subs_fields?(): undefined;
}

interface IWTCollaboratorDocument extends IWTXmlDocument {
  TopElem: IWTCollaboratorTopElem;
}

interface IWTPositionCompetenceProfile {
  id?: XmlElem<number>;
}

interface IWTPositionKPIProfile {
  id?: XmlElem<number>;
  period_type_id?: XmlElem<string>;
}

interface IWTPositionTopElem extends IWTXmlDocumentTopElem, IWTFileListBase, IWTDocInfo, IWTCustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  org_id?: XmlElem<number>;
  parent_object_id?: XmlElem<number>;

  basic_collaborator_id?: XmlElem<number>;
  basic_rate?: XmlElem<number>;
  is_boss?: XmlElem<boolean>;
  position_date?: XmlElem<Date>;

  cost_month?: XmlElem<number>;
  currency?: XmlElem<string>;

  competence_profile_id?: XmlElem<number>;
  competence_profiles?: XmMultiElem<IWTPositionCompetenceProfile>;

  competence_codes?: XmlElem<string>;
  kpi_profile_id?: XmlElem<number>;

  kpi_profiles?: XmlMultiElem<IWTPositionKPIProfile>;

  bonus_profile_id?: XmlElem<number>;
  knowledge_profile_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  position_common_level_id?: XmlElem<number>;
  position_common_level_name?: XmlElem<string>;
  position_family_id?: XmlElem<number>;
  position_finish_date?: XmlElem<Date>;
  is_position_finished?: XmlElem<boolean>;
  position_assignment_type?: XmlElem<string>;
  position_appointment_type_id?: XmlElem<number>;
  staff_position_id?: XmlElem<number>;

  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
}

interface IWTPositionDocument extends IWTXmlDocument {
  TopElem: IWTPositionTopElem;
}

interface IWTPersonFillingBase {
  person_fullname?: XmlElem<string>;
  person_position_id?: XmlElem<number>;
  person_position_name?: XmlElem<string>;
  person_position_code?: XmlElem<string>;
  person_org_id?: XmlElem<number>;
  person_org_name?: XmlElem<string>;
  person_org_code?: XmlElem<string>;
  person_subdivision_id?: XmlElem<number>;
  person_subdivision_name?: XmlElem<string>;
  person_subdivision_code?: XmlElem<string>;
  person_instance_id?: XmlElem<string>;
  person_code?: XmlElem<string>;
}

interface IWTChartReportGraphBase {
  disp_legend?: XmlElem<boolean>;
  chart_id?: XmlElem<string>;
  flag_showvalues?: XmlElem<boolean>;
  plot_type?: XmlElem<string>;
  flag_open_graph_tun_section?: XmlElem<boolean>;
}

interface IWTCatalogListBaseCatalogObject {
  object_id?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCatalogListBaseCatalog {
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  all?: XmlElem<boolean>;
  objects: Array<IWTCatalogListBaseCatalogObject>;
}

interface IWTCatalogListBase {
  catalogs?: Array<IWTCatalogListBaseCatalog>;
  catalogs_catalog_type?: XmlElem<string>;
  catalogs_sel_all_objects?: XmlElem<boolean>;
}

interface IWTCareerReserveTutor {
  person_id?: XmlElem<number>;
  is_native?: XmlElem<boolean>;
  boss_type_id?: XmlElem<number>;
  is_responsible?: XmlElem<boolean>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveComissionPerson {
  person_id?: XmlElem<number>;
  score?: XmlElem<number>;
  comment?: XmlElem<string>;
}

interface IWTCareerReserveTask extends XmlElem<any> {
  id?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  parent_task_id?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  plan_date?: XmlElem<Date>;
  fact_date?: XmlElem<Date>;
  start_edit_date?: XmlElem<Date>;
  typical_development_program_id?: XmlElem<number>;
  tutor_id?: XmlElem<number>;
  competence_id?: XmlElem<number>;
  desc?: XmlElem<string>;
  score?: XmlElem<number>;
  person_comment?: XmlElem<string>;
  tutor_comment?: XmlElem<string>;
  object_type?: XmlElem<string>;
  object_id?: XmlElem<number>;
  active_test_learning_id?: XmlElem<number>;
  event_id?: XmlElem<number>;
  event_result_id?: XmlElem<number>;
  active_learning_id?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  assessment_appraise_result_id?: XmlElem<number>;
  poll_result_id?: XmlElem<number>;
  poll_procedure_id?: XmlElem<number>;
  type_document?: XmlElem<string>;
  link_document?: XmlElem<string>;
  forbid_task_portal_edit?: XmlElem<boolean>;
  commission_persons?: Array<IWTCareerReserveComissionPerson>;
}

interface IWTCareerReserveTopElem extends IWTXmlDocumentTopElem,
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  start_date?: XmlElem<Date>;
  plan_readiness_date?: XmlElem<Date>;
  finish_date?: XmlElem<Date>;
  readiness_percent?: XmlElem<number>;
  personnel_reserve_id?: XmlElem<number>;
  status?: XmlElem<string>;
  person_id?: XmlElem<number>;
  position_type?: XmlElem<string>;
  position_name?: XmlElem<string>;
  position_id?: XmlElem<number>;
  position_common_id?: XmlElem<number>;
  staff_position_id?: XmlElem<number>;
  subdivision_id?: XmlElem<number>;
  tutors?: Array<IWTCareerReserveTutor>;
  current_competence_profile_id?: XmlElem<number>;
  target_competence_profile_id?: XmlElem<number>;
  development_plan_id?: XmlElem<number>;
  forbid_tasks_edit?: XmlElem<boolean>;
  tasks?: XmlMultiElem<IWTCareerReserveTask>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;

  /**
   * Возвращает ID типовой должности
   * @returns {number|undefined}
   */
  get_linked_position_common_id?(): number | undefined;

  /**
   * Назначает задания из типовой программы развития
   * @param {number} typicalDevelopmentProgramId ID типовой программы развития
   */
  assign_typical_program?(typicalDevelopmentProgramId: number): undefined;

  set_task?(task: IWTCareerReserveTask, typicalDevelopmentProgramId: number, parentTaskId: string): any;

  change_tutors_list?(): void;
}

interface IWTCareerReserveDocument extends IWTXmlDocument {
  TopElem: IWTCareerReserveTopElem;
}

interface IWTAssessmentSectionItemScale {
  scale_id?: XmlElem<string>;
}

interface IWTAssessmentSectionItem {
  id?: XmlElem<number>;
  title?: XmlElem<string>;
  question_points?: XmlElem<number>;
  scales?: XmlMultiElem<IWTAssessmentSectionItemScale>;
}

interface IWTAssessmentSection {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  title?: XmlElem<string>;
  duration?: XmlElem<number>;
  passing_score?: XmlElem<number>;
  display_correct_answer?: XmlElem<boolean>;
  not_display_feedback?: XmlElem<boolean>;
  not_disp_last_attempt?: XmlElem<boolean>;
  feedback_wrong?: XmlElem<string>;
  feedback_correct?: XmlElem<string>;
  items?: XmlMultiElem<IWTAssessmentSectionItem>;
  comment?: XmlElem<string>;
}

interface IWTAssessmentTopElem extends IWTXmlDocumentTopElem {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  title?: XmlElem<string>;
  name?: XmlElem<string>;
  resource_id?: XmlElem<number>;
  status?: XmlElem<string>;
  testing_system_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  duration_days?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  passing_score?: XmlElem<number>;
  use_scale_calculation?: XmlElem<boolean>;
  test_finish_redirect?: XmlElem<string>;
  test_finish_redirect_url?: XmlElem<string>;
  activation_code?: XmlElem<string>;
  not_display_feedback?: XmlElem<boolean>;
  not_disp_last_attempt?: XmlElem<boolean>;
  not_display_unfinished_score?: XmlElem<boolean>;
  feedback_wrong?: XmlElem<string>;
  feedback_correct?: XmlElem<string>;
  feedback_passed?: XmlElem<string>;
  feedback_failed?: XmlElem<string>;
  use_launch_code?: XmlElem<boolean>;
  not_sent_correct_answer?: XmlElem<boolean>;
  sections?: XmlMultiElem<IWTAssessmentSection>;
  certificate_type_id?: XmlElem<number>;
  display_result?: XmlElem<boolean>;
  is_adaptive_test?: XmlElem<boolean>;
  display_correct_answer?: XmlElem<boolean>;
  display_result_report?: XmlElem<boolean>;
  is_open?: XmlElem<boolean>;
  display_correct_answer_in_report?: XmlElem<boolean>;
  display_answers_in_report?: XmlElem<boolean>;
  proctoring_system_id?: XmlElem<number>;
  external_type?: XmlElem<string>;
  not_use_default_notification?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  publish_url?: XmlElem<string>;
  publish_date?: XmlElem<Date>;
  template_url?: XmlElem<string>;
  win_width?: XmlElem<string>;
  win_height?: XmlElem<string>;
  before_finish_eval?: XmlElem<string>;
  desc?: XmlElem<string>;
  get_info?(): Object;
  update_structure?(): boolean;
}

interface IWTAssessmentDocument extends IWTXmlDocument {
  TopElem: IWTAssessmentTopElem;
}

interface IWTAnnalsObjectBase {
  id?: XmlElem<any>;
  attempt_id?: XmlElem<string>;
  file?: XmlElem<string>;
  objtype?: XmlElem<string>;
}

interface IWTAnnalsObjectsBase {
  objects?: Array<IWTAnnalsObjectBase>;
}

interface IWTAnnalsNumsBase {
  question_num?: XmlElem<number>;
  question_answered_num?: XmlElem<number>;
  question_passed_num?: XmlElem<number>;
}

interface IWTActiveTestLearningTopElem extends IWTXmlDocumentTopElem, IWTLearningAssessmentBase, IWTPersonFillingBase, IWTLearningCurrentStateBase, IWTLastAttemptTestLearningsBase {
  code?: XmlElem<string>;
  activation_code?: XmlElem<string>;
  name?: XmlElem<string>;

  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  event_name?: XmlElem<string>;
  event_start_date?: XmlElem<Date>;
  education_plan_id?: XmlElem<number>;
  group_id?: XmlElem<number>;
  duration?: XmlElem<number>;
  attempts_num?: XmlElem<number>;
  state_id?: XmlElem<number>;
  lesson_location?: XmlElem<string>;
  score?: XmlElem<number>;
  score_str?: XmlElem<string>;
  core_lesson?: XmlElem<string>;
  lesson_report?: XmlElem<string>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  last_usage_date?: XmlElem<Date>;
  max_end_date?: XmlElem<Date>;
  time?: XmlElem<number>;
  max_score?: XmlElem<number>;
  assessment_appraise_id?: XmlElem<number>;
  question_num?: XmlElem<number>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  complete_test?(): number;
}

interface IWTActiveTestLearningDocument extends IWTXmlDocument {
  TopElem: IWTActiveTestLearningTopElem;
}

interface IWTActiveNotificationSender {
  address?: XmlElem<string>;
  name?: XmlElem<string>;
}

interface IWTActiveNotificationRecipients {
  address?: XmlElem<string>;
  mobile_phone?: XmlElem<string>;
  name?: XmlElem<string>;
  collaborator_id?: XmlElem<number>;
}

interface IWTActiveNotificationTopElem extends IWTXmlDocumentTopElem {
  notification_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  sec_object_id?: XmlElem<number>;
  text?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  last_send_date?: XmlElem<Date>;
  send_date?: XmlElem<Date>;
  is_custom?: XmlElem<boolean>;
  status?: XmlElem<string>;
  send_counter?: XmlElem<number>;
  sender?: XmlElem<IWTActiveNotificationSender>;
  date?: XmlElem<Date>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;

  attachments?: XmlMultiElem<{
    name?: XmlElem<string>;
    data?: XmlElem<Binary>;
  }>;

  recipients?: XmlElem<IWTActiveNotificationRecipients>;

  notification_system_id?: XmlElem<number>;
}

interface IWTActiveNotificationDocument extends IWTXmlDocument {
  TopElem: IWTActiveNotificationTopElem;
}

interface IWTPollReportViewer extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
}

interface IWTPollQuestionEntry {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  weight?: XmlElem<number>;
  bg_color?: XmlElem<string>;
  resource_id?: XmlElem<number>;
}

interface IWTPollQuestionRowColumn {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
}
interface IWTPollQuestionRow {
  id?: XmlElem<number>;
  value?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  columns?: XmlMultiElem<IWTPollQuestionRowColumn>;
}

interface IWTPollQuestion extends IWTCustomElemsBase {
  id?: XmlElem<number>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  is_in_table?: XmlElem<boolean>;
  show_header?: XmlElem<boolean>;
  required?: XmlElem<boolean>;
  catalog?: XmlElem<string>;
  add_comment?: XmlElem<boolean>;
  subtype?: XmlElem<number>;
  is_multiple?: XmlElem<boolean>;
  value_condition?: XmlElem<string>;
  completed?: XmlElem<boolean>;
  image_id?: XmlElem<number>;

  entries?: XmMultiElem<IWTPollQuestionEntry>;
  rows?: XmMultiElem<IWTPollQuestionRow>;

  is_current?: XmlElem<boolean>;
  catalog_entry_id?: XmlElem<number>;
}

interface IWTPollItemRowColumn {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  is_title?: XmlElem<boolean>;
}

interface IWTPollItemRow {
  id?: XmlElem<string>;
  bg_color?: XmlElem<string>;
  question_id?: XmlElem<number>;
  value?: XmlElem<string>;
  columns?: XmlMultiElem<IWTPollItemRowColumn>;
  is_title?(): boolean;
}

interface IWTPollItemCondition {
  id?: XmlElem<string>;
  question_id?: XmlElem<number>;
  entry_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
}

interface IWTPollItem {
  id?: XmlElem<string>;
  type?: XmlElem<string>;
  title?: XmlElem<string>;
  question_id?: XmlElem<number>;
  required?: XmlElem<boolean>;
  resource_type?: XmlElem<string>;
  max_duration?: XmlElem<number>;
  preparation_time?: XmlElem<number>;
  prohibit_viewing?: XmlElem<boolean>;
  prohibit_overwriting?: XmlElem<boolean>;
  rows?: XmlMultiElem<IWTPollItemRow>;
  conditions?: XmlMultiElem<IWTPollItemCondition>;
}

interface IWTPollTopElem extends IWTXmlDocumentTopElem,
  ObjectCodeNameBase,
  IWTCustomElemsBase,
  IWTAccessBase,
  IWTAdminAccessBase,
  IWTGameBonusBase,
  IWTKnowledgePartsBase,
  IWTDocInfo {
  class?: XmlElem<string>;
  poll_id?: XmlElem<number>;
  start_date?: XmlElem<Date>;
  end_date?: XmlElem<Date>;
  completed?: XmlElem<boolean>;
  is_main?: XmlElem<boolean>;
  is_one_time?: XmlElem<boolean>;
  is_anonymous?: XmlElem<boolean>;
  show_report?: XmlElem<boolean>;
  show_comments_in_report?: XmlElem<boolean>;
  report_viewers?: XmlMultiElem<IWTPollReportViewer>;
  is_multiple_select?: XmlElem<boolean>;
  columns_num?: XmlElem<number>;
  questions?: XmlMultiElem<IWTPollQuestion>;
  items?: XmlMultiElem<IWTPollItem>;
  allow_delete_poll_result?: XmlElem<boolean>;
  complete_message?: XmlElem<string>;
  adaptive_mode?(): string;
  complete_massege?: XmlElem<string>;
  processing_code?: XmlElem<string>;
  desc?: XmlElem<string>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;

  get_report_data?(): any;
  set_question_id?(fldQuestionIDTarget: any, fldItemParam: any, sItemTypeParam: any): any;
  set_value?(fldValueTarget: any): any;
}

interface IWTPollDocument extends IWTXmlDocument {
  TopElem: IWTPollTopElem;
}

interface IWTNotificationRecipient {
  recipient_type?: XmlElem<string>;
  func_manager_type_id: number;
  eval_str?: XmlElem<string>;
  eval_ids_str?: XmlElem<string>;
  notification_template_id?: XmlElem<number>;
}

interface IWTNotificationNotificationSystem {
  notification_system_id?: XmlElem<number>;
}

interface IWTNotificationDocumentTopElem extends IWTXmlDocumentTopElem, IWTCustomElemsBase, IWTDocInfo {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  recipients?: XmlMultiElem<IWTNotificationRecipient>;
  field_recipient_type?: XmlElem<string>;
  notification_systems?: XmlMultiElem<IWTNotificationNotificationSystem>;
  active?: XmlElem<boolean>;
  is_std?: XmlElem<boolean>;
  notification_template_id?: XmlElem<number>;
  date_shift_selector?: XmlElem<number>;
  date_shift?: XmlElem<number>;
  sender_selector?: XmlElem<number>;
  sender_email?: XmlElem<string>;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;

}

interface IWTNotificationDocument extends IWTXmlDocument {
  TopElem: IWTNotificationDocumentTopElem;
}

interface IWTNotificationTemplateMainObject extends IWTFieldNamesBaseFieldName {
  catalog_name?: XmlElem<string>;
  init_field_names?: Function;
}

interface IWTNotificationTemplateDocumentTopElem extends IWTXmlDocumentTopElem, IWTCustomElemsBase, IWTDocInfo {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  subject?: XmlElem<string>;
  body?: XmlElem<string>;
  body_type?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  main_object?: XmElem<IWTNotificationTemplateMainObject>;
  add_text_to_edit?: Function;
  comment?: XmlElem<string>;
  role_id?: XmlMultiElem<number>;
}

interface IWTNotificationTemplateDocument extends IWTXmlDocument {
  TopElem: IWTNotificationTemplateDocumentTopElem;
}

interface IWTActiveLearningPart {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  type?: XmlElem<string>;
}

interface IWTActiveLearningTopElem extends IWTXmlDocumentTopElem, IWTPersonFillingBase, IWTAdminAccessBase, IWTDocInfo {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  course_id?: XmlElem<number>;
  course_name?: XmlElem<string>;
  course_code?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_current_state?: XmlElem<string>;
  event_id?: XmlElem<number>;
  event_name?: XmlElem<string>;
  event_start_date?: XmlElem<Date>;
  group_id?: XmlElem<number>;
  start_usage_date?: XmlElem<Date>;
  start_learning_date?: XmlElem<Date>;
  is_self_enrolled?: XmlElem<boolean>;
  duration?: XmlElem<number>;
  max_end_date?: XmlElem<Date>;
  attempts_num?: XmlElem<number>;
  base_url?: XmlElem<string>;

  education_plan_id?: XmlElem<number>;
  parts?: XmlMultiElem<IWTActiveLearningPart>;
  last_usage_part_code?: XmlElem<string>;
  last_usage_date?: XmlElem<Date>;
  score_sum_eval?: XmlElem<string>;
  score?: XmlElem<number>;
  max_score?: XmlElem<number>;
  calc_score?: number;
  state_id?: XmlElem<number>;
  time?: XmlElem<number>;
  calc_max_end_date?: XmlElem<Date>;
  no_encoding_core_lesson?: XmlElem<boolean>;
  logging?: XmlElem<boolean>;
  commenting?: XmlElem<boolean>;
  use_proctoring?: XmlElem<boolean>;
  device_disp_type?: XmlElem<string>;
  comment?: XmlElem<string>;
  complete_course?(): number;
  update_add_data?(): void;
}

interface IWTActiveLearningDocument extends IWTXmlDocument {
  TopElem: IWTActiveLearningTopElem;
}

interface IWTAccessBase {
  access_level?: XmlElem<number>;
  access_role?: XmlElem<string>;
  is_arm_admin?: XmlElem<boolean>;
  web_banned?: XmlElem<boolean>;
  user_group_id?: XmlElem<number>;
  is_content_admin?: XmlElem<boolean>;
}

interface IWTActionReportTopElem extends IWTXmlDocumentTopElem {
  type?: XmlElem<string>;
  status?: XmlElem<string>;
  completed?: XmlElem<boolean>;
  finished?: XmlElem<boolean>;
  exchange_server_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  last_upload_date?: XmlElem<Date>;
  report_text?: XmlElem<string>;
  data_file_url?: XmlElem<string>;
  server_version?: XmlElem<string>;
  create_date?: XmlElem<Date>;
}

interface IWTActionReportDocument extends IWTXmlDocument {
  TopElem: IWTActionReportTopElem;
}

interface IWTBlogEntryCommentTopElem extends IWTXmlDocumentTopElem,
  IWTFileListBase,
  IWTDocInfo,
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
	create_date?: XmlElem<Date>;
	blog_entry_id?: XmlElem<number>;
	object_type?: XmlElem<string>;
	object_name?: XmlElem<string>;
	person_id?: XmlElem<number>;
	person_fullname?: XmlElem<string>;
	name?: XmlElem<string>;
	parent_id?: XmlElem<number>;
	like_id?: XmlElem<number>;
	message?: XmlElem<string>;
	type?: XmlElem<string>;
	creator_name?(): string;
}

interface IWTBlogEntryCommentDocument extends IWTXmlDocument {
  TopElem: IWTBlogEntryCommentTopElem;
}


interface IWTResponseTopElem extends IWTXmlDocumentTopElem,
  IWTPersonFillingBase,
  IWTAdminAccessBase,
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  response_type_id?: XmlElem<number>;
  type?: XmlElem<string>;
  create_date?: XmlElem<Date>;
  person_id?: XmlElem<number>;
  object_id?: XmlElem<number>;
  object_name?: XmlElem<string>;
  object_code?: XmlElem<string>;
  object_start_date?: XmlElem<Date>;
  is_public?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  basic_score?: XmlElem<number>;
  basic_desc?: XmlElem<string>;
  calc_basic_values?(): any
}

interface IWTResponseDocument extends IWTXmlDocument {
  TopElem: IWTResponseTopElem;
}

interface IWTResponseTypeTopElem extends IWTXmlDocumentTopElem {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  create_redirect?: XmlElem<string>;
  basic_desc_field?: XmlElem<string>;
  basic_score_field?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  comment?: XmlElem<string>;
  disp_block?: XmlElem<any>;
}

interface IWTResponseTypeDocument extends IWTXmlDocument {
  TopElem: IWTResponseTypeTopElem;
}

interface IWTRequestPerson extends IWTPersonFillingBase {
  person_id?: XmlElem<number>;
}

interface IWTRequestGroup {
  group_id?: XmlElem<number>;
}

interface IWTRequestWorkflowMatching {
  id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  type?: XmlElem<string>;
  is_main?: XmlElem<boolean>;
}

interface IWTWorkflowDataBaseWorkflowField {
  name?: XmlElem<string>;
  value?: XmlElem<string>;
  workflow_state?: XmlElem<string>;
}

interface IWTWorkflowDataBaseWorkflowLogEntry {
  create_date?: XmlElem<Date>;
  action_id?: XmlElem<string>;
  person_id?: XmlElem<number>;
  person_fullname?: XmlElem<string>;
  begin_state?: XmlElem<string>;
  finish_state?: XmlElem<string>;
  submited?: XmlElem<boolean>;
}

interface IWTWorkflowDataBaseWorkflowCustomStateCondition {
  type?: XmlElem<string>;
  cur_user_type?: XmlElem<string>;
  person_id?: XmlElem<number>;
  and_or?: XmlElem<string>;
  begin_bracket?: XmlElem<string>;
  finish_bracket?: XmlElem<string>;
}

interface IWTWorkflowDataBaseWorkflowCustomState {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  next_workflow_custom_state_code?: XmlElem<string>;
  common_state_code?: XmlElem<string>;
  conditions?: XmlMultiElem<IWTWorkflowDataBaseWorkflowCustomStateCondition>;
  condition_eval_str?: XmlElem<string>;
}

interface IWTWorkflowDataBase {
  workflow_id?: XmlElem<number>;
	workflow_state?: XmlElem<string>;
	workflow_state_name?: XmlElem<string>;
	workflow_state_last_date?: XmlElem<Date>;
	get_workflow_state_name?(workflowDoc: IWTWorkflowTopElem): string;
	set_workflow_state_last_date?(param: any): void;
	add_workflow_log_entry?(param: any): void;
	is_workflow_init?: XmlElem<boolean>;
	workflow_fields?: XmlMultiElem<IWTWorkflowDataBaseWorkflowField>;
	workflow_log_entrys?: XmlMultiElem<IWTWorkflowDataBaseWorkflowLogEntry>;
	workflow_custom_states?: XmlMultiElem<IWTWorkflowDataBaseWorkflowCustomState>;
}

interface IWTRequestTopElem extends IWTXmlDocumentTopElem,
  IWTPersonFillingBase,
  IWTKnowledgePartsBase,
  IWTWorkflowDataBase,
  IWTDocInfo,
  IWTFileListBase,
  IWTCustomElemsBase
{
  id?: XmlElem<number>;
	code?: XmlElem<string>;
	name?: XmlElem<string>;
	request_type_id?: XmlElem<number>;
	budget_period_id?: XmlElem<number>;
	type?: XmlElem<string>;
	status_id?: XmlElem<string>;
	create_date?: XmlElem<Date>;
	close_date?: XmlElem<Date>;
	plan_close_date?: XmlElem<Date>;
	person_id?: XmlElem<number>;
	object_id?: XmlElem<number>;
	object_name?: XmlElem<string>;
	object_code?: XmlElem<string>;
	object_start_date?: XmlElem<Date>;
	object_type?: XmlElem<string>;
	is_group?: XmlElem<boolean>;
	persons?: XmlMultiElem<IWTRequestPerson>;
	person_num?(): number;
	groups?: XmlMultiElem<IWTRequestGroup>;
	workflow_matchings?: XmlMultiElem<IWTRequestWorkflowMatching>
	workflow_matching_type?: XmlElem<string>;
	comment?: XmlElem<string>;
}

interface IWTRequestDocument extends IWTXmlDocument {
  TopElem: IWTRequestTopElem;
}

interface IWTRequestTypeTopElem extends IWTXmlDocumentTopElem,
  IWTObjectCodeNameBase,
  IWTWebVariablesBase
{
  object_type?: XmlElem<string>;
  is_group?: XmlElem<boolean>;
  is_can_be_group?: XmlElem<boolean>;
  is_can_be_add_youself?: XmlElem<boolean>;
  hide_portal_comment?: XmlElem<boolean>;
  forbid_rejection?: XmlElem<boolean>;
  forbid_copy?: XmlElem<boolean>;
  boss_only?: XmlElem<boolean>;
  show_all?: XmlElem<boolean>;
  ignore_black_list?: XmlElem<boolean>;
  workflow_id?: XmlElem<number>;
  create_message?: XmlElem<string>;
  use_standart_processing?: XmlElem<boolean>;
  processing_code?: XmlElem<string>;
  reject_processing_code?: XmlElem<string>;
  request_custom_web_template_id?: XmlElem<number>;
  reject_redirect_url?: XmlElem<string>;
  remote_action_id?: XmlElem<number>;
  access?: XmlElem<IWTAccessDocBase>;
  is_std?: XmlElem<boolean>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  disp_block?: XmlElem<any>;
  role_id?: XmlMultiElem<number>;
}

interface IWTRequestTypeDocument extends IWTXmlDocument {
  TopElem: IWTRequestTypeTopElem;
}

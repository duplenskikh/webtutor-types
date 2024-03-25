declare namespace tools_web {
  function put_query_string(str: string, pageName: string): string;

  /**
   * Путь до wt/web директории сервера.
   * @returns {string} Путь.
   */
  let web_url: XmlElem<string>;

  /**
   * Ссылка на раздел портала.
   * @param {object} attributes - Параметры.
   * @returns {string} Ссылка на документ.
   */
  function doc_link(attributes: DocumentDocumentTopElem["attributes"]): string;

  function get_object_link(objectName: string, objectId: number, objectTopElem: XmlTopElem, docId: number): string;

  /**
   * Получение текстового значения языкового параметра из curLngWeb.
   * @param {string} name - Название параметра.
   * @returns {string} Значение языкового параметра.
   */
  function get_web_str(name: string): string;

  function get_web_const(name: string, fldLng: unknown): string;

  function eval_web_column_const(name: unknown, fldLng: unknown): unknown;

  function get_web_desc(sourceHTML: unknown, url: unknown, path?: unknown, env?: unknown): unknown;

  /**
   * Складывает два `id`.
   * @param {number} id - Id объекта.
   * @param {number} sessionId - Id сессии.
   * @returns {number} Сумма Id объекта и Id сессии.
   */
  function get_sum_sid(id: number, sessionId: number): number;

  function check_sum_sid(id: string, sum: string, sessionId: number): unknown;

  function custom_elems_filling(fldTarget: unknown, source: unknown, arrCustomElems: unknown, params: unknown): unknown;

  function web_custom_elems_filling(catalog: unknown, topId: number, source: unknown, requestForm: unknown, valueFlag: unknown, charset: string, arrFields: unknown): unknown;

  function update_object_from_context(docObject: unknown, context: unknown, arrFieldNames: unknown, prefix: unknown): unknown;

  function get_query_string_from_url(url: string, flag: unknown, params: unknown): unknown;

  function get_query_string(flag: unknown, params: unknown): unknown;

  function get_url_protocol(url: unknown): unknown;

  function set_url_protocol(url: string): unknown;

  function get_cur_lng_name(text: string, shortId: string): unknown;

  function check_access(doc: XmlTopElem, personId: number, personDoc?: CollaboratorDocumentTopElem, ession?: Session): boolean;

  function get_web_param(listParamsTarget: unknown, sParamName: unknown, sDefaultValue: unknown, EmtyFlag: unknown): unknown;

  function set_web_params(listParamsTarget: unknown, listWvars: unknown, bRewriteFlag: unknown, OverrideWebTemplateID: unknown): unknown;

  function write_custom_web_template(oCustomWebTemplate: unknown): unknown;

  function get_override_web_template(iOverrideWebTemplateID: unknown, session: Session, curUserID: number, curUser: CurUser, curAnonymousAccess: unknown, activeWebTemplateTopElem: unknown, bAdding: unknown): unknown;

  function get_override_web_templates(session: Session, zone: unknown, curActiveWebTemplate: unknown, addWebTemplate: boolean): unknown;

  function place_zone(zone: string): unknown;

  function place_override_web_template(overrideWebTemplateId: number): unknown;

  function get_operation_script(operationId: number, scriptType: unknown, O_PARAMS: unknown): unknown;

  function eval_operation_script(operationId: number, scriptType: unknown, O_PARAMS: unknown): unknown;

  function is_moderator_forum(forumId: number, iUserID: unknown, teForum: unknown): unknown;

  function is_privilege_collaborator(forumEntryId: number, userTopElem: unknown, iUserID: unknown, eForumEntry: unknown): unknown;

  function is_forum_readed(forumId: number, userId: number): unknown;

  function check_forum_entry_access(catForumEntry: unknown, teUser: unknown, iUserID: unknown, eForum: unknown): unknown;

  function remove_forum_entry(forumEntryId: number): unknown;

  function close_forum_entry(forumEntryId: number): unknown;

  function draw_calendar(objectName: unknown, _object_value: unknown, format: unknown): unknown;

  function web_files_process(sourceFilesDoc: unknown): unknown;

  function convert_xhttp_res(textArea: unknown, _source_desc: unknown): unknown;

  function get_my_person_object_link_card(CATALOG: unknown, USER_ID: unknown, DOC_HIMSELF: unknown, MAKE_NEW_ON_ABSENCE: unknown): unknown;

  function get_person_object_info(sCatalog: unknown, iUserID: unknown, teUser: unknown): unknown;

  function set_person_object_info(sCatalog: unknown, iUserID: unknown, teUser: unknown, aObjectsMeta: unknown): unknown;

  function get_object_owners(objectID: number, sCatalog: unknown): unknown;

  function insert_custom_code(iCustomWebTemplateID_: unknown, teCustomWebTemplate_: unknown, bEval_: unknown, bNaked_: unknown, iDepth_: unknown, aOfFldNativeParamsArr_: unknown, bExternalEnvelope_: unknown): unknown;

  function place_xaml(iCustomWebTemplateID_: unknown, teCWebTemplate_: unknown, oPlaceXamlParams_: unknown): unknown;

  function place_xaml_player(iCustomWebTemplate: unknown, curWebDesign: unknown, Request: unknown, oPlaceXamlParams_: unknown): unknown;

  function convert_xss(text: string, type?: string): string;

  /**
   * Возврат экземпляра библиотеки regexp
   * Global = true
   * IgnoreCase = true
   * MultiLine = true.
   * @returns {Websoft.RegExp.RegExp} Экземпляр библиотеки.
   */
  function reg_exp_init(): Websoft.RegExp.RegExp;

  function convert_bbcode_to_html(sMessageSource: unknown, objRegExp: unknown): unknown;

  function convert_html_to_bbcode(sMessageSource: unknown, objRegExp: unknown): unknown;

  function convert_bbtags_to_html(sMessageSource: unknown, objRegExp: unknown): unknown;

  function get_bbcode_tag_ids(sMessageSource: unknown, objRegExp: unknown): unknown;

  function get_new_request_by_query(): unknown;

  function update_community_authors(objectID: number, vAuthors: unknown, nbDelete: unknown): unknown;

  function evaluate_remote_action(vRemoteActionDoc: unknown, Request: unknown): unknown;

  function Unsqueeze(sTxt: unknown, iIdx: unknown): unknown;

  function get_collection_param(): unknown;

  function external_eval(sCommand: unknown, oParams: unknown, Env: unknown): unknown;

  function env_to_script(oEnv: unknown): unknown;

  function object_init(oSessionTarget: unknown, oQuery: unknown, bObjectEnvSave: unknown): unknown;

  function get_column_width(sType: unknown, sMode: unknown): unknown;

  function get_catalog_list_arrays(oCollection: unknown, Env: unknown, EnvLngCommon: unknown): unknown;

  function check_session_user(Request: unknown, iUserID: unknown): unknown;

  /**
   * Возвращает значение true/false в завимости от передаваемого параметра.
   * @param {T} value - Параметр.
   * @returns {boolean} Значение аргумента в булевом представлении.
   */
  function is_true<T>(value: T): boolean;

  function init_cur_active_web_template(Env: unknown, bCreate: unknown): unknown;

  function save_cur_active_web_template(teActiveWebTemplateDoc: unknown, bFinishSave: unknown): unknown;

  function drop_active_web_templates(): unknown;

  function get_session_lng(Session: unknown): unknown;

  function check_site_access(personTopElem: unknown, oSite: unknown): unknown;

  function get_resource_url(objectID: number, Session: unknown): unknown;

  function get_custom_web_template_url(iTemplateID: unknown): unknown;

  /**
   * Получение url ссылки объекта по Id.
   * @param {string} catalogName - Каталог объекта.
   * @param {number} objectId - Id объекта.
   * @param {unknown} oParams - Параметры для определения хоста/сессии/etc.
   * @returns {string} Url.
   */
  function get_object_source_url(catalogName: string, objectId: number, oParams?: unknown): string;

  function GetTalentPoolObjectsList(iPersonId: unknown, bAddFuncSubordinates: unknown, bHideDissmissed: unknown, vBossType: unknown, iCareerReserveType: unknown): unknown;

  function GetRequiredQualificationsList(iPersonID: unknown, sSearchList: unknown, bCatalogList: unknown): unknown;

  function get_recommended_materials(iPersonID: unknown, sSearchList: unknown, bCatalogList: unknown, iRootID: unknown): unknown;

  function set_var_eval(sVarNama: unknown, curVars: unknown, oEval: unknown, sEvalType: unknown): unknown;

  function get_var_eval(sVarNama: unknown, curVars: unknown, oEval: unknown, sEvalType: unknown): unknown;

  function convert_desc_to_html(desc: string): unknown;

  function get_user_recommended_learning(iUserId: unknown, teUser: unknown): unknown;

  /**
   * Создание кэша по коду.
   * @param {string} userDataCode - Код кэша.
   * @param {T} value - Payload.
   * @param {number} ttl - Время жизни кэша.
   */
  function set_user_data<T>(userDataCode: string, value: T, ttl?: number): void;

  /**
   * Получение кэша по коду.
   * @param {string} userDataCode - Код кэша.
   * @returns {string|null} Значение кэша.
   */
  function get_user_data(userDataCode: string): null | string;

  function remove_user_data(sKey: string): unknown;

  function remove_user_data_by_prefix(sKey: string): unknown;

  function obtain_text_area(iDocID: unknown, teDocTarget: unknown): unknown;

  function get_host_name(url: string): unknown;

  function get_cur_host_name(teHost: unknown, oRequest: unknown): unknown;

  function get_cur_host_path(teHost: unknown, oRequest: unknown): unknown;

  function get_cur_host_path_by_url(teHost: unknown, url: string): unknown;

  function get_cur_hosts(oRequest: unknown): unknown;

  function get_cur_host(oRequest: unknown): unknown;

  function is_correct_question(fldquestion: unknown, teItem: unknown): unknown;

  function save_cur_object_doc(docObject: unknown, oEnv: unknown): unknown;

  function build_query_url(url: string, sHostAndPath: unknown): unknown;

  function build_relative_url(url: string): unknown;

  function set_modified_response_status(oRequestTarget: unknown, url: string, dtLastModified: unknown): unknown;

  function str_utc_mime_date(dtDate: unknown): unknown;

  function get_tracking_url(fldLocation: unknown, curHostPath: unknown): unknown;

  function create_resource_from_attacment(oAttachment: unknown, iPersonID: unknown, personTopElem: unknown): unknown;

  function get_key_positions_list(iPersonId: unknown, oStruct: unknown): unknown;

  /**
   * Формирует content-type из Url файла.
   * @param {string} url - Url файла.
   * @returns {string} Content-Type значение.
   */
  function url_std_content_type(url: string): string;

  /**
   * Возвращает DOTNETCORE-VFS=='1' из AppConfig.
   * @returns {boolean} DOTNETCORE-VFS=='1'.
   */
  let is_vfs: XmlElem<boolean>;

  /**
   * Отправка файла в response stream.
   * @param {string} url - Url файла.
   * @param {Request} req - Объект запроса Request.
   */
  function write_url_to_response(url: string, req: Request): void;

  /**
   * Декоратор для простого шифрования функцией StrSimpleEncrypt({objectId}_{date}).
   * @param {number} objectId - Id объекта.
   * @param {Date} date - Дата.
   * @returns {string} Значение StrSimpleEncrypt({objectId}_{date}).
   */
  function encrypt_launch_id(objectId?: number, date?: Date): string;

  function decrypt_launch_id(sLaunchID: unknown): unknown;

  function get_valid_url(url: string): unknown;

  function get_active_web_template_hash(sMode: unknown, sAccessLevel: unknown, sAccessRole: unknown, sSiteID: unknown, sWebDesignID: unknown): unknown;

  function build_submatched_string(sSourceString: unknown, sRealString: unknown, sDestString: unknown): unknown;

  function get_auth_hash(sSource: unknown): unknown;

  function get_user_id_by_login(authLogin: string, authParams: unknown): unknown;

  function set_cookie_auth(req: Request, curHost: HostDocumentTopElem, auth: Object): unknown;

  /**
   * Инициализаяция пользователя.
   * @param {Request} req - Объект Request.
   * @param {object} query - Параметры.
   * @returns {IToolsWebUserInit} Результат инициализации пользователя из запроса.
   */
  function user_init(req: Request, query: Object): IToolsWebUserInit;

  function GetProjectManagementObjectsList(iPersonID: unknown, arrCurLng: unknown, bAddFuncSubordinates: unknown, bHideDissmissed: unknown, bShowProjectManagers: unknown, bOverdue: unknown, bProjectTree: unknown, bCheckTaskSeeRights: unknown, vBossType: unknown, oStruct: unknown): unknown;

  function CheckRelativeFileVisibility(fldFile: unknown, userId: number, objectId: number, objectTopElem: XmlTopElem): unknown;

  function get_date_passed_string(date: Date, sCurLngId: unknown): unknown;

  function get_date_remain_string(date: Date, sCurLngId: unknown): unknown;

  function get_host_obj(Request: unknown): unknown;

  function get_cur_lng_obj(oID: unknown): unknown;

  function get_cur_object_by_field(Env: unknown, sField: string): unknown;

  function get_cur_web_design(Env: Env): unknown;

  function get_cur_site(Env: Env): unknown;

  function get_cur_web_mode(Env: Env): unknown;

  function get_cur_env(req: Request): Env;

  function get_default_lng_web(oUser: unknown): unknown;

  function get_profiling_statistic_rec_id(): unknown;

  function start_profiling_record(oParams: unknown): unknown;

  function finish_profiling_record(sID: unknown): unknown;

  function GetVacancyResponseStatus(obVacancyResponse: unknown, iVacancyResponseID: unknown, curLngCommon: unknown): unknown;

  function html_decode(s: unknown): unknown;

  function html_to_imput_value(s: unknown): unknown;
  let content_types: XmlElem<unknown>;

  function get_app_ui(): unknown;

  function set_st_category(curUser: unknown): unknown;

  function get_child_by_key_value(fldSource: unknown, sKey: unknown, sDefaultValue: unknown): unknown;

  function get_object_image_url(oObject: unknown, bDispDefault: unknown): unknown;

  function str_file_size(iSize: unknown, bDispDefault: unknown): unknown;

  function get_base_url_path(oEnv: unknown): unknown;

  function set_base_url_path(url: string, oEnv: unknown): unknown;

  function get_menu_items(sMenuCode: unknown, iLevelsToShow: unknown, bShowDesc: unknown, iCacheTime: unknown): unknown;

  function get_secid(iSessionId: unknown): unknown;

  function check_secid(sSum: unknown, iSessionId: unknown): unknown;

  function clear_person_pict_cache(iPersonID: unknown): unknown;

  function get_item_objectives_value(fldItem: unknown): unknown;

  function obtain_item_objectives_value(fldTarget: unknown, rValue: unknown, sAction: unknown): unknown;

  function send_message(vApplication: unknown, sMessage: unknown, sDomain: unknown, aUser: unknown, oOptions: unknown): unknown;

  function replace_condition_operators(oConditions: unknown, iValue: unknown): unknown;

  function get_header_obj(sHeader: unknown): unknown;

  function get_multipart_array(Request: unknown): unknown;

  function get_game_rating(curUser: unknown, checkLevel: boolean, sCurrencyTypeID: unknown, allLevel: boolean, bDispSub: unknown, iSubDepth: unknown, iGrpColl: unknown, oPaging: unknown, curUserID: unknown, bRange: unknown, iAmntCollsRating: unknown, sGap: unknown, bSamePlace: unknown, bShowTopRating: unknown): unknown;

  function get_game_rating_awards_or_badges(personTopElem: unknown, allLevel: boolean, checkLevel: boolean, levelId: number, amntCollsRating: number, dispSub: boolean, subdivId: number, subdivNum: number, currencyTypeId: number, grpColl: number, paging: unknown, range: boolean): unknown;

  function get_game_rating_all(allLevel: boolean, checkLevel: boolean, iLevelID: number, bDispSub: unknown, iSubdivID: number, iSubdivNum: number, sCurrencyTypeID: unknown, iGrpColl: number, oPaging: Object, bRange: boolean, iAmntCollsRating: number, bSamePlace: boolean, bShowTopRating: boolean): unknown;

  function get_timezone(objectId: number, catObject: unknown, bReturnNull: unknown): unknown;

  function get_timezone_date(date: Date, catTimeZone1: unknown, catTimeZone2: unknown): unknown;

  function get_class_for_status(status: string): unknown;

  function get_url_query(url: string): unknown;

  function transform_fancy_url(source: unknown): unknown;

  function get_lng_fullname(personTopElem: unknown, fldLng: unknown): unknown;

  function get_language_desc(desc: string, oEnv: unknown): unknown;

  function set_override_web_params(curParamsTarget: unknown, catOverrideWebTemplate: unknown): unknown;

  function access_exists(fldAccess: unknown): unknown;

  function str_period_date(dt: Date, curLngWeb: unknown): unknown;

  let enabled_web_rules_date: XmlElem<Date>;

  let enabled_web_rules_obj: XmlElem<unknown>;

  function get_enabled_web_rules(): unknown;

  let std_web_rules_obj: XmlElem<unknown>;

  function get_std_web_rules(): unknown;

  function clear_std_web_rules(): unknown;

  function get_mode_clean_url(mode: string, objectId: number, params: unknown): unknown;

  function get_web_mode_clean_url(webMode: unknown, objectId: number, params: unknown): unknown;

  function convert_mode_clean_url(url: string): unknown;

  function get_clean_url_exc_query(url: string, excParams: string, params: unknown): unknown;

  function obtain_shared_temp_file(suffix: unknown): unknown;

  function encode_url_reserved(url: string): unknown;

  function decode_url_reserved(url: string): unknown;

  function get_remote_action_param(aNames: unknown, topElem: unknown): unknown;

  function check_collection_access(curUser: unknown, object: unknown, personAccessType: unknown): unknown;

  function get_empty_env(): unknown;

  function get_empty_request(): unknown;

  function get_admin_request(): unknown;

  function parse_multiple_parameter(param: unknown): unknown;

  function get_md5_id(hash: string): unknown;

  function check_object(xmCurObject: unknown, sType: string): unknown;

  function check_redirect_url(url: string): unknown;

  function check_web_rule_by_url(url: string, request: Request): boolean;

  function check_learning_schedule(learning: unknown, objectTopElem: unknown): unknown;

  function set_user_status(curUserId: unknown, status: unknown): unknown;

  function get_user_status(curUserId: unknown): unknown;

  function terminate_learning_connection(objectId: number): unknown;

  function create_learning_connection(objectTopElem: unknown, userTopElem: unknown, partCode: string): unknown;

  function log_learning_connection(type: string, connection: unknown): unknown;

  function set_data_cache(key: string, value: unknown, duration: number): unknown;

  function get_data_cache(key: string): unknown;

  function get_data_cache_by_pattern(pattern: string): unknown;

  function remove_data_cache(key: string): unknown;
}

interface IToolsWebUserInit {
  auth_type: string | undefined;
  anonymous: boolean;
  auth_login: string | null | undefined;
  access_time_start: number;
  access_time_end: number;
  error_code: string;
  error_text: string;
  redirect: string;
  access: boolean;
}

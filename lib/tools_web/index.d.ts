
declare namespace tools_web {
  function put_query_string(_param_str: string, _page_name: string): string;

  function web_url(): string;

  /**
   * Ссылка на раздел портала.
   * @param {object} oAttributesParam - Параметры.
   */
  function doc_link(oAttributesParam: Object): string;

  function get_object_link(
    objectName: string,
    objectId: number,
    objectTopElem: XmlTopElem,
    docId: number
  ): string;

  /**
   * Получение текстового значения языкового параметра из curLngWeb.
   * @param {string} name - Название параметра.
   */
  function get_web_str(name: string): string;
  function get_web_const(sNameParam: string, fldLngParam: unknown): string;
  function eval_web_column_const(sNameParam: unknown, fldLngParam: unknown): unknown;
  function get_web_desc(sSourceHtml: unknown, oUrl: unknown, _path?: unknown, Env?: unknown): unknown;

  /**
   * Складывает два `id`.
   * @param {number} objectId - Id объекта.
   * @param {number} sid - Id сессии.
   */
  function get_sum_sid(objectId: number, sid: number): number;

  function check_sum_sid(sIdParam: unknown, sSumParam: unknown, iSessionIdParam: unknown): unknown;

  function custom_elems_filling(fldTarget: unknown, oSourceParam: unknown, arrCustomElemsParam: unknown, oParams: unknown): unknown;
  function web_custom_elems_filling(_catalog: unknown, _top_id: unknown, _source: unknown, _request_form: unknown, _value_flag: unknown, sCharsetParam: unknown, arrFields: unknown): unknown;
  function update_object_from_context(docObjectParam: unknown, oContextParam: unknown, arrFieldNamesParam: unknown, sPrefixParam: unknown): unknown;
  function get_query_string_from_url(sUrlParam: unknown, _flag: unknown, _params: unknown): unknown;
  function get_query_string(_flag: unknown, _params: unknown): unknown;
  function get_url_protocol(_url: unknown): unknown;
  function set_url_protocol(sUrlParam: unknown): unknown;
  function get_cur_lng_name(sTextParam: unknown, sShortIDParam: unknown): unknown;
  function check_access(doc: XmlTopElem, personId: number, personDoc?: CollaboratorDocumentTopElem, session?: Session): boolean;
  function get_web_param(listParamsTarget: unknown, sParamNameParam: unknown, sDefaultValueParam: unknown, bEmtyFlagParam: unknown): unknown;
  function set_web_params(listParamsTarget: unknown, listWvarsParam: unknown, bRewriteFlagParam: unknown, iOverrideWebTemplateIDParam: unknown): unknown;
  function write_custom_web_template(oCustomWebTemplateParam: unknown): unknown;
  function get_override_web_template(iOverrideWebTemplateIDParam: unknown, Session: unknown, curUserID: unknown, curUser: unknown, curAnonymousAccess: unknown, teActiveWebTemplateParam: unknown, bAddingParam: unknown): unknown;
  function get_override_web_templates(Session: unknown, oZoneParam: unknown, curActiveWebTemplate: unknown, bAddWebTemplate: unknown): unknown;
  function place_zone(sZoneParam: unknown): unknown;
  function place_override_web_template(iOverrideWebTemplateIDParam: unknown): unknown;
  function get_operation_script(OPERATION_ID: unknown, S_SCRIPT_TYPE: unknown, O_PARAMS: unknown): unknown;
  function eval_operation_script(OPERATION_ID: unknown, S_SCRIPT_TYPE: unknown, O_PARAMS: unknown): unknown;
  function is_moderator_forum(iForumIDParam: unknown, iUserIDParam: unknown, teForumParam: unknown): unknown;
  function is_privilege_collaborator(iForumEntryIDParam: unknown, teUserParam: unknown, iUserIDParam: unknown, teForumEntryParam: unknown): unknown;
  function is_forum_readed(_forum_id: unknown, _user_id: unknown): unknown;
  function check_forum_entry_access(catForumEntryParam: unknown, teUserParam: unknown, iUserIDParam: unknown, teForumParam: unknown): unknown;
  function remove_forum_entry(iForumEntryIDParam: unknown): unknown;
  function close_forum_entry(iForumEntryIDParam: unknown): unknown;
  function draw_calendar(_object_name: unknown, _object_value: unknown, format: unknown): unknown;
  function web_files_process(_source_files_doc: unknown): unknown;
  function convert_xhttp_res(_text_area: unknown, _source_desc: unknown): unknown;
  function get_my_person_object_link_card(CATALOG: unknown, USER_ID: unknown, DOC_HIMSELF: unknown, MAKE_NEW_ON_ABSENCE: unknown): unknown;
  function get_person_object_info(sCatalogPARAM: unknown, iUserIDPARAM: unknown, teUserPARAM: unknown): unknown;
  function set_person_object_info(sCatalogPARAM: unknown, iUserIDPARAM: unknown, teUserPARAM: unknown, aObjectsMetaPARAM: unknown): unknown;
  function get_object_owners(iObjectIDPARAM: unknown, sCatalog: unknown): unknown;
  function insert_custom_code(iCustomWebTemplateID_PARAM: unknown, teCustomWebTemplate_PARAM: unknown, bEval_PARAM: unknown, bNaked_PARAM: unknown, iDepth_PARAM: unknown, aOfFldNativeParamsArr_PARAM: unknown, bExternalEnvelope_PARAM: unknown): unknown;
  function place_xaml(iCustomWebTemplateID_PARAM: unknown, teCWebTemplate_PARAM: unknown, oPlaceXamlParams_PARAM: unknown): unknown;
  function place_xaml_player(iCustomWebTemplatePARAM: unknown, curWebDesignPARAM: unknown, Request: unknown, oPlaceXamlParams_PARAM: unknown): unknown;
  function convert_xss(text: string, type?: string): string;

  /**
   * Возврат экземпляра библиотеки regexp
   * Global = true
   * IgnoreCase = true
   * MultiLine = true.
   */
  function reg_exp_init(): unknown;

  function convert_bbcode_to_html(sMessageSource: unknown, objRegExp: unknown): unknown;
  function convert_html_to_bbcode(sMessageSource: unknown, objRegExp: unknown): unknown;
  function convert_bbtags_to_html(sMessageSource: unknown, objRegExp: unknown): unknown;
  function get_bbcode_tag_ids(sMessageSource: unknown, objRegExp: unknown): unknown;
  function get_new_request_by_query(): unknown;
  function update_community_authors(iObjectIDPARAM: unknown, vAuthorsPARAM: unknown, nbDeletePARAM: unknown): unknown;
  function evaluate_remote_action(vRemoteActionDoc: unknown, Request: unknown): unknown;
  function Unsqueeze(sTxt: unknown, iIdx: unknown): unknown;
  function get_collection_param(): unknown;
  function external_eval(sCommandParam: unknown, oParams: unknown, Env: unknown): unknown;
  function env_to_script(oEnvParam: unknown): unknown;
  function object_init(oSessionTarget: unknown, oQueryParam: unknown, bObjectEnvSaveParam: unknown): unknown;
  function get_column_width(sTypeParam: unknown, sModeParam: unknown): unknown;
  function get_catalog_list_arrays(oCollectionParam: unknown, Env: unknown, EnvLngCommon: unknown): unknown;
  function check_session_user(Request: unknown, iUserIDParam: unknown): unknown;

  /**
   * Возвращает значение true/false в завимости от передаваемого параметра.
   * @param {T} value - Параметр.
   * @returns {boolean}
   */
  function is_true<T>(value: T): boolean;

  function init_cur_active_web_template(Env: unknown, bCreateParam: unknown): unknown;
  function save_cur_active_web_template(teActiveWebTemplateDocParam: unknown, bFinishSaveParam: unknown): unknown;
  function drop_active_web_templates(): unknown;
  function get_session_lng(Session: unknown): unknown;
  function check_site_access(tePersonParam: unknown, oSiteParam: unknown): unknown;
  function get_resource_url(iObjectIDParam: unknown, Session: unknown): unknown;
  function get_custom_web_template_url(iTemplateIDParam: unknown): unknown;

  /**
   * Получение url ссылки объекта по Id.
   * @param {string} catalogName - Каталог объекта.
   * @param {number} objectId - Id объекта.
   * @param {unknown} oParams - Параметры для определения хоста/сессии/etc.
   */
  function get_object_source_url(catalogName: string, objectId: number, oParams?: unknown): string;

  function GetTalentPoolObjectsList(iPersonIdParam: unknown, bAddFuncSubordinatesParam: unknown, bHideDissmissedParam: unknown, vBossTypeParam: unknown, iCareerReserveTypeParam: unknown): unknown;
  function GetRequiredQualificationsList(iPersonIDParam: unknown, sSearchListParam: unknown, bCatalogListParam: unknown): unknown;
  function get_recommended_materials(iPersonIDParam: unknown, sSearchListParam: unknown, bCatalogListParam: unknown, iRootIDParam: unknown): unknown;
  function set_var_eval(sVarNamaParam: unknown, curVars: unknown, oEvalParam: unknown, sEvalTypeParam: unknown): unknown;
  function get_var_eval(sVarNamaParam: unknown, curVars: unknown, oEvalParam: unknown, sEvalTypeParam: unknown): unknown;
  function convert_desc_to_html(sDescParam: unknown): unknown;
  function get_user_recommended_learning(iUserIdParam: unknown, teUser: unknown): unknown;

  /**
   * Создание кэша по коду.
   * @param {string} userDataCode - Код кэша.
   * @param {T} valueParam - Payload.
   * @param {number} ttl - Время жизни кэша.
   */
  function set_user_data<T>(userDataCode: string, valueParam: T, ttl?: number): void;

  /**
   * Получение кэша по коду.
   * @param {string} userDataCode - Код кэша.
   */
  function get_user_data(userDataCode: string): null | string;

  function remove_user_data(sKeyParam: string): unknown;
  function remove_user_data_by_prefix(sKeyParam: string): unknown;

  function obtain_text_area(iDocIDParam: unknown, teDocTarget: unknown): unknown;
  function get_host_name(sUrlParam: unknown): unknown;
  function get_cur_host_name(teHostParam: unknown, oRequestParam: unknown): unknown;
  function get_cur_host_path(teHostParam: unknown, oRequestParam: unknown): unknown;
  function get_cur_host_path_by_url(teHostParam: unknown, sUrlParam: unknown): unknown;
  function get_cur_hosts(oRequestParam: unknown): unknown;
  function get_cur_host(oRequestParam: unknown): unknown;
  function is_correct_question(fldquestionParam: unknown, teItemParam: unknown): unknown;
  function save_cur_object_doc(docObjectParam: unknown, oEnvParam: unknown): unknown;
  function build_query_url(sUrlPARAM: unknown, sHostAndPathPARAM: unknown): unknown;
  function build_relative_url(sUrlPARAM: unknown): unknown;
  function set_modified_response_status(oRequestTarget: unknown, sUrlParam: unknown, dtLastModifiedParam: unknown): unknown;
  function str_utc_mime_date(dtDateParam: unknown): unknown;
  function get_tracking_url(fldLocationParam: unknown, curHostPath: unknown): unknown;
  function create_resource_from_attacment(oAttachmentParam: unknown, iPersonIDParam: unknown, tePersonParam: unknown): unknown;
  function get_key_positions_list(iPersonIdParam: unknown, oStructParam: unknown): unknown;
  function url_std_content_type(sUrlParam: unknown): unknown;
  function is_vfs(): boolean;
  function write_url_to_response(sUrl: unknown, oRequestParam: unknown): unknown;

  /**
   * Декоратор дял простого шифрования функцией StrSimpleEncrypt({objectId}_{date}).
   * @param {number} objectId - Id объекта.
   * @param {Date} date - Дата.
   */
  function encrypt_launch_id(objectId?: number, date?: Date): string;

  function decrypt_launch_id(sLaunchIDParam: unknown): unknown;
  function get_valid_url(sUrlParam: unknown): unknown;
  function get_active_web_template_hash(sModeParam: unknown, sAccessLevelParam: unknown, sAccessRoleParam: unknown, sSiteIDParam: unknown, sWebDesignIDParam: unknown): unknown;
  function build_submatched_string(sSourceString: unknown, sRealString: unknown, sDestString: unknown): unknown;
  function get_auth_hash(sSourceParam: unknown): unknown;
  function set_cookie_auth(req: Request, curHost: HostDocumentTopElem, authParam: Object): unknown;

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

  /**
   * Инициализаяция пользователя.
   * @param {Request} req - Объект Request.
   * @param {object} query - Параметры.
   */
  function user_init(req: Request, query: Object): IToolsWebUserInit;

  function GetProjectManagementObjectsList(iPersonIDParam: unknown, arrCurLngParam: unknown, bAddFuncSubordinatesParam: unknown, bHideDissmissedParam: unknown, bShowProjectManagersParam: unknown, bOverdueParam: unknown, bProjectTreeParam: unknown, bCheckTaskSeeRightsParam: unknown, vBossTypeParam: unknown, oStructParam: unknown): unknown;
  function CheckRelativeFileVisibility(fldFileParam: unknown, userId: number, objectId: number, objectTopElem: XmlTopElem): unknown;
  function get_date_passed_string(dDateParam: unknown, sCurLngId: unknown): unknown;
  function get_date_remain_string(dDateParam: unknown, sCurLngId: unknown): unknown;
  function get_host_obj(Request: unknown): unknown;
  function get_cur_lng_obj(oIDParam: unknown): unknown;
  function get_cur_object_by_field(Env: unknown, sFieldParam: string): unknown;
  function get_cur_web_design(Env: Env): unknown;
  function get_cur_site(Env: Env): unknown;
  function get_cur_web_mode(Env: Env): unknown;
  function get_cur_env(req: Request): Env;
  function get_default_lng_web(oUserParam: unknown): unknown;
  function get_profiling_statistic_rec_id(): unknown;
  function start_profiling_record(oParams: unknown): unknown;
  function finish_profiling_record(sID: unknown): unknown;
  function GetVacancyResponseStatus(obVacancyResponseParam: unknown, iVacancyResponseIDParam: unknown, curLngCommonParam: unknown): unknown;
  function html_decode(sParam: unknown): unknown;
  function html_to_imput_value(sParam: unknown): unknown;

  const content_types: unknown;

  function get_app_ui(): unknown;
  function set_st_category(curUserParam: unknown): unknown;
  function get_child_by_key_value(fldSourceParam: unknown, sKeyParam: unknown, sDefaultValueParam: unknown): unknown;
  function get_object_image_url(oObjectParam: unknown, bDispDefaultParam: unknown): unknown;
  function str_file_size(iSizeParam: unknown, bDispDefaultParam: unknown): unknown;
  function get_base_url_path(oEnvParam: unknown): unknown;
  function set_base_url_path(sUrlParam: unknown, oEnvParam: unknown): unknown;
  function get_menu_items(sMenuCodeParam: unknown, iLevelsToShowParam: unknown, bShowDescParam: unknown, iCacheTimeParam: unknown): unknown;
  function get_secid(iSessionIdParam: unknown): unknown;
  function check_secid(sSumParam: unknown, iSessionIdParam: unknown): unknown;
  function clear_person_pict_cache(iPersonIDParam: unknown): unknown;
  function get_item_objectives_value(fldItemParam: unknown): unknown;
  function obtain_item_objectives_value(fldTarget: unknown, rValueParam: unknown, sActionParam: unknown): unknown;
  function send_message(vApplication: unknown, sMessagePARAM: unknown, sDomainPARAM: unknown, aUserPARAM: unknown, oOptionsPARAM: unknown): unknown;
  function replace_condition_operators(oConditionsParam: unknown, iValueParam: unknown): unknown;
  function get_header_obj(sHeaderParam: unknown): unknown;
  function get_multipart_array(Request: unknown): unknown;
  function get_game_rating(curUser: unknown, bCheckLevel: unknown, sCurrencyTypeID: unknown, bAllLevel: unknown, bDispSub: unknown, iSubDepth: unknown, iGrpColl: unknown, oPaging: unknown, curUserID: unknown, bRange: unknown, iAmntCollsRating: unknown, sGap: unknown, bSamePlace: unknown, bShowTopRating: unknown): unknown;
  function get_game_rating_all(bAllLevel: unknown, bCheckLevel: unknown, iLevelID: number, bDispSub: unknown, iSubdivID: number, iSubdivNum: number, sCurrencyTypeID: unknown, iGrpColl: number, oPaging: Object, bRange: boolean, iAmntCollsRating: number, bSamePlace: boolean, bShowTopRating: boolean): unknown;
  function get_timezone(iObjectId: unknown, catObject: unknown, bReturnNull: unknown): unknown;
  function get_timezone_date(dDate: unknown, catTimeZone1: unknown, catTimeZone2: unknown): unknown;
  function get_class_for_status(sStatus: unknown): unknown;
  function get_url_query(sUrlParam: unknown): unknown;
  function transform_fancy_url(source: unknown): unknown;
  function get_lng_fullname(tePersonParam: unknown, fldLngParam: unknown): unknown;
  function get_language_desc(sDesc: unknown, oEnv: unknown): unknown;
  function set_override_web_params(curParamsTarget: unknown, catOverrideWebTemplateParam: unknown): unknown;
  function access_exists(fldAccessParam: unknown): unknown;
  function str_period_date(dtParam: unknown, curLngWeb: unknown): unknown;

  const enabled_web_rules_date: Date;
  const enabled_web_rules_obj: unknown;

  function get_enabled_web_rules(): unknown;

  const std_web_rules_obj: unknown;

  function get_std_web_rules(): unknown;
  function get_mode_clean_url(sModeParam: unknown, iObjectIDParam: unknown, oParams: unknown): unknown;
  function get_web_mode_clean_url(oWebModeParam: unknown, iObjectIDParam: unknown, oParams: unknown): unknown;
  function convert_mode_clean_url(sUrlParam: unknown): unknown;
  function get_clean_url_exc_query(sUrlParam: unknown, sExcParams: unknown, oParams: unknown): unknown;
  function obtain_shared_temp_file(sSuffixParam: unknown): unknown;
  function encode_url_reserved(sUrlParam: unknown): unknown;
  function decode_url_reserved(sUrlParam: unknown): unknown;
  function get_remote_action_param(aNames: unknown, TOPELEM: unknown): unknown;
  function check_collection_access(oCurUserParam: unknown, oObjectParam: unknown, sPersonAccessType: unknown): unknown;
  function get_empty_env(): unknown;
  function get_empty_request(): unknown;
  function get_admin_request(): unknown;
  function parse_multiple_parameter(Param: unknown): unknown;
  function get_md5_id(hash: string): unknown;
  function check_object(xmCurObject: unknown, sType: string): unknown;
  function check_redirect_url(sUrlParam: string): unknown;
  function check_web_rule_by_url(sUrlParam: string, Request: Request): unknown;
}

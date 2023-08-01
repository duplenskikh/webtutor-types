
declare namespace tools_web {
  /**
   * Формирование ссылки на страницу
   * @param _param_str
   * @param _page_name
   */
  function put_query_string(_param_str: string, _page_name: string): string;

  function web_url(): string;

  /**
   * Ссылка на раздел портала
   * @param oAttributesParam
   */
  function doc_link(oAttributesParam: Object): string;

  /**
   * Формирование ссылки на объект
   * @param objectName
   * @param objectId
   * @param objectTopElem
   * @param docId
   */
  function get_object_link(
    objectName: string,
    objectId: number,
    objectTopElem: XmlTopElem,
    docId: number
  ): string;

  /**
     * Получение текстового значения языкового параметра из curLngWeb
     * @param sNameParam Название параметра
     */
  function get_web_str(sNameParam: string): string;

  /**
    * Получение текстового значения параметра из аргумента fldLngParam
    * @param sNameParam Название параметра
    * @param fldLngParam
    */
  function get_web_const(sNameParam: string, fldLngParam: unknown): string;

  /**
   *
   * @param sNameParam
   * @param fldLngParam
   */
  function eval_web_column_const(sNameParam: any, fldLngParam: any): any;

  function get_web_desc(sSourceHtml: any, oUrl: any, _path?: any, Env?: any): any;

  /**
   * Складывает два `id`
   * @param objectId Id объекта
   * @param sid Id сессии
   */
  function get_sum_sid(objectId: number, sid: number): number;

  function check_sum_sid(sIdParam: any, sSumParam: any, iSessionIdParam: any): any;

  function custom_elems_filling(fldTarget: any, oSourceParam: any, arrCustomElemsParam: any, oParams: any): any;
  function web_custom_elems_filling(_catalog: any, _top_id: any, _source: any, _request_form: any, _value_flag: any, sCharsetParam: any, arrFields: any): any;
  function update_object_from_context(docObjectParam: any, oContextParam: any, arrFieldNamesParam: any, sPrefixParam: any): any;
  function get_query_string_from_url(sUrlParam: any, _flag: any, _params: any): any;
  function get_query_string(_flag: any, _params: any): any;
  function get_url_protocol(_url: any): any;
  function set_url_protocol(sUrlParam: any): any;
  function get_cur_lng_name(sTextParam: any, sShortIDParam: any): any;
  function check_access(doc: XmlTopElem, personId: number, personDoc?: CollaboratorDocumentTopElem, session?: Session): boolean;
  function get_web_param(listParamsTarget: any, sParamNameParam: any, sDefaultValueParam: any, bEmtyFlagParam: any): any;
  function set_web_params(listParamsTarget: any, listWvarsParam: any, bRewriteFlagParam: any, iOverrideWebTemplateIDParam: any): any;
  function write_custom_web_template(oCustomWebTemplateParam: any): any;
  function get_override_web_template(iOverrideWebTemplateIDParam: any, Session: any, curUserID: any, curUser: any, curAnonymousAccess: any, teActiveWebTemplateParam: any, bAddingParam: any): any;
  function get_override_web_templates(Session: any, oZoneParam: any, curActiveWebTemplate: any, bAddWebTemplate: any): any;
  function place_zone(sZoneParam: any): any;
  function place_override_web_template(iOverrideWebTemplateIDParam: any): any;
  function get_operation_script(OPERATION_ID: any, S_SCRIPT_TYPE: any, O_PARAMS: any): any;
  function eval_operation_script(OPERATION_ID: any, S_SCRIPT_TYPE: any, O_PARAMS: any): any;
  function is_moderator_forum(iForumIDParam: any, iUserIDParam: any, teForumParam: any): any;
  function is_privilege_collaborator(iForumEntryIDParam: any, teUserParam: any, iUserIDParam: any, teForumEntryParam: any): any;
  function is_forum_readed(_forum_id: any, _user_id: any): any;
  function check_forum_entry_access(catForumEntryParam: any, teUserParam: any, iUserIDParam: any, teForumParam: any): any;
  function remove_forum_entry(iForumEntryIDParam: any): any;
  function close_forum_entry(iForumEntryIDParam: any): any;
  function draw_calendar(_object_name: any, _object_value: any, format: any): any;
  function web_files_process(_source_files_doc: any): any;
  function convert_xhttp_res(_text_area: any, _source_desc: any): any;
  function get_my_person_object_link_card(CATALOG: any, USER_ID: any, DOC_HIMSELF: any, MAKE_NEW_ON_ABSENCE: any): any;
  function get_person_object_info(sCatalogPARAM: any, iUserIDPARAM: any, teUserPARAM: any): any;
  function set_person_object_info(sCatalogPARAM: any, iUserIDPARAM: any, teUserPARAM: any, aObjectsMetaPARAM: any): any;
  function get_object_owners(iObjectIDPARAM: any, sCatalog: any): any;
  function insert_custom_code(iCustomWebTemplateID_PARAM: any, teCustomWebTemplate_PARAM: any, bEval_PARAM: any, bNaked_PARAM: any, iDepth_PARAM: any, aOfFldNativeParamsArr_PARAM: any, bExternalEnvelope_PARAM: any): any;
  function place_xaml(iCustomWebTemplateID_PARAM: any, teCWebTemplate_PARAM: any, oPlaceXamlParams_PARAM: any): any;
  function place_xaml_player(iCustomWebTemplatePARAM: any, curWebDesignPARAM: any, Request: any, oPlaceXamlParams_PARAM: any): any;
  function convert_xss(text: string, type?: string): string;

  /**
   * Возврат экземпляра библиотеки regexp
   * Global = true
   * IgnoreCase = true
   * MultiLine = true
   */
  function reg_exp_init(): unknown;

  function convert_bbcode_to_html(sMessageSource: any, objRegExp: any): any;
  function convert_html_to_bbcode(sMessageSource: any, objRegExp: any): any;
  function convert_bbtags_to_html(sMessageSource: any, objRegExp: any): any;
  function get_bbcode_tag_ids(sMessageSource: any, objRegExp: any): any;
  function get_new_request_by_query(): unknown;
  function update_community_authors(iObjectIDPARAM: any, vAuthorsPARAM: any, nbDeletePARAM: any): any;
  function evaluate_remote_action(vRemoteActionDoc: any, Request: any): any;
  function Unsqueeze(sTxt: any, iIdx: any): any;
  function get_collection_param(): unknown;
  function external_eval(sCommandParam: any, oParams: any, Env: any): any;
  function env_to_script(oEnvParam: any): any;
  function object_init(oSessionTarget: any, oQueryParam: any, bObjectEnvSaveParam: any): any;
  function get_column_width(sTypeParam: any, sModeParam: any): any;
  function get_catalog_list_arrays(oCollectionParam: any, Env: any, EnvLngCommon: any): any;
  function check_session_user(Request: any, iUserIDParam: any): any;

  /**
   * Возвращает значение true/false в завимости от передаваемого параметра
   * @param {T} value
   * @returns {boolean}
   */
  function is_true<T>(value: T): boolean;

  function init_cur_active_web_template(Env: any, bCreateParam: any): any;
  function save_cur_active_web_template(teActiveWebTemplateDocParam: any, bFinishSaveParam: any): any;
  function drop_active_web_templates(): unknown;
  function get_session_lng(Session: any): any;
  function check_site_access(tePersonParam: any, oSiteParam: any): any;
  function get_resource_url(iObjectIDParam: any, Session: any): any;
  function get_custom_web_template_url(iTemplateIDParam: any): any;

  /**
   * Получение url ссылки объекта по Id
   * @param catalogName Каталог объекта
   * @param objectId Id объекта
   * @param oParams Параметры для определения хоста/сессии/etc
   */
  function get_object_source_url(catalogName: string, objectId: number, oParams?: unknown): string;

  function GetTalentPoolObjectsList(iPersonIdParam: any, bAddFuncSubordinatesParam: any, bHideDissmissedParam: any, vBossTypeParam: any, iCareerReserveTypeParam: any): any;
  function GetRequiredQualificationsList(iPersonIDParam: any, sSearchListParam: any, bCatalogListParam: any): any;
  function get_recommended_materials(iPersonIDParam: any, sSearchListParam: any, bCatalogListParam: any, iRootIDParam: any): any;
  function set_var_eval(sVarNamaParam: any, curVars: any, oEvalParam: any, sEvalTypeParam: any): any;
  function get_var_eval(sVarNamaParam: any, curVars: any, oEvalParam: any, sEvalTypeParam: any): any;
  function convert_desc_to_html(sDescParam: any): any;
  function get_user_recommended_learning(iUserIdParam: any, teUser: any): any;

  /**
   * Создание кэша по коду
   * @param userDataCode Код кэша
   * @param valueParam Payload
   * @param ttl Время жизни кэша
   */
  function set_user_data<T>(userDataCode: string, valueParam: T, ttl?: number): void;

  /**
   * Получение кэша по коду
   * @param userDataCode Код кэша
   */
  function get_user_data(userDataCode: string): null | string;

  function remove_user_data(sKeyParam: string): unknown;
  function remove_user_data_by_prefix(sKeyParam: string): unknown;

  function obtain_text_area(iDocIDParam: any, teDocTarget: any): any;
  function get_host_name(sUrlParam: any): any;
  function get_cur_host_name(teHostParam: any, oRequestParam: any): any;
  function get_cur_host_path(teHostParam: any, oRequestParam: any): any;
  function get_cur_host_path_by_url(teHostParam: any, sUrlParam: any): any;
  function get_cur_hosts(oRequestParam: any): any;
  function get_cur_host(oRequestParam: any): any;
  function is_correct_question(fldquestionParam: any, teItemParam: any): any;
  function save_cur_object_doc(docObjectParam: any, oEnvParam: any): any;
  function build_query_url(sUrlPARAM: any, sHostAndPathPARAM: any): any;
  function build_relative_url(sUrlPARAM: any): any;
  function set_modified_response_status(oRequestTarget: any, sUrlParam: any, dtLastModifiedParam: any): any;
  function str_utc_mime_date(dtDateParam: any): any;
  function get_tracking_url(fldLocationParam: any, curHostPath: any): any;
  function create_resource_from_attacment(oAttachmentParam: any, iPersonIDParam: any, tePersonParam: any): any;
  function get_key_positions_list(iPersonIdParam: any, oStructParam: any): any;
  function url_std_content_type(sUrlParam: any): any;
  function is_vfs(): boolean;
  function write_url_to_response(sUrl: any, oRequestParam: any): any;

  /**
   * Декоратор дял простого шифрования функцией StrSimpleEncrypt({objectId}_{date})
   * @param objectId Id объекта
   * @param date Дата
   */
  function encrypt_launch_id(objectId?: number, date?: Date): string;

  function decrypt_launch_id(sLaunchIDParam: any): any;
  function get_valid_url(sUrlParam: any): any;
  function get_active_web_template_hash(sModeParam: any, sAccessLevelParam: any, sAccessRoleParam: any, sSiteIDParam: any, sWebDesignIDParam: any): any;
  function build_submatched_string(sSourceString: any, sRealString: any, sDestString: any): any;
  function get_auth_hash(sSourceParam: any): any;
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
   * Инициализаяция пользователя
   * @param req Объект Request
   * @param query Параметры
   */
  function user_init(req: Request, query: Object): IToolsWebUserInit;

  function GetProjectManagementObjectsList(iPersonIDParam: any, arrCurLngParam: any, bAddFuncSubordinatesParam: any, bHideDissmissedParam: any, bShowProjectManagersParam: any, bOverdueParam: any, bProjectTreeParam: any, bCheckTaskSeeRightsParam: any, vBossTypeParam: any, oStructParam: any): any;
  function CheckRelativeFileVisibility(fldFileParam: any, userId: number, objectId: number, objectTopElem: XmlTopElem): any;
  function get_date_passed_string(dDateParam: any, sCurLngId: any): any;
  function get_date_remain_string(dDateParam: any, sCurLngId: any): any;
  function get_host_obj(Request: any): any;
  function get_cur_lng_obj(oIDParam: any): any;
  function get_cur_object_by_field(Env: any, sFieldParam: string): any;
  function get_cur_web_design(Env: Env): any;
  function get_cur_site(Env: Env): any;
  function get_cur_web_mode(Env: Env): any;
  function get_cur_env(req: Request): Env;
  function get_default_lng_web(oUserParam: any): any;
  function get_profiling_statistic_rec_id(): any;
  function start_profiling_record(oParams: any): any;
  function finish_profiling_record(sID: any): any;
  function GetVacancyResponseStatus(obVacancyResponseParam: any, iVacancyResponseIDParam: any, curLngCommonParam: any): any;
  function html_decode(sParam: any): any;
  function html_to_imput_value(sParam: any): any;

  const content_types: any;

  function get_app_ui(): any;
  function set_st_category(curUserParam: any): any;
  function get_child_by_key_value(fldSourceParam: any, sKeyParam: any, sDefaultValueParam: any): any;
  function get_object_image_url(oObjectParam: any, bDispDefaultParam: any): any;
  function str_file_size(iSizeParam: any, bDispDefaultParam: any): any;
  function get_base_url_path(oEnvParam: any): any;
  function set_base_url_path(sUrlParam: any, oEnvParam: any): any;
  function get_menu_items(sMenuCodeParam: any, iLevelsToShowParam: any, bShowDescParam: any, iCacheTimeParam: any): any;
  function get_secid(iSessionIdParam: any): any;
  function check_secid(sSumParam: any, iSessionIdParam: any): any;
  function clear_person_pict_cache(iPersonIDParam: any): any;
  function get_item_objectives_value(fldItemParam: any): any;
  function obtain_item_objectives_value(fldTarget: any, rValueParam: any, sActionParam: any): any;
  function send_message(vApplication: any, sMessagePARAM: any, sDomainPARAM: any, aUserPARAM: any, oOptionsPARAM: any): any;
  function replace_condition_operators(oConditionsParam: any, iValueParam: any): any;
  function get_header_obj(sHeaderParam: any): any;
  function get_multipart_array(Request: any): any;
  function get_game_rating(curUser: any, bCheckLevel: any, sCurrencyTypeID: any, bAllLevel: any, bDispSub: any, iSubDepth: any, iGrpColl: any, oPaging: any, curUserID: any, bRange: any, iAmntCollsRating: any, sGap: any, bSamePlace: any, bShowTopRating: any): any;
  function get_game_rating_all(bAllLevel: any, bCheckLevel: any, iLevelID: number, bDispSub: any, iSubdivID: number, iSubdivNum: number, sCurrencyTypeID: any, iGrpColl: number, oPaging: Object, bRange: boolean, iAmntCollsRating: number, bSamePlace: boolean, bShowTopRating: boolean): any;
  function get_timezone(iObjectId: any, catObject: any, bReturnNull: any): any;
  function get_timezone_date(dDate: any, catTimeZone1: any, catTimeZone2: any): any;
  function get_class_for_status(sStatus: any): any;
  function get_url_query(sUrlParam: any): any;
  function transform_fancy_url(source: any): any;
  function get_lng_fullname(tePersonParam: any, fldLngParam: any): any;
  function get_language_desc(sDesc: any, oEnv: any): any;
  function set_override_web_params(curParamsTarget: any, catOverrideWebTemplateParam: any): any;
  function access_exists(fldAccessParam: any): any;
  function str_period_date(dtParam: any, curLngWeb: any): any;

  const enabled_web_rules_date: Date;
  const enabled_web_rules_obj: any;

  function get_enabled_web_rules(): any;

  const std_web_rules_obj: any;

  function get_std_web_rules(): any;
  function get_mode_clean_url(sModeParam: any, iObjectIDParam: any, oParams: any): any;
  function get_web_mode_clean_url(oWebModeParam: any, iObjectIDParam: any, oParams: any): any;
  function convert_mode_clean_url(sUrlParam: any): any;
  function get_clean_url_exc_query(sUrlParam: any, sExcParams: any, oParams: any): any;
  function obtain_shared_temp_file(sSuffixParam: any): any;
  function encode_url_reserved(sUrlParam: any): any;
  function decode_url_reserved(sUrlParam: any): any;
  function get_remote_action_param(aNames: any, TOPELEM: any): any;
  function check_collection_access(oCurUserParam: any, oObjectParam: any, sPersonAccessType: any): any;
  function get_empty_env(): any;
  function get_empty_request(): any;
  function get_admin_request(): any;
  function parse_multiple_parameter(Param: any): any;
  function get_md5_id(hash: string): any;
  function check_object(xmCurObject: any, sType: string): any;
  function check_redirect_url(sUrlParam: string): any;
  function check_web_rule_by_url(sUrlParam: string, Request: Request): any;
}

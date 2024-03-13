declare namespace tools_i18n {
  let default_locale: XmlElem<string>;
  let default_path: XmlElem<string>;
  let default_path_new_portal: XmlElem<string>;
  let default_path_common: XmlElem<string>;
  let default_const_func_begin: XmlElem<string>;
  let locale_cache: XmlElem<unknown>;
  let cwt_wvar_mapping_cache: XmlElem<unknown>;
  let active_i18n_obj: XmlElem<unknown>;
  function get_active_i18n(): unknown;
  let components_obj: XmlElem<unknown>;
  function components(): unknown;
  function t(sConstParam: string, oI18nParam: unknown): unknown;
  function get_cur_i18n(oI18nParam: unknown, sLocaleParam: string): unknown;
  function get_const_key(sLocaleParam: string, sCodeParam: string, sConstParam: string): unknown;
  function get_locale_cache_field(sFieldNameParam: string): unknown;
  function put_locale_cache_field(sFieldNameParam: string, sFieldValueParam: string): unknown;
  function get_const_ids_from_func_text(sSourceCodeParam: string): unknown;
  function get_cwt_wvar_mapping(): unknown;
  function translate_object_fields(fldObjectTarget: unknown, curLocale: unknown, sFieldsParam: string): unknown;
  function save_const_translate_data(): unknown;
  function obtain_const_translate_data(sUrlParam: string): unknown;
}

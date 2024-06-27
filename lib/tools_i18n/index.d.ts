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
  function t(param: string, i18n: unknown): unknown;
  function get_cur_i18n(i18n: unknown, locale: string): {
    locale: string;
    code: string;
    load_path: unknown[];
  };
  function get_const_key(locale: string, code: string, param: string): unknown;
  function get_locale_cache_field(fieldName: string): unknown;
  function put_locale_cache_field(fieldName: string, fieldValue: string): unknown;
  function get_const_ids_from_func_text(sourceCode: string): unknown;
  function get_cwt_wvar_mapping(): unknown;
  function translate_object_fields(fldObjectTarget: unknown, curLocale: unknown, fields: string): unknown;
  function save_const_translate_data(): unknown;
  function obtain_const_translate_data(url: string): unknown;
}

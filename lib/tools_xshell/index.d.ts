declare namespace tools_xshell {
  let uni_settings: XmlElem<unknown>;
  let dotnet_console: XmlElem<unknown>;
  let dotnet_env_ext: XmlElem<unknown>;
  let dotnet_auth: XmlElem<unknown>;
  let dotnet_utils: XmlElem<unknown>;
  function xshell(shellParams: unknown): unknown;
  function xshell_command(command: unknown, ocmdParams: unknown): unknown;
  function rebuild_catalogs(cmdParams: unknown): unknown;
  function rebuild_person_hierarchy(cmdParams: unknown): unknown;
  function list_packages(cmdParams: unknown): unknown;
  function process_packages(cmdParams: unknown): unknown;
  function get_application_type(): unknown;
  function get_application_info(cmdParams: unknown): unknown;
  function get_application_config(cmdParams: unknown): unknown;
  function set_application_config(cmdParams: unknown): unknown;
  function set_application_type(cmdParams: unknown): unknown;
  function set_database_config(cmdParams: unknown): unknown;
  function get_database_type(): unknown;
  function get_database_info(cmdParams: unknown): unknown;
  function get_database_config(cmdParams: unknown): unknown;
  function set_database_type(cmdParams: unknown): unknown;
  function get_database_provider(): unknown;
  function create_database(parsedCmdObj: unknown): unknown;
  function initialize_database(parsedCmdObj: unknown): unknown;
  function list_database_tasks(parsedCmdObj: unknown): unknown;
  function stop_database_task(parsedCmdObj: unknown): unknown;
  function migrate_database(parsedCmdObj: unknown): unknown;
  function get_current_domain(): unknown;
  function get_computer_name(): unknown;
  function console(value: unknown): unknown;
  function get_cmd_param_index(cmdParams: unknown, key: unknown, keyValue: unknown): unknown;
  function set_debug_mode(mode: unknown, turnSwitch: unknown): unknown;
  function set_collect_mode(mode: unknown, turnSwitch: unknown, argsSwitch: unknown, format: unknown, output: unknown, background: unknown): unknown;
  function list_components(cmdParams: unknown): unknown;
  function process_components(cmdParams: unknown): unknown;
  function delete_components(cmdParams: unknown): unknown;
}
declare namespace tools_vscode {
  function execute(iObjectIdPARAM: number, sJSONEnvPARAM: string): unknown;
  function add_in_application(sCatalogName: string, iObjectIdPARAM: number, iApplicationIdPARAM: number): unknown;
  function get_catalog_param(sCatalogName: string): unknown;
}

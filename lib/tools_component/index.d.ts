declare namespace tools_component {
  function init_forms(): unknown;
  function call_method(libName: string, methodName: string, arrParams: unknown): unknown;
  function update_component(libName: string, methodName: string, arrParams: unknown): unknown;
}

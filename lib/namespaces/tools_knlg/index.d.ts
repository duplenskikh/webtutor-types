declare namespace tools_knlg {
  function alerd(text: string, debug: boolean): unknown;
  function update_acquaint_assign(acquaintId: number, acquaintTopElem: unknown, del: boolean, debug: boolean): unknown;
  function activate_learning_task(param: unknown): unknown;
  function set_status_learning_task_result(param: unknown): unknown;
  function http_request(url: string, s: string, onServer: boolean): unknown;
  function http_request_obj(url: string, method: string, s: string, header: string, onServer: boolean): unknown;
  function get_http_request_file_id(url: string, method: string, s: string, header: string, onServer: boolean, fileUrl: string, fileName: string): unknown;
  function base64_encode(str: string): unknown;
  function get_article_desc(desc: string, newUrl: string, query: string): unknown;
}

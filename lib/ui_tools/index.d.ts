declare namespace ui_tools {
  function eval_entry_action(oEntryParam: unknown): unknown;
  function set_clipboard(sValueParam: string, sTitleParam: string, bShowMessageParam: boolean): unknown;
  function get_richtext_editor_source(oItem: unknown): unknown;
  function list_elem_delete_action(Screen: unknown, ListElem: unknown, TopElem: unknown): unknown;
  function list_elem_open_action(Screen: unknown): unknown;
  function generate_qr(Screen: unknown, object_id: number, forWhat: unknown): unknown;
}

type ViewResponsesDocumentTopElem = XmlTopElem &
MsViewCatalogBase &
ViewColumnsBase & {
  Doc: ViewResponsesDocument;
  select_mode: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  response_type_id: XmlElem<number, ResponseTypeCatalogDocumentTopElem>;
  response_type_object: XmlElem<unknown>;
  rows: XmlElem<unknown>;
  rows_requests: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string, gridItemName: string): number;
};

type ViewResponsesDocument = XmlDocument & {
  TopElem: ViewResponsesDocumentTopElem;
  view_responses: ViewResponsesDocumentTopElem;
  OnInit(): void;
};

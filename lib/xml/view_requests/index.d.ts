type ViewRequestsDocumentTopElem = XmlTopElem &
MsViewCatalogBase &
ViewColumnsBase & {
  Doc: ViewRequestsDocument;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  request_type_id: XmlElem<number, RequestTypeCatalogDocumentTopElem>;
  request_type_object: XmlElem<unknown>;
  select_mode: XmlElem<string>;
  rows: XmlElem<unknown>;
  rows_requests: XmlElem<unknown>;
  row_disp_elem: XmlElem<string>;
  row_list_field: XmlElem<string>;
  row_key_field: XmlElem<string>;
  start_action(type: string, gridItemName: string): number;
};

type ViewRequestsDocument = XmlDocument & {
  TopElem: ViewRequestsDocumentTopElem;
  view_requests: ViewRequestsDocumentTopElem;
  OnInit(): void;
};

interface RequestTypeDocumentCreateCode {
  code: XmlElem<string | null>;
  code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
}

type RequestTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase & {
  Doc: RequestTypeDocument;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  object_query_qual: XmlElem<string | null>;
  is_group: XmlElem<boolean>;
  is_can_be_group: XmlElem<boolean>;
  is_can_be_add_youself: XmlElem<boolean>;
  hide_portal_comment: XmlElem<boolean>;
  forbid_rejection: XmlElem<boolean>;
  forbid_copy: XmlElem<boolean>;
  boss_only: XmlElem<boolean>;
  show_all: XmlElem<boolean>;
  ignore_black_list: XmlElem<boolean | null>;
  workflow_id: XmlElem<number | null, WorkflowCatalogDocumentTopElem>;
  create_message: XmlElem<string | null>;
  use_standart_processing: XmlElem<boolean>;
  create_code: XmlElem<RequestTypeDocumentCreateCode | null>;
  processing_code: XmlElem<string | null>;
  processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  reject_processing_code: XmlElem<string | null>;
  reject_processing_code_library_id: XmlElem<number | null, CodeLibraryCatalogDocumentTopElem>;
  request_custom_web_template_id: XmlElem<number | null, CustomWebTemplateCatalogDocumentTopElem>;
  reject_redirect_url: XmlElem<string | null>;
  remote_action_id: XmlElem<number | null, RemoteActionCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  desc: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type RequestTypeDocument = XmlDocument & {
  TopElem: RequestTypeDocumentTopElem;
  request_type: RequestTypeDocumentTopElem;
  DocDesc(): string;
};

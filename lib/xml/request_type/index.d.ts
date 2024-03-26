type RequestTypeDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
WebVariablesBase & {
  Doc: RequestTypeDocument;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  object_query_qual: XmlElem<string>;
  is_group: XmlElem<boolean>;
  is_can_be_group: XmlElem<boolean>;
  is_can_be_add_youself: XmlElem<boolean>;
  hide_portal_comment: XmlElem<boolean>;
  forbid_rejection: XmlElem<boolean>;
  forbid_copy: XmlElem<boolean>;
  boss_only: XmlElem<boolean>;
  show_all: XmlElem<boolean>;
  ignore_black_list: XmlElem<boolean>;
  workflow_id: XmlElem<number, WorkflowCatalogDocumentTopElem>;
  create_message: XmlElem<string>;
  use_standart_processing: XmlElem<boolean>;
  processing_code: XmlElem<string>;
  reject_processing_code: XmlElem<string>;
  request_custom_web_template_id: XmlElem<number, CustomWebTemplateCatalogDocumentTopElem>;
  reject_redirect_url: XmlElem<string>;
  remote_action_id: XmlElem<number, RemoteActionCatalogDocumentTopElem>;
  access: XmlElem<AccessDocBase>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  desc: XmlElem<string>;
  disp_block: XmlElem<MsDispBlockBase>;
  role_id: XmlMultiElemObject<number>;
};

type RequestTypeDocument = XmlDocument & {
  TopElem: RequestTypeDocumentTopElem;
  request_type: RequestTypeDocumentTopElem;
  DocDesc(): string;
};

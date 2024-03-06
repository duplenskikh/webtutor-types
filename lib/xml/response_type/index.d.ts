type ResponseTypeDocumentTopElem = XmlTopElem & {
  Doc: ResponseTypeDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string, typeof common.exchange_object_types>;
  create_redirect: XmlElem<string>;
  basic_desc_field: XmlElem<string>;
  basic_score_field: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  disp_block: XmlElem<MsDispBlockBase>;
  role_id: XmlMultiElemObject<number>;
};

type ResponseTypeDocument = XmlDocument & {
  TopElem: ResponseTypeDocumentTopElem;
  response_type: ResponseTypeDocumentTopElem;
  DocDesc(): unknown;
};

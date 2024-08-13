type ResponseTypeDocumentTopElem = XmlTopElem & {
  Doc: ResponseTypeDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  object_type: XmlElem<string | null, typeof common.exchange_object_types>;
  create_redirect: XmlElem<string | null>;
  basic_desc_field: XmlElem<string | null>;
  basic_score_field: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  disp_block: XmlElem<MsDispBlockBase | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type ResponseTypeDocument = XmlDocument & {
  TopElem: ResponseTypeDocumentTopElem;
  response_type: ResponseTypeDocumentTopElem;
  DocDesc(): string;
};

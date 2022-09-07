type ResponseTypeDocumentTopElem = XmlTopElem & { Doc: ResponseTypeDocument } & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_type: XmlElem<string>;
  create_redirect: XmlElem<string>;
  basic_desc_field: XmlElem<string>;
  basic_score_field: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  role_id: XmlMultiElem<number>;
}

type ResponseTypeDocument = XmlDocument & { TopElem: ResponseTypeDocumentTopElem; };

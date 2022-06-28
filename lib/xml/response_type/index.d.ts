interface IWTResponseTypeTopElem {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  object_type?: XmlElem<string>;
  create_redirect?: XmlElem<string>;
  basic_desc_field?: XmlElem<string>;
  basic_score_field?: XmlElem<string>;
  doc_info?: XmlElem<IWTDocInfoBase>;
  comment?: XmlElem<string>;
  disp_block?: XmlElem<any>;
}

type IWTResponseTypeDocument = IWTXmlDocument<IWTResponseTypeTopElem>;

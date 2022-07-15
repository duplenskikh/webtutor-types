interface CodingTopElem extends XmlTopElem<CodingDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  catalog_name?: XmlElem<string>;
  prefix?: XmlElem<string>;
  next_index?: XmlElem<number>;
  digits_num?: XmlElem<number>;
  field_name?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  obtain_code?(): any;
}

type CodingDocument = XmlDocument<CodingTopElem>;

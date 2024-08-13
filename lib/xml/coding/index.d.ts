type CodingDocumentTopElem = XmlTopElem & {
  Doc: CodingDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  catalog_name: XmlElem<string | null, typeof common.exchange_object_types>;
  prefix: XmlElem<string | null>;
  next_index: XmlElem<number>;
  digits_num: XmlElem<number>;
  field_name: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  obtain_code(): string;
};

type CodingDocument = XmlDocument & {
  TopElem: CodingDocumentTopElem;
  coding: CodingDocumentTopElem;
  DocDesc(): string;
};

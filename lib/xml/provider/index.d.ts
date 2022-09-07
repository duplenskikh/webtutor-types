type ProviderDocumentTopElem = XmlTopElem & { Doc: ProviderDocument } & 
CustomElemsBase &
FileListBase & {
  code: XmlElem<string>;
  name: XmlElem<string>;
  provider_product: XmlElem<boolean>;
  comment: XmlElem<string>;
  dimension_id: XmlElem<number>;
  role_id: XmlMultiElem<number>;
  doc_info: XmlElem<DocInfoBase>;
  desc: XmlElem<string>;
}

type ProviderDocument = XmlDocument & {
  TopElem: ProviderDocumentTopElem;
};

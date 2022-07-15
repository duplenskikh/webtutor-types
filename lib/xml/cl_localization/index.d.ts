interface ClLocalizationTopElem extends XmlTopElem<ClLocalizationDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  access?: XmlElem<AccessDocBase>;
}

type ClLocalizationDocument = XmlDocument<ClLocalizationTopElem>;

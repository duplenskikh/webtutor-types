type ClLocalizationDocumentTopElem = XmlTopElem & {
  Doc: ClLocalizationDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  access: XmlElem<AccessDocBase>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ClLocalizationDocument = XmlDocument & {
  TopElem: ClLocalizationDocumentTopElem;
  cl_localization: ClLocalizationDocumentTopElem;
  DocDesc(): unknown;
};

type ClLocalizationDocumentTopElem = XmlTopElem & {
  Doc: ClLocalizationDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  access: XmlElem<AccessDocBase | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ClLocalizationDocument = XmlDocument & {
  TopElem: ClLocalizationDocumentTopElem;
  cl_localization: ClLocalizationDocumentTopElem;
  DocDesc(): string;
};

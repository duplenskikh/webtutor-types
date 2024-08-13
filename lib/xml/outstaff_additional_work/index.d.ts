type OutstaffAdditionalWorkDocumentTopElem = XmlTopElem & {
  Doc: OutstaffAdditionalWorkDocument;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type OutstaffAdditionalWorkDocument = XmlDocument & {
  TopElem: OutstaffAdditionalWorkDocumentTopElem;
  outstaff_additional_work: OutstaffAdditionalWorkDocumentTopElem;
};

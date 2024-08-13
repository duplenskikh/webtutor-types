type ExclusionReasonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ExclusionReasonDocument;
  access: XmlElem<AccessDocBase | null>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
};

type ExclusionReasonDocument = XmlDocument & {
  TopElem: ExclusionReasonDocumentTopElem;
  exclusion_reason: ExclusionReasonDocumentTopElem;
  DocDesc(): string;
};

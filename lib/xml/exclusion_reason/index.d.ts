type ExclusionReasonDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: ExclusionReasonDocument;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type ExclusionReasonDocument = XmlDocument & {
  TopElem: ExclusionReasonDocumentTopElem;
  exclusion_reason: ExclusionReasonDocumentTopElem;
  DocDesc(): string;
};

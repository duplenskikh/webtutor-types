type ExclusionReasonDocumentTopElem = XmlTopElem & { Doc: ExclusionReasonDocument } & 
ObjectCodeNameBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
}

type ExclusionReasonDocument = XmlDocument & { TopElem: ExclusionReasonDocumentTopElem; };

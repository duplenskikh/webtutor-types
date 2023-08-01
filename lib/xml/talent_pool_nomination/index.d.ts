type TalentPoolNominationDocumentTopElem = XmlTopElem & { Doc: TalentPoolNominationDocument } & 
ObjectCodeNameBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TalentPoolNominationDocument = XmlDocument & {
  TopElem: TalentPoolNominationDocumentTopElem;
};

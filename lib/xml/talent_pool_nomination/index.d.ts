type TalentPoolNominationDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
FileListBase &
CustomElemsBase &
AdminAccessBase & {
  Doc: TalentPoolNominationDocument;
  access: XmlElem<AccessDocBase>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
};

type TalentPoolNominationDocument = XmlDocument & {
  TopElem: TalentPoolNominationDocumentTopElem;
};

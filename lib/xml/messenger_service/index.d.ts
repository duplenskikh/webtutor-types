type MessengerServiceDocumentTopElem = XmlTopElem & { Doc: MessengerServiceDocument } & 
CustomElemsBase &
FileListBase & {
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  desc: XmlElem<string>;
};

type MessengerServiceDocument = XmlDocument & {
  TopElem: MessengerServiceDocumentTopElem;
};

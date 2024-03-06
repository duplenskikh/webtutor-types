type MessengerServiceDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: MessengerServiceDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  desc: XmlElem<string>;
};

type MessengerServiceDocument = XmlDocument & {
  TopElem: MessengerServiceDocumentTopElem;
  messenger_service: MessengerServiceDocumentTopElem;
  OnInit(): unknown;
  DocDesc(): unknown;
};

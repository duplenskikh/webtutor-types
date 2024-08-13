type MessengerServiceDocumentTopElem = XmlTopElem &
CustomElemsBase &
FileListBase & {
  Doc: MessengerServiceDocument;
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  desc: XmlElem<string | null>;
};

type MessengerServiceDocument = XmlDocument & {
  TopElem: MessengerServiceDocumentTopElem;
  messenger_service: MessengerServiceDocumentTopElem;
  OnInit(): void;
  DocDesc(): string;
};

interface MessengerServiceView extends DescBase {
}

interface MessengerServiceTopElem extends XmlTopElem<MessengerServiceDocument>, CustomElemsBase, FileListBase {
  id?: XmlElem<number>;
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  doc_info?: XmlElem<DocInfoBase>;
  desc?: XmlElem<string>;
  view?: XmlElem<MessengerServiceView>;
}

type MessengerServiceDocument = XmlDocument<MessengerServiceTopElem>;

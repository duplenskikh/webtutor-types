type DlgCreateGoodInstanceDocumentTopElem = XmlTopElem & {
  Doc: DlgCreateGoodInstanceDocument;
  instances_num: XmlElem<number>;
  name: XmlElem<string>;
  good_id: XmlElem<number, GoodCatalogDocumentTopElem>;
  desc: XmlElem<string>;
  resource_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  error_text: XmlElem<string>;
};

type DlgCreateGoodInstanceDocument = XmlDocument & {
  TopElem: DlgCreateGoodInstanceDocumentTopElem;
  dlg_create_good_instance: DlgCreateGoodInstanceDocumentTopElem;
};

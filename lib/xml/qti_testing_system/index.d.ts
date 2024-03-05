type QtiTestingSystemDocumentTopElem = XmlTopElem &
MsParametersBase &
AdminAccessBase & {
  Doc: QtiTestingSystemDocument;
  id: XmlElem<number>;
  code: XmlElem<string>;
  name: XmlElem<string>;
  library_url: XmlElem<string>;
  script: XmlElem<string>;
  imported: XmlElem<boolean>;
  import_url: XmlElem<string>;
  test_launch_type: XmlElem<string>;
  desc: XmlElem<string>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase>;
};

type QtiTestingSystemDocument = XmlDocument & {
  TopElem: QtiTestingSystemDocumentTopElem;
};

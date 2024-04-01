interface QtiTestingSystemDocumentTestingSystem extends ExecCodeBase, MsParametersBase, AdminAccessBase {
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
}

type QtiTestingSystemDocumentTopElem = XmlTopElem & {
  Doc: QtiTestingSystemDocument;
};

type QtiTestingSystemDocument = XmlDocument & {
  TopElem: QtiTestingSystemDocumentTopElem;
  qti_testing_system: QtiTestingSystemDocumentTopElem;
  testing_system: XmlElem<QtiTestingSystemDocumentTestingSystem>;
  DocDesc(): string;
};

interface QtiTestingSystemDocumentTestingSystem extends ExecCodeBase, MsParametersBase, AdminAccessBase {
  id: XmlElem<number | null>;
  code: XmlElem<string | null>;
  name: XmlElem<string | null>;
  library_url: XmlElem<string | null>;
  script: XmlElem<string | null>;
  imported: XmlElem<boolean>;
  import_url: XmlElem<string | null>;
  test_launch_type: XmlElem<string>;
  desc: XmlElem<string | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  doc_info: XmlElem<DocInfoBase | null>;
}

type QtiTestingSystemDocumentTopElem = XmlTopElem & {
  Doc: QtiTestingSystemDocument;
};

type QtiTestingSystemDocument = XmlDocument & {
  TopElem: QtiTestingSystemDocumentTopElem;
  qti_testing_system: QtiTestingSystemDocumentTopElem;
  testing_system: XmlElem<QtiTestingSystemDocumentTestingSystem | null>;
  DocDesc(): string;
};

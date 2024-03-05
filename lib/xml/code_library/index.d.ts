interface CodeLibraryDocumentMethodBlockMethod extends WebVariablesBase {
  name: XmlElem<string>;
  description: XmlElem<string>;
}

interface CodeLibraryDocumentMethodBlock {
  methods: XmlMultiElem<CodeLibraryDocumentMethodBlockMethod>;
}

interface CodeLibraryDocumentAssociatedApplication {
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
}

interface CodeLibraryDocumentParameterMap {
  application_id: XmlElem<number, ApplicationCatalogDocumentTopElem>;
  application_name: XmlElem<string>;
  library_param: XmlElem<string>;
  application_param: XmlElem<string>;
}

type CodeLibraryDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase &
I18nBase & {
  Doc: CodeLibraryDocument;
  doc_info: XmlElem<DocInfoBase>;
  comment: XmlElem<string>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  method_block: XmlElem<CodeLibraryDocumentMethodBlock>;
  associated_applications: XmlMultiElem<CodeLibraryDocumentAssociatedApplication>;
  parameter_maps: XmlMultiElem<CodeLibraryDocumentParameterMap>;
  role_id: XmlMultiElemObject<number>;
};

type CodeLibraryDocument = XmlDocument & {
  TopElem: CodeLibraryDocumentTopElem;
};

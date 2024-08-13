interface CodeLibraryDocumentMethodBlockMethod extends WebVariablesBase {
  name: XmlElem<string | null>;
  description: XmlElem<string | null>;
}

interface CodeLibraryDocumentMethodBlock {
  methods: XmlMultiElem<CodeLibraryDocumentMethodBlockMethod | null>;
}

interface CodeLibraryDocumentAssociatedApplication {
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
}

interface CodeLibraryDocumentParameterMap {
  application_id: XmlElem<number | null, ApplicationCatalogDocumentTopElem>;
  application_name: XmlElem<string | null>;
  library_param: XmlElem<string | null>;
  application_param: XmlElem<string | null>;
}

type CodeLibraryDocumentTopElem = XmlTopElem &
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase &
I18nBase & {
  Doc: CodeLibraryDocument;
  doc_info: XmlElem<DocInfoBase | null>;
  comment: XmlElem<string | null>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  method_block: XmlElem<CodeLibraryDocumentMethodBlock | null>;
  associated_applications: XmlMultiElem<CodeLibraryDocumentAssociatedApplication | null>;
  parameter_maps: XmlMultiElem<CodeLibraryDocumentParameterMap | null>;
  role_id: XmlMultiElemObject<number | null>;
};

type CodeLibraryDocument = XmlDocument & {
  TopElem: CodeLibraryDocumentTopElem;
  code_library: CodeLibraryDocumentTopElem;
  OnSave(): void;
  DocDesc(): string;
};

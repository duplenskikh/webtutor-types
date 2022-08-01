type CodeLibraryDocumentTopElem = XmlTopElem & { Doc: CodeLibraryDocument } & 
ObjectCodeNameBase &
ExecCodeBase &
WebVariablesBase & {
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  role_id?: XmlMultiElem<number>;
}

type CodeLibraryDocument = XmlDocument & { TopElem: CodeLibraryDocumentTopElem; };

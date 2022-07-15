interface VerbTopElem extends XmlTopElem<VerbDocument> {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  processed?: XmlElem<boolean>;
  processing_code_url?: XmlElem<string>;
  processing_code?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  code_process?(): any;
}

type VerbDocument = XmlDocument<VerbTopElem>;

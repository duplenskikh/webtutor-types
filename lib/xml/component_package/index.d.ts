interface ComponentPackageView extends DescBase {
}

interface ComponentPackageTopElem extends XmlTopElem<ComponentPackageDocument>, FileListBase, KnowledgePartsBase, CustomElemsBase {
  code?: XmlElem<string>;
  name?: XmlElem<string>;
  comment?: XmlElem<string>;
  download_date?: XmlElem<Date>;
  is_download?: XmlElem<boolean>;
  is_install?: XmlElem<boolean>;
  type_id?: XmlElem<string>;
  component_modification_date?: XmlElem<Date>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  download_package_file_id?: XmlElem<number>;
  doc_info?: XmlElem<DocInfoBase>;
  text_area?: XmlElem<string>;
  access?: XmlElem<AccessDocBase>;
  view?: XmlElem<ComponentPackageView>;
  load_file?(): any;
}

type ComponentPackageDocument = XmlDocument<ComponentPackageTopElem>;

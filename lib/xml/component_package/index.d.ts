type ComponentPackageDocumentTopElem = XmlTopElem &
FileListBase &
KnowledgePartsBase &
CustomElemsBase & {
  Doc: ComponentPackageDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  comment: XmlElem<string>;
  download_date: XmlElem<Date>;
  is_download: XmlElem<boolean>;
  is_install: XmlElem<boolean>;
  type_id: XmlElem<string, typeof common.access_block_types>;
  component_modification_date: XmlElem<Date>;
  is_std: XmlElem<boolean>;
  changed: XmlElem<boolean>;
  download_package_file_id: XmlElem<number, ResourceCatalogDocumentTopElem>;
  doc_info: XmlElem<DocInfoBase>;
  access: XmlElem<AccessDocBase>;
  text_area: XmlElem<string>;
  load_file(tData: unknown, source: string, needInstall: unknown): unknown;
};

type ComponentPackageDocument = XmlDocument & {
  TopElem: ComponentPackageDocumentTopElem;
  component_package: ComponentPackageDocumentTopElem;

};

interface ObjectDataTypeDispBlock extends MsDispBlockBase {
}

interface ObjectDataTypeView extends DescBase {
}

interface ObjectDataTypeTopElem extends XmlTopElem<ObjectDataTypeDocument>, ObjectCodeNameBase {
  object_type?: XmlElem<string>;
  sec_object_type?: XmlElem<string>;
  is_std?: XmlElem<boolean>;
  changed?: XmlElem<boolean>;
  doc_info?: XmlElem<DocInfoBase>;
  comment?: XmlElem<string>;
  desc?: XmlElem<string>;
  disp_block?: XmlElem<MsDispBlockBase>;
  role_id?: XmlMultiElem<number>;
  disp_block?: XmlElem<ObjectDataTypeDispBlock>;
  view?: XmlElem<ObjectDataTypeView>;
}

type ObjectDataTypeDocument = XmlDocument<ObjectDataTypeTopElem>;

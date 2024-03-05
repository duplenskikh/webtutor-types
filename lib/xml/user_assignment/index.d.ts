interface UserAssignmentDocumentXRowHeaderYColXRowEssentialValue {
  x_row_essential_value_id: XmlElem<number>;
  x_row_essential_value_name: XmlElem<string>;
}

interface UserAssignmentDocumentXRowHeaderYCol {
  y_col_id: XmlElem<string>;
  x_row_value: XmlElem<string>;
  flag_once: XmlElem<boolean>;
  x_row_essential_values: XmlMultiElem<UserAssignmentDocumentXRowHeaderYColXRowEssentialValue>;
}

interface UserAssignmentDocumentXRowHeader {
  x_row_header_id: XmlElem<string>;
  x_row_header_value: XmlElem<string>;
  x_row_header_hierarchy: XmlElem<boolean>;
  x_row_option_type: XmlElem<string, typeof common.all_option_types>;
  y_cols: XmlMultiElem<UserAssignmentDocumentXRowHeaderYCol>;
}

interface UserAssignmentDocumentYColHeader {
  y_col_header_id: XmlElem<string>;
  y_col_header_value: XmlElem<string>;
  y_row_option_type: XmlElem<string, typeof common.all_option_types>;
}

type UserAssignmentDocumentTopElem = XmlTopElem &
ViewConditionsBase & {
  Doc: UserAssignmentDocument;
  code: XmlElem<string>;
  name: XmlElem<string>;
  object_name: XmlElem<string, typeof common.exchange_object_types>;
  object_id: XmlElem<number>;
  x_type: XmlElem<string>;
  x_type_name: XmlElem<string>;
  x_type_type: XmlElem<string>;
  x_is_custom: XmlElem<boolean>;
  x_foreign_catalog: XmlElem<string>;
  y_type: XmlElem<string>;
  y_type_name: XmlElem<string>;
  y_type_type: XmlElem<string>;
  y_is_custom: XmlElem<boolean>;
  y_foreign_catalog: XmlElem<string>;
  disp_edit: XmlElem<boolean>;
  cell_action: XmlElem<string>;
  x_row_headers: XmlMultiElem<UserAssignmentDocumentXRowHeader>;
  y_col_headers: XmlMultiElem<UserAssignmentDocumentYColHeader>;
  comment: XmlElem<string>;
  doc_info: XmlElem<DocInfoBase>;
  role_id: XmlMultiElemObject<number>;
};

type UserAssignmentDocument = XmlDocument & {
  TopElem: UserAssignmentDocumentTopElem;
};

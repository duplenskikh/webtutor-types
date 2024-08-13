interface UserAssignmentDocumentXRowHeaderYColXRowEssentialValue {
  x_row_essential_value_id: XmlElem<number | null>;
  x_row_essential_value_name: XmlElem<string | null>;
}

interface UserAssignmentDocumentXRowHeaderYCol {
  y_col_id: XmlElem<string | null>;
  x_row_value: XmlElem<string | null>;
  flag_once: XmlElem<boolean | null>;
  x_row_essential_values: XmlMultiElem<UserAssignmentDocumentXRowHeaderYColXRowEssentialValue | null>;
}

interface UserAssignmentDocumentXRowHeader {
  x_row_header_id: XmlElem<string | null>;
  x_row_header_value: XmlElem<string | null>;
  x_row_header_hierarchy: XmlElem<boolean>;
  x_row_option_type: XmlElem<string, typeof common.all_option_types>;
  y_cols: XmlMultiElem<UserAssignmentDocumentXRowHeaderYCol | null>;
}

interface UserAssignmentDocumentYColHeader {
  y_col_header_id: XmlElem<string | null>;
  y_col_header_value: XmlElem<string | null>;
  y_row_option_type: XmlElem<string, typeof common.all_option_types>;
}

type UserAssignmentDocumentTopElem = XmlTopElem &
ViewConditionsBase & {
  Doc: UserAssignmentDocument;
  /** Код */
  code: XmlElem<string | null>;
  /** Название */
  name: XmlElem<string | null>;
  /** Название объекта */
  object_name: XmlElem<string | null, typeof common.exchange_object_types>;
  /** Объект */
  object_id: XmlElem<number | null>;
  /** Строки */
  x_type: XmlElem<string | null>;
  x_type_name: XmlElem<string | null>;
  /** Тип строки */
  x_type_type: XmlElem<string | null>;
  x_is_custom: XmlElem<boolean | null>;
  /** Каталог */
  x_foreign_catalog: XmlElem<string | null>;
  /** Столбцы */
  y_type: XmlElem<string | null>;
  y_type_name: XmlElem<string | null>;
  /** Тип столбца */
  y_type_type: XmlElem<string | null>;
  y_is_custom: XmlElem<boolean | null>;
  /** Каталог */
  y_foreign_catalog: XmlElem<string | null>;
  disp_edit: XmlElem<boolean>;
  /** Действие */
  cell_action: XmlElem<string | null>;
  /** Строки */
  x_row_headers: XmlMultiElem<UserAssignmentDocumentXRowHeader | null>;
  /** Столбцы */
  y_col_headers: XmlMultiElem<UserAssignmentDocumentYColHeader | null>;
  comment: XmlElem<string | null>;
  doc_info: XmlElem<DocInfoBase | null>;
  /** Категория */
  role_id: XmlMultiElemObject<number | null>;
};

type UserAssignmentDocument = XmlDocument & {
  TopElem: UserAssignmentDocumentTopElem;
  user_assignment: UserAssignmentDocumentTopElem;
  DocDesc(): string;
};

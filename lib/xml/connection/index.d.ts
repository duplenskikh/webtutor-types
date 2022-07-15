interface ConnectionTopElem extends XmlTopElem<ConnectionDocument> {
  course_id?: XmlElem<number>;
  part_code?: XmlElem<string>;
  user_id?: XmlElem<number>;
  user_code?: XmlElem<string>;
  user_fullname?: XmlElem<string>;
  active_learning_id?: XmlElem<number>;
  learning_xml?: XmlElem<string>;
  state?: XmlElem<string>;
  creation_date?: XmlElem<Date>;
  delete_date?: XmlElem<Date>;
  unauthorized?: XmlElem<boolean>;
  host_path?: XmlElem<string>;
  get_info?(): any;
}

type ConnectionDocument = XmlDocument<ConnectionTopElem>;

declare namespace tools_lrs {
  function check_IRI(sIRIParam: string): unknown;
  function get_person_id_from_actor(oActorParam: unknown): unknown;
  function create_statement(oStatementParam: unknown, sCodeParam: string, iLRSIDParam: number, arrMultipartParam: unknown): unknown;
  function id_to_uuid(sIDParam: string, sSecIDParam: string): unknown;
  function uuid_to_id(sIDParam: string): unknown;
  function actor_from_person(oUserParam: unknown): unknown;
  function launch_cmi5_learning(oActiveObjectParam: unknown, oObjectParam: unknown, oUserParam: unknown, oParam: unknown): unknown;
  function get_fetch_token(iUserIDParam: number): unknown;
  function get_fetch_obj(oParams: unknown): unknown;
  function get_agent_json_str(oAgentParam: unknown): unknown;
}

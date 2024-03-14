declare namespace tools_lrs {
  function check_IRI(iRI: string): unknown;
  function get_person_id_from_actor(actor: unknown): unknown;
  function create_statement(statement: unknown, code: string, lRSId: number, arrMultipart: unknown): unknown;
  function id_to_uuid(id: string, secId: string): unknown;
  function uuid_to_id(id: string): unknown;
  function actor_from_person(user: unknown): unknown;
  function launch_cmi5_learning(activeObject: unknown, object: unknown, user: unknown, param: unknown): unknown;
  function get_fetch_token(userId: number): unknown;
  function get_fetch_obj(params: unknown): unknown;
  function get_agent_json_str(agent: unknown): unknown;
}

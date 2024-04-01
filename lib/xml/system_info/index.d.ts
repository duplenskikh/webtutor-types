interface SystemInfoDocumentSystemInfoSystem {
  os_version: XmlElem<string>;
  os_bit: XmlElem<string>;
  process_bit: XmlElem<string>;
  total_memory: XmlElem<string>;
  available_memory: XmlElem<string>;
  cpu_count: XmlElem<string>;
  cpu_usage: XmlElem<string>;
}

interface SystemInfoDocumentSystemInfoProcess {
  name: XmlElem<string>;
  cpu_usage: XmlElem<string>;
  memory_usage: XmlElem<string>;
}

interface SystemInfoDocumentSystemInfo {
  system: XmlElem<SystemInfoDocumentSystemInfoSystem>;
  processes: XmlMultiElem<SystemInfoDocumentSystemInfoProcess>;
}

interface SystemInfoDocumentServerAgent {
  name: XmlElem<string>;
  start_time: XmlElem<string>;
  thread_id: XmlElem<string>;
}

interface SystemInfoDocumentUnibridgeInfoOverall {
  unibridge_info: XmlElem<string>;
  overall_requests: XmlElem<string>;
  average_request_time: XmlElem<string>;
  memory_occupied: XmlElem<string>;
  memory_available: XmlElem<string>;
  active_requests: XmlElem<string>;
}

interface SystemInfoDocumentUnibridgeInfoThread {
  id: XmlElem<string>;
  xquery: XmlElem<string>;
  sql: XmlElem<string>;
  count_sql: XmlElem<string>;
  fetch_counter: XmlElem<string>;
  self_connection: XmlElem<string>;
  rtl: XmlElem<string>;
  state: XmlElem<string>;
}

interface SystemInfoDocumentUnibridgeInfoProcess {
  session_id: XmlElem<string>;
  user_process: XmlElem<string>;
  login: XmlElem<string>;
  database: XmlElem<string>;
  task_state: XmlElem<string>;
  command: XmlElem<string>;
  application: XmlElem<string>;
  wait_time: XmlElem<string>;
  wait_type: XmlElem<string>;
  wait_resource: XmlElem<string>;
  blocked_by: XmlElem<string>;
  head_blocker: XmlElem<string>;
  total_cpu: XmlElem<string>;
  total_physical_io: XmlElem<string>;
  memory_use: XmlElem<string>;
  open_transactions: XmlElem<string>;
  login_time: XmlElem<string>;
  last_request_start_time: XmlElem<string>;
  host_name: XmlElem<string>;
  net_address: XmlElem<string>;
  execution_context_id: XmlElem<string>;
  sql: XmlElem<string>;
}

interface SystemInfoDocumentUnibridgeInfo {
  overall: XmlElem<SystemInfoDocumentUnibridgeInfoOverall>;
  threads: XmlMultiElem<SystemInfoDocumentUnibridgeInfoThread>;
  processes: XmlMultiElem<SystemInfoDocumentUnibridgeInfoProcess>;
}

interface SystemInfoDocumentXhttpInfoRequest {
  life_time: XmlElem<string>;
  method: XmlElem<string>;
  url: XmlElem<string>;
  description: XmlElem<string>;
  current_activity: XmlElem<string>;
  user: XmlElem<string>;
  thread_id: XmlElem<string>;
}

interface SystemInfoDocumentXhttpInfoThread {
  life_time: XmlElem<string>;
  type: XmlElem<string>;
  description: XmlElem<string>;
  current_activity: XmlElem<string>;
  thread_id: XmlElem<string>;
}

interface SystemInfoDocumentXhttpInfoLdsSession {
  life_time: XmlElem<string>;
  id: XmlElem<string>;
  idle_time: XmlElem<string>;
  cursors: XmlElem<string>;
  login: XmlElem<string>;
}

interface SystemInfoDocumentXhttpInfo {
  info: XmlElem<string>;
  build: XmlElem<string>;
  url: XmlElem<string>;
  requests: XmlMultiElem<SystemInfoDocumentXhttpInfoRequest>;
  threads: XmlMultiElem<SystemInfoDocumentXhttpInfoThread>;
  lds_sessions: XmlMultiElem<SystemInfoDocumentXhttpInfoLdsSession>;
}

type SystemInfoDocumentTopElem = XmlTopElem & {
  Doc: SystemInfoDocument;
  file_url: XmlElem<string>;
  db_type: XmlElem<string>;
  system_info: XmlElem<SystemInfoDocumentSystemInfo>;
  active_notifications: XmlElem<string>;
  server_agents: XmlMultiElem<SystemInfoDocumentServerAgent>;
  unibridge_info: XmlElem<SystemInfoDocumentUnibridgeInfo>;
  xhttp_info: XmlElem<SystemInfoDocumentXhttpInfo>;
  getSystemInfo(input: unknown): unknown;
};

type SystemInfoDocument = XmlDocument & {
  TopElem: SystemInfoDocumentTopElem;
  system_info: SystemInfoDocumentTopElem;
};

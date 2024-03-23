declare namespace tools_proctor {
  function alerd(text: string, debug: boolean): unknown;
  function get_proctoring_object_id(learningObjectId: number, learningObjectTopElem: unknown): unknown;
  function get_proctoring_object(learningObjectId: number, learningObjectTopElem: unknown): unknown;
  function get_proctoring_learning_object(learningObjectId: number, returnDoc: boolean): unknown;
  function get_proctoring_active_object_id(learningRecordTopElem: unknown, feLearning: unknown): unknown;
  function learning_record_finish(learningId: number, learningTopElem: unknown, proctoringObjectTopElem: unknown): unknown;
  function get_proctoring_learning_url(learningId: number, learningTopElem: unknown, curHostPath: string, launchUrl: string, urlParams: string, proctoringObjectTopElem: unknown): unknown;
  function download_proctoring_files(learningRecordId: number): unknown;
  function get_proctoring_active_learning_id(recordTopElem: unknown): unknown;
  function finish_learning_record_thread(activeLearningId: number, learningId: number, learningTopElem: unknown, proctorObjectTopElem: unknown): unknown;
  function finish_learning_record(activeLearningId: number, learningId: number, learningTopElem: unknown, proctorObjectTopElem: unknown): unknown;
  function check_foto(learningRecordId: number, docLearningRecord: unknown, arrDefaultFotoUrls: unknown, confidence: number, modelType: string): unknown;
}

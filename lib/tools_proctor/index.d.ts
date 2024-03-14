declare namespace tools_proctor {
  function alerd(text: string, debug: boolean): unknown;
  function get_proctoring_object_id(learningObjectId: number, teLearningObject: unknown): unknown;
  function get_proctoring_object(learningObjectId: number, teLearningObject: unknown): unknown;
  function get_proctoring_learning_object(learningObjectId: number, returnDoc: boolean): unknown;
  function get_proctoring_active_object_id(teLearningRecord: unknown, feLearning: unknown): unknown;
  function learning_record_finish(learningId: number, teLearning: unknown, teProctoringObject: unknown): unknown;
  function get_proctoring_learning_url(learningId: number, teLearning: unknown, curHostPath: string, launchUrl: string, urlParams: string, teProctoringObject: unknown): unknown;
  function download_proctoring_files(learningRecordId: number): unknown;
  function get_proctoring_active_learning_id(teRecord: unknown): unknown;
  function finish_learning_record_thread(activeLearningId: number, learningId: number, teLearning: unknown, teProctorObject: unknown): unknown;
  function finish_learning_record(activeLearningId: number, learningId: number, teLearning: unknown, teProctorObject: unknown): unknown;
  function check_foto(learningRecordId: number, docLearningRecord: unknown, arrDefaultFotoUrls: unknown, confidence: number, modelType: string): unknown;
}

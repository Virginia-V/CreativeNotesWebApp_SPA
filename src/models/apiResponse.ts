export default interface ApiResponse<TResult> {
  succeeded: boolean;
  errorMessage: string;
  result: TResult;
}

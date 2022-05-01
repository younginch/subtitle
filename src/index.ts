export enum ResErrorType {
  NotFound,
}

export default interface ResError {
  error: ResErrorType;
  log?: string;
}

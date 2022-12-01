import { Environment } from "../config";

export type Options = {
  defaultRegion: string;
  bucketName: string;
  repoName: string;
  pipelineName: string;
  stackName: string;
  rootAccount: string;
  stackNamePrefix: string;
  account: string;
  stageOptions: StageOptions[];
};

export type StageOptions = {
  environment: Environment;
  account: string;
};

export const findStageOption = (options: Options, environment: Environment) => {
  const stageOptions = options.stageOptions.find(
    (option) => option.environment == environment
  );
  if (!stageOptions) {
    throw new Error("No encontramos el stage");
  }
};

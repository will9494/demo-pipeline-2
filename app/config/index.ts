import * as cdk from "aws-cdk-lib";
import { Options } from "../types/options";

let stackName = "DemoPipeline2";
let stackPrefix = "main";

export enum Environment {
  DEV = "DEV",
  QA = "QA",
  STAGING = "STAGING",
  PROD = "PROD",
}

export const options: Options = {
  bucketName: "demo-pipeline-2-wvalladares",
  account: "354931047105",
  defaultRegion: "us-west-2",
  rootAccount: "will9494",
  repoName: "demo-pipeline-2",
  pipelineName: `${stackPrefix}-${stackName}-pipeline`,
  stackName: stackName,
  stackNamePrefix: stackPrefix,
  stageOptions: [
    {
      environment: Environment.DEV,
      account: "354931047105",
    },
    {
      environment: Environment.QA,
      account: "354931047105",
    },
    {
      environment: Environment.STAGING,
      account: "354931047105",
    },
    {
      environment: Environment.PROD,
      account: "354931047105",
    },
  ],
};

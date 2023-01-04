import { Bucket, Table } from "@serverless-stack/resources";
// import { Bucket } from "aws-cdk-lib/aws-s3";

export function StorageStack({ stack, app }) {
  //Create an S3 bucket
  const bucket = new Bucket(stack, "Uploads");

  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return {
    table,
    bucket,
  };
}
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';

import type { PutObjectCommandInput } from '@aws-sdk/client-s3';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { lookup } from 'mime-types';
import type { Compiler, WebpackPluginInstance } from 'webpack';

export const R2_BUCKET =
  process.env.R2_BUCKET! ??
  (process.env.BUILD_TYPE === 'canary' ? 'assets-dev' : 'assets-prod');
export class WebpackS3Plugin implements WebpackPluginInstance {
  private readonly s3 = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
    },
  });
  apply(compiler: Compiler) {
    compiler.hooks.assetEmitted.tapPromise(
      'WebpackS3Plugin',
      async (asset, { outputPath }) => {
        if (asset === 'index.html') {
          return;
        }
        const assetPath = join(outputPath, asset);
        const assetSource = await readFile(assetPath);
        const putObjectCommandOptions: PutObjectCommandInput = {
          Body: assetSource,
          Bucket: R2_BUCKET,
          Key: asset,
        };
        console.log(R2_BUCKET);
        const contentType = lookup(asset);
        if (contentType) {
          putObjectCommandOptions.ContentType = contentType;
        }
        await this.s3.send(new PutObjectCommand(putObjectCommandOptions));
      }
    );
  }
}

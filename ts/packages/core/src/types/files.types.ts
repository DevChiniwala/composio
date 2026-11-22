export type FileUploadData = {
  name: string;
  mimetype: string;
  s3key: string;
};

export type FileDownloadData = {
  name: string;
  mimeType: string;
  s3Url: string;
  /**
   * The absolute path to the saved file, or `null` when the runtime has
   * no filesystem (e.g. Cloudflare Workers) or the write failed.
   */
  filePath: string | null;
};

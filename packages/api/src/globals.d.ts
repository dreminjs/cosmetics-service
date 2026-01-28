namespace NodeJS {
  interface ProcessEnv {
    ACCESS_TOKEN: string;
    REFRESH_TOKEN: string;
    DATABASE_URL: string;
  }
}

namespace Storage {
  interface MultipartFile {
    buffer: Buffer;
    filename: string;
    size: number;
    mimetype: string;
    fieldname: string;
  }
}

declare module 'fastify' {
  interface FastifyRequest {
    storedFiles: Record<string, Storage.MultipartFile[]>;
    body: unknown;
  }
}

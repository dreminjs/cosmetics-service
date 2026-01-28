import { MultipartFile } from '@fastify/multipart';
import { MultipartOptions } from 'src/models/options.model';
export declare const getFileFromPart: (part: MultipartFile) => Promise<Storage.MultipartFile>;
export declare const validateFile: (file: Storage.MultipartFile, options: MultipartOptions) => string | void;

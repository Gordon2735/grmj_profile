/* eslint-disable @typescript-eslint/no-unused-vars */
namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: string;
        PORT: string;
        MONGO_URI: string;
        MONGO_ATLAS: string;
        OPENAI_API_KEY: string;
    }
}

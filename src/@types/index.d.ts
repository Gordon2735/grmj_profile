/* eslint-disable @typescript-eslint/no-explicit-any */
// <reference types="handlebars" />

export {};

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lettext: any;
    }

    namespace NodeJS {
        interface ProcessEnv {
            GITHUB_AUTH_TOKEN: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
            GOOGLE_CLIENT_ID: string;
            GOOGLE_CLIENT_SECRET: string;
            MONGO_URI: string;
        }
        interface blogDB {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            blogDB: Promise<void>;
            mongoose: {
                connect: (uli: process.env.MONGO_URI) => Promise<any>;
            };
        }
    }
    namespace Express {
        interface User {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            user: any;
            id: string;
            firstName: string;
        }
        interface Request {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            _id: string;
            user: User;
            ParsedQs: string;
        }
        interface Router {
            [IRouter.put]: [QueryString.ParsedQs];
        }
    }
}

export interface UnknownObject {
    [index: string]: unknown;
}

export interface FunctionObject {
    [index: string]: (...args: unknown[]) => unknown;
}

export interface TemplateDelegateObject {
    [index: string]: Handlebars.TemplateDelegate;
}

export interface TemplateSpecificationObject {
    [index: string]: TemplateSpecification;
}

export interface CompiledCache {
    [index: string]: Promise<Handlebars.TemplateDelegate>;
}

export interface PrecompiledCache {
    [index: string]: Promise<TemplateSpecification>;
}

export interface FsCache {
    [index: string]: string | string[] | Promise<string | string[]>;
}

export type RenameFunction = (filePath: string, namespace?: string) => string;

export interface PartialsDirObject {
    templates: TemplateDelegateObject;
    namespace: string;
    dir: string;
    rename?: RenameFunction | undefined;
}

export interface PartialTemplateOptions {
    encoding?: BufferEncoding;
    cache?: boolean;
    precompiled?: boolean;
}

export interface RenderOptions {
    cache?: boolean;
    data?: any;
    encoding?: BufferEncoding;
    helpers?: FunctionObject;
    layout?: string;
    partials?: TemplateDelegateObject;
    runtimeOptions?: Handlebars.RuntimeOptions;
}

export interface RenderViewOptions extends RenderOptions {
    [index: string]: unknown;
    settings?: {
        views: string | string[];
    };
}

export type HandlebarsCompile = (
    input: unknown,
    options: CompileOptions
) => Handlebars.TemplateDelegate;
export type HandlebarsPrecompile = (
    input: unknown,
    options: PrecompileOptions
) => TemplateSpecification;

export interface HandlebarsImport {
    [index: string]: unknown;
    compile: HandlebarsCompile;
    precompile: HandlebarsPrecompile;
}

export interface ConfigOptions {
    handlebars?: HandlebarsImport;
    extname?: string;
    encoding?: BufferEncoding;
    layoutsDir?: string;
    partialsDir?: string | string[] | PartialsDirObject | PartialsDirObject[];
    defaultLayout?: string;
    helpers?: any;
    compilerOptions?: CompileOptions;
    runtimeOptions?: Handlebars.RuntimeOptions;
}

export interface EngineOptions extends ConfigOptions {
    [index: string]: unknown;
}

// export interface RenderCallback {
//     (err: Error | null, content?: string): void;
// }

export type Engine = (
    viewPath: string,
    options: ConfigOptions,
    callback?: RenderCallback
) => Promise<string>;

// export interface cssModule {
//     import: '../../Global/global_fonts.css';
//     assert: { type: 'css' };
// }

export type UrlArray = string[];

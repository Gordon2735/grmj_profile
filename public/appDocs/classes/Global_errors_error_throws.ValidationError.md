[grmj_profile](../README.md) / [Modules](../modules.md) / [Global/errors/error\_throws](../modules/Global_errors_error_throws.md) / ValidationError

# Class: ValidationError

[Global/errors/error_throws](../modules/Global_errors_error_throws.md).ValidationError

## Hierarchy

- `Error`

  ↳ **`ValidationError`**

## Table of contents

### Constructors

- [constructor](Global_errors_error_throws.ValidationError.md#constructor)

### Properties

- [message](Global_errors_error_throws.ValidationError.md#message)
- [name](Global_errors_error_throws.ValidationError.md#name)
- [stack](Global_errors_error_throws.ValidationError.md#stack)
- [prepareStackTrace](Global_errors_error_throws.ValidationError.md#preparestacktrace)
- [stackTraceLimit](Global_errors_error_throws.ValidationError.md#stacktracelimit)

### Methods

- [captureStackTrace](Global_errors_error_throws.ValidationError.md#capturestacktrace)

## Constructors

### constructor

• **new ValidationError**(`message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `undefined` \| `string` |

#### Overrides

Error.constructor

#### Defined in

[src/Global/errors/error_throws.ts:8](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/Global/errors/error_throws.ts#L8)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1054

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1053

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1055

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4

[grmj_profile](../README.md) / [Modules](../modules.md) / [ts/adapter](../modules/ts_adapter.md) / Adapter

# Class: Adapter

[ts/adapter](../modules/ts_adapter.md).Adapter

The Adapter makes the Adaptee's interface compatible with the Target's
interface.

## Hierarchy

- [`Target`](ts_adapter.Target.md)

  ↳ **`Adapter`**

## Table of contents

### Constructors

- [constructor](ts_adapter.Adapter.md#constructor)

### Properties

- [adaptee](ts_adapter.Adapter.md#adaptee)

### Methods

- [request](ts_adapter.Adapter.md#request)

## Constructors

### constructor

• **new Adapter**(`adaptee`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `adaptee` | [`Adaptee`](ts_adapter.Adaptee.md) |

#### Overrides

[Target](ts_adapter.Target.md).[constructor](ts_adapter.Target.md#constructor)

#### Defined in

[src/ts/adapter.ts:32](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/ts/adapter.ts#L32)

## Properties

### adaptee

• `Private` **adaptee**: [`Adaptee`](ts_adapter.Adaptee.md)

#### Defined in

[src/ts/adapter.ts:30](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/ts/adapter.ts#L30)

## Methods

### request

▸ **request**(): `string`

#### Returns

`string`

#### Overrides

[Target](ts_adapter.Target.md).[request](ts_adapter.Target.md#request)

#### Defined in

[src/ts/adapter.ts:37](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/ts/adapter.ts#L37)

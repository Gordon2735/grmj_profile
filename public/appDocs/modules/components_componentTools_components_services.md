[grmj_profile](../README.md) / [Modules](../modules.md) / components/componentTools/components\_services

# Module: components/componentTools/components\_services

## Table of contents

### Functions

- [appendChildren](components_componentTools_components_services.md#appendchildren)
- [default](components_componentTools_components_services.md#default)
- [newDomTag](components_componentTools_components_services.md#newdomtag)
- [newSingleNestedTag](components_componentTools_components_services.md#newsinglenestedtag)
- [newSingleTag](components_componentTools_components_services.md#newsingletag)
- [removeChildren](components_componentTools_components_services.md#removechildren)
- [renderArray](components_componentTools_components_services.md#renderarray)
- [setAttributes](components_componentTools_components_services.md#setattributes)

## Functions

### appendChildren

▸ **appendChildren**(`parent`, `children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `undefined` \| ``null`` \| `HTMLElement` \| `ShadowRoot` |
| `children` | `any`[] |

#### Returns

`void`

#### Defined in

[src/components/componentTools/components_services.ts:24](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L24)

___

### default

▸ **default**(`name`, `constructor`, `extendsElement?`): `CustomElementRegistry` \| `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `constructor` | `CustomElementConstructor` |
| `extendsElement?` | `string` |

#### Returns

`CustomElementRegistry` \| `void`

#### Defined in

[src/components/componentTools/components_services.ts:3](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L3)

___

### newDomTag

▸ **newDomTag**(`this`, `method`, `tag`, `attributes`, `children`, `...list`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `any` |
| `method` | `any` |
| `tag` | `any` |
| `attributes` | `Object` |
| `children` | `any`[] |
| `...list` | `any`[] |

#### Returns

`void`

#### Defined in

[src/components/componentTools/components_services.ts:89](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L89)

___

### newSingleNestedTag

▸ **newSingleNestedTag**(`tag`, `tag2`, `attributes`, `attributes2`, `children`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `any` |
| `tag2` | `any` |
| `attributes` | `Object` |
| `attributes2` | `Object` |
| `children` | ``null`` \| `any`[] |

#### Returns

`any`

#### Defined in

[src/components/componentTools/components_services.ts:63](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L63)

___

### newSingleTag

▸ **newSingleTag**(`tag`, `attributes`, `...children`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `any` |
| `attributes` | `Object` |
| `...children` | `any`[] |

#### Returns

`any`

#### Defined in

[src/components/componentTools/components_services.ts:48](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L48)

___

### removeChildren

▸ **removeChildren**(`parent`, `children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `Object` |
| `parent.removeChild` | (`arg0`: `any`) => `void` |
| `children` | `any`[] |

#### Returns

`void`

#### Defined in

[src/components/componentTools/components_services.ts:33](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L33)

___

### renderArray

▸ **renderArray**(`array`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |

#### Returns

`void`

#### Defined in

[src/components/componentTools/components_services.ts:42](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L42)

___

### setAttributes

▸ **setAttributes**(`tag`, `attribute`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `HTMLElement` |
| `attribute` | `any` |

#### Returns

`void`

#### Defined in

[src/components/componentTools/components_services.ts:14](https://github.com/Gordon2735/grmj_profile/blob/1239e9c/src/components/componentTools/components_services.ts#L14)

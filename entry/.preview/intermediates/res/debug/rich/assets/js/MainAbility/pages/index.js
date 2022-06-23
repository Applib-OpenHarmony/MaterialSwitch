/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../../../Downloads/switch/Material_UI_Switch/entry/src/main/ets/MainAbility/pages/index.ets?entry":
/*!*********************************************************************************************************************!*\
  !*** ../../../../../../../Downloads/switch/Material_UI_Switch/entry/src/main/ets/MainAbility/pages/index.ets?entry ***!
  \*********************************************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
/*
 * Copyright (c) 2022 Application Library Engineering Group.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _system_prompt_1  = isSystemplugin('prompt', 'system') ? globalThis.systemplugin.prompt : globalThis.requireNapi('prompt');
const material_switch_1 = __webpack_require__(/*! @ohos/material-switch */ "../../../../../../../Downloads/switch/Material_UI_Switch/material-switch/src/switch.ets");
class Index extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.switchModel1 = new material_switch_1.SwitchModel.Model();
        this.switchModel2 = new material_switch_1.SwitchModel.Model();
        this.switchModel3 = new material_switch_1.SwitchModel.Model();
        this.switchModel4 = new material_switch_1.SwitchModel.Model();
        this.switchModel5 = new material_switch_1.SwitchModel.Model();
        this.switchModel6 = new material_switch_1.SwitchModel.Model();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.switchModel1 !== undefined) {
            this.switchModel1 = params.switchModel1;
        }
        if (params.switchModel2 !== undefined) {
            this.switchModel2 = params.switchModel2;
        }
        if (params.switchModel3 !== undefined) {
            this.switchModel3 = params.switchModel3;
        }
        if (params.switchModel4 !== undefined) {
            this.switchModel4 = params.switchModel4;
        }
        if (params.switchModel5 !== undefined) {
            this.switchModel5 = params.switchModel5;
        }
        if (params.switchModel6 !== undefined) {
            this.switchModel6 = params.switchModel6;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    aboutToAppear() {
        this.updateModelForFirst();
        this.updateModelForSecond();
        this.updateModelForThird();
        this.updateModelForFourth();
        this.updateModelForFifth();
        this.updateModelForSixth();
    }
    updateModelForFirst() {
        this.switchModel1.reset();
        this.switchModel1.setSwitchId(1);
        this.switchModel1.setSwitchId(null);
    }
    updateModelForSecond() {
        this.switchModel2.reset();
        this.switchModel2.setSwitchId(2);
        this.switchModel2.setIsOn(true);
    }
    updateModelForThird() {
        this.switchModel3.reset();
        this.switchModel3.setSwitchId(3);
        this.switchModel3.setWithIcon(true);
    }
    updateModelForFourth() {
        this.switchModel4.reset();
        this.switchModel4.setSwitchId(4);
        this.switchModel4.setIsOn(true);
        this.switchModel4.setWithIcon(true);
    }
    updateModelForFifth() {
        this.switchModel5.reset();
        this.switchModel5.setSwitchId(5);
        this.switchModel5.setDisabled(true);
    }
    updateModelForSixth() {
        this.switchModel6.reset();
        this.switchModel6.setSwitchId(6);
        this.switchModel6.setIsOn(true);
        this.switchModel6.setDisabled(true);
    }
    render() {
        Column.create();
        Column.debugLine("pages/index.ets(77:5)");
        Column.width('100%');
        Column.padding('24vp');
        Column.alignItems(HorizontalAlign.Center);
        Text.create("Default Switches");
        Text.debugLine("pages/index.ets(78:7)");
        Text.fontSize('24vp');
        Text.margin({ bottom: '24vp' });
        Text.pop();
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new material_switch_1.Switch("2", this, {
                model: this.switchModel1,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                model: this.switchModel1,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            });
            View.create(earlierCreatedChild_2);
        }
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new material_switch_1.Switch("3", this, {
                model: this.switchModel2,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                model: this.switchModel2,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            });
            View.create(earlierCreatedChild_3);
        }
        Text.create("Switches with Icons");
        Text.debugLine("pages/index.ets(99:7)");
        Text.fontSize('24vp');
        Text.margin({ top: '24vp', bottom: '24vp' });
        Text.pop();
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new material_switch_1.Switch("4", this, {
                model: this.switchModel3,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                model: this.switchModel3,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            });
            View.create(earlierCreatedChild_4);
        }
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new material_switch_1.Switch("5", this, {
                model: this.switchModel4,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                model: this.switchModel4,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            });
            View.create(earlierCreatedChild_5);
        }
        Text.create("Disabled Switches");
        Text.debugLine("pages/index.ets(121:7)");
        Text.fontSize('24vp');
        Text.margin({ top: '24vp', bottom: '24vp' });
        Text.pop();
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new material_switch_1.Switch("6", this, {
                model: this.switchModel5,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                model: this.switchModel5,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            });
            View.create(earlierCreatedChild_6);
        }
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new material_switch_1.Switch("7", this, {
                model: this.switchModel6,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                model: this.switchModel6,
                onSelect: (id, isOn) => {
                    _system_prompt_1.showToast({
                        message: id.toString()
                    });
                }
            });
            View.create(earlierCreatedChild_7);
        }
        Column.pop();
    }
}
loadDocument(new Index("1", undefined, {}));


/***/ }),

/***/ "../../../../../../../Downloads/switch/Material_UI_Switch/material-switch/src/switch.ets":
/*!***********************************************************************************************!*\
  !*** ../../../../../../../Downloads/switch/Material_UI_Switch/material-switch/src/switch.ets ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwitchModel = exports.Switch = void 0;
/*
 * Copyright (c) 2022 Application Library Engineering Group.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const switchModel_1 = __importDefault(__webpack_require__(/*! ./switchModel */ "../../../../../../../Downloads/switch/Material_UI_Switch/material-switch/src/switchModel.ets"));
class Switch extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__model = new ObservedPropertyObject(new switchModel_1.default.Model(), this, "model");
        this.onSelect = null;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.model !== undefined) {
            this.model = params.model;
        }
        if (params.onSelect !== undefined) {
            this.onSelect = params.onSelect;
        }
    }
    aboutToBeDeleted() {
        this.__model.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get model() {
        return this.__model.get();
    }
    set model(newValue) {
        this.__model.set(newValue);
    }
    onClick() {
        if (this.onSelect != null) {
            this.onSelect(this.model.getSwitchId(), !this.model.getIsOn());
        }
        if (this.model.getDisabled() == false) {
            this.model.setShowAnimation(true);
            Context.animateTo({
                duration: 100,
                onFinish: () => {
                    if (this.model.getIsOn() == false) {
                        this.model.setSwitchSize('16vp');
                    }
                    else {
                        this.model.setSwitchSize('24vp');
                    }
                    this.model.setShowAnimation(false);
                }
            }, () => {
                if (this.model.getIsOn() == false) {
                    this.model.setIsOn(true);
                }
                else {
                    this.model.setIsOn(false);
                }
            });
        }
    }
    render() {
        Shape.create();
        Shape.debugLine("../../../../../material-switch/src/switch.ets(54:5)");
        Shape.onClick(() => this.onClick());
        Shape.padding('5vp');
        Shape.opacity(this.model.getDisabled() ? 0.5 : 1);
        Button.createWithLabel();
        Button.debugLine("../../../../../material-switch/src/switch.ets(55:7)");
        Button.width('52vp');
        Button.height('32vp');
        Button.backgroundColor(this.model.getIsOn() ? this.model.getOnBackgroundColor() : this.model.getOffBackgroundColor());
        Button.borderColor(this.model.getIsOn() ? this.model.getOnBorderColor() : this.model.getOffBorderColor());
        Button.borderWidth('2vp');
        Button.borderRadius('2vp');
        Button.pop();
        If.create();
        if (this.model.getShowAnimation()) {
            If.branchId(0);
            Circle.create();
            Circle.debugLine("../../../../../material-switch/src/switch.ets(64:9)");
            Circle.width('38vp');
            Circle.height('38vp');
            Circle.fill("rgba(0,0,0,0.3)");
            Circle.offset({ x: this.model.getIsOn() ? '17vp' : '-3.5vp', y: '-3vp' });
        }
        If.pop();
        Circle.create();
        Circle.debugLine("../../../../../material-switch/src/switch.ets(68:7)");
        Circle.width(this.model.getShowAnimation() ? '28vp' : this.model.getSwitchSize());
        Circle.height(this.model.getShowAnimation() ? '28vp' : this.model.getSwitchSize());
        Circle.offset({
            x: this.model.getShowAnimation() ?
                (this.model.getIsOn() ? '20vp' : '2vp')
                :
                    (this.model.getIsOn() ? '23vp' : '5vp'),
            y: this.model.getShowAnimation() ? '2vp' : ((16 - (Number(this.model.getSwitchSize()
                .substring(0, 2))) / 2).toString() + 'vp')
        });
        Circle.fill(this.model.getIsOn() ? this.model.getOnCircleColor() : this.model.getOffCircleColor());
        If.create();
        if (this.model.getWithIcon()) {
            If.branchId(0);
            Image.create(this.model.getIcon());
            Image.debugLine("../../../../../material-switch/src/switch.ets(81:9)");
            Image.width('10');
            Image.height('10');
            Image.offset({ x: this.model.getIsOn() ? '30vp' : '8vp', y: '11vp' });
        }
        If.pop();
        Shape.pop();
    }
}
exports.Switch = Switch;
var switchModel_2 = __webpack_require__(/*! ./switchModel */ "../../../../../../../Downloads/switch/Material_UI_Switch/material-switch/src/switchModel.ets");
Object.defineProperty(exports, "SwitchModel", ({ enumerable: true, get: function () { return switchModel_2.SwitchModel; } }));


/***/ }),

/***/ "../../../../../../../Downloads/switch/Material_UI_Switch/material-switch/src/switchModel.ets":
/*!****************************************************************************************************!*\
  !*** ../../../../../../../Downloads/switch/Material_UI_Switch/material-switch/src/switchModel.ets ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwitchModel = void 0;
/*
 * Copyright (c) 2022 Application Library Engineering Group.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class colorConstants {
    constructor() {
        this.defaultOnBackgroundColor = "rgba(55,136,62,1.0)";
        this.defaultOffBackgroundColor = "rgba(216,216,216,1.0)";
        this.defaultOnCircleColor = Color.White;
        this.defaultOffCircleColor = "rgba(117,126,118,1.0)";
        this.defaultOnBorderColor = "rgba(55,136,62,1.0)";
        this.defaultOffBorderColor = "rgba(117,126,118,1.0)";
    }
}
var SwitchModel;
(function (SwitchModel) {
    class Model {
        constructor() {
            this.switchId = 0;
            this.switchSize = '16vp';
            this.withIcon = false;
            this.showAnimation = false;
            this.isOn = false;
            this.icon = { "id": 16777221, "type": 20000, params: [] };
            this.disabled = false;
            this.colorConstant = new colorConstants();
            this.onBackgroundColor = this.colorConstant.defaultOnBackgroundColor;
            this.offBackgroundColor = this.colorConstant.defaultOffBackgroundColor;
            this.onCircleColor = this.colorConstant.defaultOnCircleColor;
            this.offCircleColor = this.colorConstant.defaultOffCircleColor;
            this.onBorderColor = this.colorConstant.defaultOnBorderColor;
            this.offBorderColor = this.colorConstant.defaultOffBorderColor;
        }
        getOnBackgroundColor() {
            return this.onBackgroundColor;
        }
        setOnBackgroundColor(onBackgroundColor) {
            if (onBackgroundColor != null && onBackgroundColor != undefined) {
                this.onBackgroundColor = onBackgroundColor;
            }
            else {
                this.onBackgroundColor = this.colorConstant.defaultOnBackgroundColor;
            }
            return this;
        }
        getOffBackgroundColor() {
            return this.offBackgroundColor;
        }
        setOffBackgroundColor(offBackgroundColor) {
            if (offBackgroundColor != null && offBackgroundColor != undefined) {
                this.offBackgroundColor = offBackgroundColor;
            }
            else {
                this.offBackgroundColor = this.colorConstant.defaultOffBackgroundColor;
            }
            return this;
        }
        getOnCircleColor() {
            return this.onCircleColor;
        }
        setOnCircleColor(onCircleColor) {
            if (onCircleColor != null && onCircleColor != undefined) {
                this.onCircleColor = onCircleColor;
            }
            else {
                this.onCircleColor = this.colorConstant.defaultOnCircleColor;
            }
            return this;
        }
        getOffCircleColor() {
            return this.offCircleColor;
        }
        setOffCircleColor(offCircleColor) {
            if (offCircleColor != null && offCircleColor != undefined) {
                this.offCircleColor = offCircleColor;
            }
            else {
                this.offCircleColor = this.colorConstant.defaultOffCircleColor;
            }
            return this;
        }
        getOnBorderColor() {
            return this.onBorderColor;
        }
        setOnBorderColor(onBorderColor) {
            if (onBorderColor != null && onBorderColor != undefined) {
                this.onBorderColor = onBorderColor;
            }
            else {
                this.onBorderColor = this.colorConstant.defaultOnBorderColor;
            }
            return this;
        }
        getOffBorderColor() {
            return this.offBorderColor;
        }
        setOffBorderColor(offBorderColor) {
            if (offBorderColor != null && offBorderColor != undefined) {
                this.offBorderColor = offBorderColor;
            }
            else {
                this.offBorderColor = this.colorConstant.defaultOffBorderColor;
            }
            return this;
        }
        getDisabled() {
            return this.disabled;
        }
        setDisabled(disabled) {
            if (disabled == null || disabled == undefined) {
                this.disabled = false;
            }
            else
                this.disabled = disabled;
            return this;
        }
        getSwitchId() {
            return this.switchId;
        }
        setSwitchId(switchId) {
            if (switchId != null && switchId > -1 && switchId != undefined) {
                this.switchId = switchId;
            }
            else {
                this.switchId = 0;
            }
            return this;
        }
        getSwitchSize() {
            return this.switchSize;
        }
        setSwitchSize(switchSize) {
            if (switchSize != null && switchSize != undefined)
                this.switchSize = switchSize;
            else
                this.switchSize = '16vp';
            return this;
        }
        getWithIcon() {
            return this.withIcon;
        }
        setWithIcon(withIcon) {
            if (withIcon != null && withIcon != undefined) {
                this.withIcon = withIcon;
            }
            else {
                this.withIcon = false;
            }
            return this;
        }
        getShowAnimation() {
            return this.showAnimation;
        }
        setShowAnimation(showAnimation) {
            if (showAnimation != null && showAnimation != undefined) {
                this.showAnimation = showAnimation;
            }
            else {
                this.showAnimation = false;
            }
            return this;
        }
        getIsOn() {
            return this.isOn;
        }
        setIsOn(isOn) {
            if (isOn != null && isOn != undefined) {
                this.isOn = isOn;
                if (this.isOn) {
                    this.switchSize = '24vp';
                }
            }
            else {
                this.isOn = false;
            }
            return this;
        }
        getIcon() {
            return this.icon;
        }
        setIcon(icon) {
            if (icon != null && icon != undefined) {
                this.icon = icon;
            }
            else {
                this.icon = { "id": 16777221, "type": 20000, params: [] };
            }
            return this;
        }
        reset() {
            this.switchId = 0;
            this.switchSize = '16vp';
            this.withIcon = false;
            this.showAnimation = false;
            this.isOn = false;
            this.icon = { "id": 16777221, "type": 20000, params: [] };
            this.disabled = false;
            this.onBackgroundColor = this.colorConstant.defaultOnBackgroundColor;
            this.offBackgroundColor = this.colorConstant.defaultOffBackgroundColor;
            this.onCircleColor = this.colorConstant.defaultOnCircleColor;
            this.offCircleColor = this.colorConstant.defaultOffCircleColor;
            this.onBorderColor = this.colorConstant.defaultOnBorderColor;
            this.offBorderColor = this.colorConstant.defaultOffBorderColor;
            return this;
        }
    }
    SwitchModel.Model = Model;
})(SwitchModel = exports.SwitchModel || (exports.SwitchModel = {}));
exports["default"] = SwitchModel;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		var commonCachedModule = globalThis["__common_module_cache__"] ? globalThis["__common_module_cache__"][moduleId]: null;
/******/ 		if (commonCachedModule) { return commonCachedModule.exports; }
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		if (globalThis["__common_module_cache__"] && moduleId.indexOf("?name=") < 0 && Object.keys(globalThis["__common_module_cache__"]).indexOf(moduleId) >= 0) {
/******/ 		  globalThis["__common_module_cache__"][moduleId] = module;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../../../Downloads/switch/Material_UI_Switch/entry/src/main/ets/MainAbility/pages/index.ets?entry");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map
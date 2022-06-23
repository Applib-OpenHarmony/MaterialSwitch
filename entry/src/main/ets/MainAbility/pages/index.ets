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

import prompt from '@system.prompt';
import { Switch, SwitchModel }  from "@ohos/material-switch"

@Entry
@Component
struct Index {
  private SwitchModel1: SwitchModel.Model = new SwitchModel.Model();
  private SwitchModel2: SwitchModel.Model = new SwitchModel.Model();
  private SwitchModel3: SwitchModel.Model = new SwitchModel.Model();
  private SwitchModel4: SwitchModel.Model = new SwitchModel.Model();
  private SwitchModel5: SwitchModel.Model = new SwitchModel.Model();
  private SwitchModel6: SwitchModel.Model = new SwitchModel.Model();

  public aboutToAppear(): void {
    this.updateModelForFirst()
    this.updateModelForSecond()
    this.updateModelForThird()
    this.updateModelForFourth()
    this.updateModelForFifth()
    this.updateModelForSixth()
  }

  updateModelForFirst() {
    this.SwitchModel1.reset()
    this.SwitchModel1.setSwitchId(1)
    this.SwitchModel1.setSwitchId(null)
  }

  updateModelForSecond() {
    this.SwitchModel2.reset()
    this.SwitchModel2.setSwitchId(2)
    this.SwitchModel2.setIsOn(true)
  }

  updateModelForThird() {
    this.SwitchModel3.reset()
    this.SwitchModel3.setSwitchId(3)
    this.SwitchModel3.setWithIcon(true)
  }

  updateModelForFourth() {
    this.SwitchModel4.reset()
    this.SwitchModel4.setSwitchId(4)
    this.SwitchModel4.setIsOn(true)
    this.SwitchModel4.setWithIcon(true)
  }

  updateModelForFifth() {
    this.SwitchModel5.reset()
    this.SwitchModel5.setSwitchId(5)
    this.SwitchModel5.setDisabled(true)
  }

  updateModelForSixth() {
    this.SwitchModel6.reset()
    this.SwitchModel6.setSwitchId(6)
    this.SwitchModel6.setIsOn(true)
    this.SwitchModel6.setDisabled(true)
  }

  build() {
    Column() {
      Text("Default Switches")
        .fontSize('24vp')
        .margin({ bottom: '24vp' })
      Switch({
        model: this.SwitchModel1,
        onSelect: (id, isOn) => {
          prompt.showToast({
            message: id.toString()
          })
        }
      })

      Switch({
        model: this.SwitchModel2,
        onSelect: (id, isOn) => {
          prompt.showToast({
            message: id.toString()
          })
        }
      })

      Text("Switches with Icons")
        .fontSize('24vp')
        .margin({ top: '24vp', bottom: '24vp' })

      Switch({
        model: this.SwitchModel3,
        onSelect: (id, isOn) => {
          prompt.showToast({
            message: id.toString()
          })
        }
      })

      Switch({
        model: this.SwitchModel4,
        onSelect: (id, isOn) => {
          prompt.showToast({
            message: id.toString()
          })
        }
      })

      Text("Disabled Switches")
        .fontSize('24vp')
        .margin({ top: '24vp', bottom: '24vp' })

      Switch({
        model: this.SwitchModel5,
        onSelect: (id, isOn) => {
          prompt.showToast({
            message: id.toString()
          })
        }
      })

      Switch({
        model: this.SwitchModel6,
        onSelect: (id, isOn) => {
          prompt.showToast({
            message: id.toString()
          })
        }
      })

    }
    .width('100%')
    .padding('24vp')
    .alignItems(HorizontalAlign.Center)
  }
}
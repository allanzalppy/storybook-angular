import { Story, Meta } from '@storybook/angular/types-6-0';
import { CheckBoxList } from '../app/components/checkbox-list/checkbox-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Example/Checklist',
  component: CheckBoxList,
  decorators: [
    moduleMetadata({
      imports: [MatCheckboxModule, MatListModule, ],
    })
  ],
  argTypes: {
    itemList: {
      name: 'string',
      selected: false,
      disabled: false,
      items: [
        { name: 'string', selected: false, disabled: false }
      ]
    },
  },
} as Meta;

const Template: Story<CheckBoxList> = (args: CheckBoxList) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  itemList: {
    name: 'Order type',
    selected: false,
    disabled: false,
    items: [
      { name: 'Stopped Machine', selected: false, disabled: false },
      { name: 'Pedido Máquina Parada Garantia', selected: false, disabled: false },
      { name: 'Pedido Safra', selected: false, disabled: false }
    ]
  },
};


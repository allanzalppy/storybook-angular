import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './../app/components/card/card.component';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Example/Card',
  component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule],
    })
  ],
  argTypes: {
    cardUrl: { string: "string"},
    altLabel: { string: "string"},
    label: { string: "string"},
    redirectLink: { string: "string"}
  },
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  cardUrl: "https://storeqa.agcoonline.com.br/Admin/Dealers/images/dealer.png",
  altLabel: "Tag icon with dolar sign stamped inside",
  label: "Dealer",
  redirectLink: "blank"
};

import sliderItem from "./SliderItem";

export default {
  title: "Slider Item",
  component: { sliderItem },
};

export const defaultView = () => ({
  components: { sliderItem },
  template: `<sliderItem><h1> Some strange context  Some strange context Some strange context Some strange context Some strange context</h1></sliderItem>`,
});

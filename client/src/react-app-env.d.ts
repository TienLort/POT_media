/// <reference types="react-scripts" />
declare module "lodash";
declare module "react-headroom";
declare module "react-slick";
declare module "react-image-and-background-image-fade";
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

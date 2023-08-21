/* eslint-disable @typescript-eslint/ban-types */
import React from "react";

type TComponent = React.LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);

export interface IRoute {
  path: string;
  component: TComponent;
  name: string;
  layout?: (props: { children: JSX.Element }) => JSX.Element;
  permission?: string[];
  id?: string;
}

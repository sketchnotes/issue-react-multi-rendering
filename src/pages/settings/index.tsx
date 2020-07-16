import React from 'react';
import { RouteComponentProps } from "@reach/router";

interface SettingsProps extends RouteComponentProps {
  name?: string;
}

export const Settings = (props: SettingsProps) => {
  return <div>Settings { props.name }</div>
}

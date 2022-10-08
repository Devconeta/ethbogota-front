import { ComponentProps } from "react";
import { MetamaskState } from "../context/MetamaskContext";
import { shouldDisplayReconnectButton } from "../utils/button";

const InstallFlaskButton = () => {
  return (
    <a href="https://metamask.io/flask/" target="_blank" rel="noreferrer">
      <span>Install Metamask Flask</span>
    </a>
  );
};

const ConnectButton = (props: ComponentProps<"button">) => {
  return (
    <button {...props}>
      <span>Connect</span>
    </button>
  );
};

const ReconnectButton = (props: ComponentProps<"button">) => {
  return (
    <button {...props}>
      <span>Reconnect</span>
    </button>
  );
};

export const HeaderButtons = ({
  state,
  onConnectClick,
}: {
  state: MetamaskState;
  onConnectClick(): unknown;
}) => {
  if (!state.isFlask && !state.installedSnap) {
    return <InstallFlaskButton />;
  }

  if (!state.installedSnap) {
    return <ConnectButton onClick={onConnectClick} />;
  }

  if (shouldDisplayReconnectButton(state.installedSnap)) {
    return <ReconnectButton onClick={onConnectClick} />;
  }

  return (
    <div>
      <span>Connected</span>
    </div>
  );
};

import { Snap } from "../types/snap";
import { isLocalSnap } from "./snap";

// Show reconnect button if the installed snap is a local snap

export const shouldDisplayReconnectButton = (installedSnap?: Snap) =>
  installedSnap && isLocalSnap(installedSnap?.id);

export type DevicePlatform = "android" | "ios" | "desktop";

export type MessageType =
  | "device_register"
  | "clipboard_send"
  | "clipboard_update"
  | "sync_request"
  | "sync_response";

export interface DeviceInfo {
  deviceId: string;
  deviceName: string;
  platform: DevicePlatform;
}

export interface ClipboardEvent {
  eventId: string;
  originDeviceId: string;
  version: number;
  contentType: "text";
  payload: string;
  timestamp: number;
}

export interface ProtocolMessage<T = unknown> {
  type: MessageType;
  payload: T;
}
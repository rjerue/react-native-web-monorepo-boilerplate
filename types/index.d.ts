declare module '*.png';

declare interface SnowplowContext {
  schema: string;
  data: Record<string, string | number>;
}
declare interface EventLogParams {
  label?: string;
  property?: string;
  value?: number;
  context?: SnowplowContext[];
  tstamp?: number;
}
declare module '@ringierag/snowplow-reactjs-native-tracker' {
  export declare class Emitter {
    public constructor(
      endpoint: string,
      protocol: string,
      port: number,
      method: string,
      bufferLength: number,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (error: any, response: Response) => void,
    );
  }

  export declare class Tracker {
    public constructor(emitters: Emitter[], namespace: string, applicationID: string, base64Encode?: boolean);

    public setPlatform(platform: string);

    public setUserId(userId: string);

    public setScreenResolution(width: number, height: number);
    public setViewport(width: number, height: number);
    public setColorDepth(bitsPerPixel: number);
    public setTimezone(timezone: string);
    public setLang(language: string);
    public trackStructEvent(
      category: string,
      action: string,
      label?: EventLogParams['label'],
      property?: EventLogParams['property'],
      value?: EventLogParams['value'],
      context?: EventLogParams['context'],
      tstamp?: EventLogParams['tstamp'],
    );
    public trackScreenView(
      name: string,
      id: string,
      context?: EventLogParams['context'],
      tstamp?: EventLogParams['tstamp'],
    );
  }
}
declare module '*.gif';

declare module 'react-native-dimensions-hooks' {
  export interface ScreenSizes {
    width: number;
    height: number;
  }
  export function useWindowDimensions(): ScreenSizes;
  export function useScreenDimension(): ScreenSizes;
}

import { OVRDeviceClass } from './ovr-device';
import { OscScript } from './osc-script';
import { SleepingPose } from './sleeping-pose';
import { UserStatus } from 'vrchat/dist';
import { WindowsPowerPolicy } from './windows-power-policy';

export type AutomationType =
  // GPU AUTOMATIONS (Global enable flag)
  | 'GPU_POWER_LIMITS'
  | 'MSI_AFTERBURNER'
  // SLEEP MODE AUTOMATIONS
  | 'SLEEP_MODE_ENABLE_FOR_SLEEP_DETECTOR'
  | 'SLEEP_MODE_ENABLE_AT_TIME'
  | 'SLEEP_MODE_ENABLE_AT_BATTERY_PERCENTAGE'
  | 'SLEEP_MODE_ENABLE_ON_CONTROLLERS_POWERED_OFF'
  | 'SLEEP_MODE_ENABLE_ON_HEART_RATE_CALM_PERIOD'
  | 'SLEEP_MODE_CHANGE_ON_STEAMVR_STATUS'
  | 'SLEEP_MODE_DISABLE_AT_TIME'
  | 'SLEEP_MODE_DISABLE_ON_DEVICE_POWER_ON'
  // POWER AUTOMATIONS
  | 'TURN_OFF_DEVICES_ON_SLEEP_MODE_ENABLE'
  | 'TURN_OFF_DEVICES_WHEN_CHARGING'
  | 'TURN_ON_LIGHTHOUSES_ON_OYASUMI_START'
  | 'TURN_ON_LIGHTHOUSES_ON_STEAMVR_START'
  | 'TURN_OFF_LIGHTHOUSES_ON_STEAMVR_STOP'
  // OSC AUTOMATIONS
  | 'OSC_GENERAL'
  | 'SLEEPING_ANIMATIONS'
  // STATUS AUTOMATIONS
  | 'CHANGE_STATUS_BASED_ON_PLAYER_COUNT'
  // INVITE AUTOMATIONS
  | 'AUTO_ACCEPT_INVITE_REQUESTS'
  // BRIGHTNESS AUTOMATIONS
  | 'BRIGHTNESS_CONTROL_ADVANCED_MODE'
  | 'SET_BRIGHTNESS_ON_SLEEP_MODE_ENABLE'
  | 'SET_BRIGHTNESS_ON_SLEEP_MODE_DISABLE'
  | 'SET_BRIGHTNESS_ON_SLEEP_PREPARATION'
  // RESOLUTION AUTOMATIONS
  | 'RENDER_RESOLUTION_ON_SLEEP_MODE_ENABLE'
  | 'RENDER_RESOLUTION_ON_SLEEP_MODE_DISABLE'
  // CHAPERONE AUTOMATIONS
  | 'CHAPERONE_FADE_DISTANCE_ON_SLEEP_MODE_ENABLE'
  | 'CHAPERONE_FADE_DISTANCE_ON_SLEEP_MODE_DISABLE'
  // SHUTDOWN AUTOMATIONS
  | 'SHUTDOWN_AUTOMATIONS'
  // WINDOWS POWER POLICY AUTOMATIONS
  | 'WINDOWS_POWER_POLICY_ON_SLEEP_MODE_ENABLE'
  | 'WINDOWS_POWER_POLICY_ON_SLEEP_MODE_DISABLE';

export interface AutomationConfigs {
  version: 9;
  GPU_POWER_LIMITS: GPUPowerLimitsAutomationConfig;
  MSI_AFTERBURNER: MSIAfterburnerAutomationConfig;
  // SLEEP MODE AUTOMATIONS
  SLEEP_MODE_ENABLE_FOR_SLEEP_DETECTOR: SleepModeEnableForSleepDetectorAutomationConfig;
  SLEEP_MODE_ENABLE_AT_TIME: SleepModeEnableAtTimeAutomationConfig;
  SLEEP_MODE_ENABLE_AT_BATTERY_PERCENTAGE: SleepModeEnableAtBatteryPercentageAutomationConfig;
  SLEEP_MODE_ENABLE_ON_CONTROLLERS_POWERED_OFF: SleepModeEnableAtControllersPoweredOffAutomationConfig;
  SLEEP_MODE_ENABLE_ON_HEART_RATE_CALM_PERIOD: SleepModeEnableOnHeartRateCalmPeriodAutomationConfig;
  SLEEP_MODE_CHANGE_ON_STEAMVR_STATUS: SleepModeChangeOnSteamVRStatusAutomationConfig;
  SLEEP_MODE_DISABLE_AT_TIME: SleepModeDisableAtTimeAutomationConfig;
  SLEEP_MODE_DISABLE_ON_DEVICE_POWER_ON: SleepModeDisableOnDevicePowerOnAutomationConfig;
  // POWER AUTOMATIONS
  TURN_OFF_DEVICES_ON_SLEEP_MODE_ENABLE: TurnOffDevicesOnSleepModeEnableAutomationConfig;
  TURN_OFF_DEVICES_WHEN_CHARGING: TurnOffDevicesWhenChargingAutomationConfig;
  TURN_ON_LIGHTHOUSES_ON_OYASUMI_START: TurnOnLighthousesOnOyasumiStartAutomationConfig;
  TURN_ON_LIGHTHOUSES_ON_STEAMVR_START: TurnOnLighthousesOnSteamVRStartAutomationConfig;
  TURN_OFF_LIGHTHOUSES_ON_STEAMVR_STOP: TurnOffLighthousesOnSteamVRStopAutomationConfig;
  // OSC AUTOMATIONS
  OSC_GENERAL: OscGeneralAutomationConfig;
  SLEEPING_ANIMATIONS: SleepingAnimationsAutomationConfig;
  // STATUS AUTOMATIONS
  CHANGE_STATUS_BASED_ON_PLAYER_COUNT: ChangeStatusBasedOnPlayerCountAutomationConfig;
  // INVITE AUTOMATIONS
  AUTO_ACCEPT_INVITE_REQUESTS: AutoAcceptInviteRequestsAutomationConfig;
  // BRIGHTNESS AUTOMATIONS
  BRIGHTNESS_CONTROL_ADVANCED_MODE: BrightnessControlAdvancedModeAutomationConfig;
  SET_BRIGHTNESS_ON_SLEEP_MODE_ENABLE: SetBrightnessAutomationConfig;
  SET_BRIGHTNESS_ON_SLEEP_MODE_DISABLE: SetBrightnessAutomationConfig;
  SET_BRIGHTNESS_ON_SLEEP_PREPARATION: Omit<SetBrightnessAutomationConfig, 'applyOnStart'>;
  // RESOLUTION AUTOMATIONS
  RENDER_RESOLUTION_ON_SLEEP_MODE_ENABLE: RenderResolutionOnSleepModeAutomationConfig;
  RENDER_RESOLUTION_ON_SLEEP_MODE_DISABLE: RenderResolutionOnSleepModeAutomationConfig;
  // CHAPERONE AUTOMATIONS
  CHAPERONE_FADE_DISTANCE_ON_SLEEP_MODE_ENABLE: ChaperoneFadeDistanceOnSleepModeAutomationConfig;
  CHAPERONE_FADE_DISTANCE_ON_SLEEP_MODE_DISABLE: ChaperoneFadeDistanceOnSleepModeAutomationConfig;
  // SHUTDOWN AUTOMATIONS
  SHUTDOWN_AUTOMATIONS: ShutdownAutomationsConfig;
  // WINDOWS POWER POLICY AUTOMATIONS
  WINDOWS_POWER_POLICY_ON_SLEEP_MODE_ENABLE: WindowsPowerPolicyOnSleepModeAutomationConfig;
  WINDOWS_POWER_POLICY_ON_SLEEP_MODE_DISABLE: WindowsPowerPolicyOnSleepModeAutomationConfig;
}

export interface AutomationConfig {
  enabled: boolean;
}

//
// Automation configs
//

// BRIGHTNESS AUTOMATIONS
export interface BrightnessControlAdvancedModeAutomationConfig extends AutomationConfig {}

export interface SetBrightnessAutomationConfig extends AutomationConfig {
  brightness: number;
  imageBrightness: number;
  displayBrightness: number;
  transition: boolean;
  transitionTime: number;
  applyOnStart: boolean;
}

// RESOLUTION AUTOMATIONS
export interface RenderResolutionOnSleepModeAutomationConfig extends AutomationConfig {
  resolution: number | null;
}

// CHAPERONE AUTOMATIONS
export interface ChaperoneFadeDistanceOnSleepModeAutomationConfig extends AutomationConfig {
  fadeDistance: number;
}

// GPU AUTOMATIONS
export interface GPUPowerLimitsAutomationConfig extends AutomationConfig {
  selectedDeviceId: string | null;
  onSleepEnable: {
    enabled: boolean;
    powerLimit?: number;
    resetToDefault: boolean;
  };
  onSleepDisable: {
    enabled: boolean;
    powerLimit?: number;
    resetToDefault: boolean;
  };
}

export interface MSIAfterburnerAutomationConfig extends AutomationConfig {
  msiAfterburnerPath: string;
  onSleepEnableProfile: number;
  onSleepDisableProfile: number;
}

// SLEEP MODE AUTOMATIONS
export interface SleepModeEnableForSleepDetectorAutomationConfig extends AutomationConfig {
  calibrationValue: number;
  sensitivity: 'LOWEST' | 'LOW' | 'MEDIUM' | 'HIGH' | 'HIGHEST';
  sleepCheck: boolean;
  detectionWindowMinutes: number;
  activationWindow: boolean;
  activationWindowStart: [number, number];
  activationWindowEnd: [number, number];
}

export interface SleepModeEnableAtTimeAutomationConfig extends AutomationConfig {
  time: string | null;
}

export interface SleepModeEnableAtBatteryPercentageAutomationConfig extends AutomationConfig {
  triggerClasses: OVRDeviceClass[];
  threshold: number;
}

export type SleepModeEnableAtControllersPoweredOffAutomationConfig = AutomationConfig;

export interface SleepModeEnableOnHeartRateCalmPeriodAutomationConfig extends AutomationConfig {
  heartRateThreshold: number;
  periodDuration: number;
}

export interface SleepModeChangeOnSteamVRStatusAutomationConfig extends AutomationConfig {
  disableOnSteamVRStop: boolean;
}

export interface SleepModeDisableAtTimeAutomationConfig extends AutomationConfig {
  time: string | null;
}

export interface SleepModeDisableOnDevicePowerOnAutomationConfig extends AutomationConfig {
  triggerClasses: OVRDeviceClass[];
}

// DEVICE POWER AUTOMATIONS
export interface TurnOffDevicesOnSleepModeEnableAutomationConfig extends AutomationConfig {
  deviceClasses: OVRDeviceClass[];
}

export interface TurnOffDevicesWhenChargingAutomationConfig extends AutomationConfig {
  deviceClasses: OVRDeviceClass[];
}

export interface TurnOnLighthousesOnOyasumiStartAutomationConfig extends AutomationConfig {}

export interface TurnOnLighthousesOnSteamVRStartAutomationConfig extends AutomationConfig {}

export interface TurnOffLighthousesOnSteamVRStopAutomationConfig extends AutomationConfig {}

// OSC AUTOMATIONS
export interface OscGeneralAutomationConfig extends AutomationConfig {
  onSleepModeEnable?: OscScript;
  onSleepModeDisable?: OscScript;
}

export interface SleepingAnimationsAutomationConfig extends AutomationConfig {
  preset: string | null;
  oscScripts: {
    [key in SleepingPose | 'FOOT_LOCK' | 'FOOT_UNLOCK']?: OscScript;
  };
  onlyIfSleepModeEnabled: boolean;
  onlyIfAllTrackersTurnedOff: boolean;
  lockFeetOnSleepModeEnable: boolean;
  unlockFeetOnSleepModeDisable: boolean;
  unlockFeetOnAutomationDisable: boolean;
  releaseFootLockOnPoseChange: boolean;
  footLockReleaseWindow: number;
}

// STATUS AUTOMATIONS
export interface ChangeStatusBasedOnPlayerCountAutomationConfig extends AutomationConfig {
  limit: number;
  statusBelowLimit: UserStatus;
  statusAtLimitOrAbove: UserStatus;
  onlyIfSleepModeEnabled: boolean;
}

// INVITE AUTOMATIONS
export interface AutoAcceptInviteRequestsAutomationConfig extends AutomationConfig {
  onlyIfSleepModeEnabled: boolean;
  listMode: 'DISABLED' | 'WHITELIST' | 'BLACKLIST';
  playerIds: string[];
}

// SHUTDOWN AUTOMATIONS
export interface ShutdownAutomationsConfig extends AutomationConfig {
  triggerOnSleep: boolean;
  sleepDuration: number;
  activationWindow: boolean;
  activationWindowStart: [number, number];
  activationWindowEnd: [number, number];
  quitSteamVR: boolean;
  turnOffControllers: boolean;
  turnOffTrackers: boolean;
  turnOffBaseStations: boolean;
  shutdownWindows: boolean;
}

// WINDOWS POWER POLICY AUTOMATIONS
export interface WindowsPowerPolicyOnSleepModeAutomationConfig extends AutomationConfig {
  powerPolicy?: WindowsPowerPolicy;
}

//
// DEFAULT
//

export const AUTOMATION_CONFIGS_DEFAULT: AutomationConfigs = {
  version: 9,
  // BRIGHTNESS AUTOMATIONS
  BRIGHTNESS_CONTROL_ADVANCED_MODE: {
    enabled: false,
  },
  SET_BRIGHTNESS_ON_SLEEP_MODE_ENABLE: {
    enabled: false,
    brightness: 20,
    imageBrightness: 20,
    displayBrightness: 100,
    transition: true,
    transitionTime: 1000 * 60 * 5,
    applyOnStart: true,
  },
  SET_BRIGHTNESS_ON_SLEEP_MODE_DISABLE: {
    enabled: false,
    brightness: 100,
    imageBrightness: 100,
    displayBrightness: 100,
    transition: true,
    transitionTime: 10000,
    applyOnStart: true,
  },
  SET_BRIGHTNESS_ON_SLEEP_PREPARATION: {
    enabled: false,
    brightness: 50,
    imageBrightness: 50,
    displayBrightness: 100,
    transition: true,
    transitionTime: 30000,
  },
  // RESOLUTION AUTOMATIONS
  RENDER_RESOLUTION_ON_SLEEP_MODE_ENABLE: {
    enabled: false,
    resolution: 50,
  },
  RENDER_RESOLUTION_ON_SLEEP_MODE_DISABLE: {
    enabled: false,
    resolution: null,
  },
  // CHAPERONE AUTOMATIONS
  CHAPERONE_FADE_DISTANCE_ON_SLEEP_MODE_ENABLE: {
    enabled: false,
    fadeDistance: 0.0,
  },
  CHAPERONE_FADE_DISTANCE_ON_SLEEP_MODE_DISABLE: {
    enabled: false,
    fadeDistance: 0.7,
  },
  // GPU AUTOMATIONS
  GPU_POWER_LIMITS: {
    enabled: false,
    selectedDeviceId: null,
    onSleepEnable: {
      enabled: false,
      resetToDefault: false,
    },
    onSleepDisable: {
      enabled: false,
      resetToDefault: true,
    },
  },
  MSI_AFTERBURNER: {
    enabled: false,
    msiAfterburnerPath: 'C:\\Program Files (x86)\\MSI Afterburner\\MSIAfterburner.exe',
    onSleepEnableProfile: 0,
    onSleepDisableProfile: 0,
  },
  // SLEEP MODE AUTOMATIONS
  SLEEP_MODE_ENABLE_FOR_SLEEP_DETECTOR: {
    enabled: false,
    calibrationValue: 0.01,
    sensitivity: 'MEDIUM',
    sleepCheck: false,
    detectionWindowMinutes: 15,
    activationWindow: false,
    activationWindowStart: [23, 0],
    activationWindowEnd: [7, 0],
  },
  SLEEP_MODE_ENABLE_AT_TIME: {
    enabled: false,
    time: null,
  },
  SLEEP_MODE_ENABLE_AT_BATTERY_PERCENTAGE: {
    enabled: false,
    triggerClasses: ['GenericTracker', 'Controller'],
    threshold: 50,
  },
  SLEEP_MODE_ENABLE_ON_CONTROLLERS_POWERED_OFF: {
    enabled: false,
  },
  SLEEP_MODE_ENABLE_ON_HEART_RATE_CALM_PERIOD: {
    enabled: false,
    heartRateThreshold: 60,
    periodDuration: 120 * 1000,
  },
  SLEEP_MODE_CHANGE_ON_STEAMVR_STATUS: {
    enabled: true,
    disableOnSteamVRStop: false,
  },
  SLEEP_MODE_DISABLE_AT_TIME: {
    enabled: false,
    time: null,
  },
  SLEEP_MODE_DISABLE_ON_DEVICE_POWER_ON: {
    enabled: false,
    triggerClasses: ['GenericTracker', 'Controller'],
  },
  // DEVICE POWER AUTOMATIONS
  TURN_OFF_DEVICES_ON_SLEEP_MODE_ENABLE: {
    enabled: true,
    deviceClasses: [],
  },
  TURN_OFF_DEVICES_WHEN_CHARGING: {
    enabled: true,
    deviceClasses: [],
  },
  TURN_ON_LIGHTHOUSES_ON_OYASUMI_START: {
    enabled: false,
  },
  TURN_ON_LIGHTHOUSES_ON_STEAMVR_START: {
    enabled: false,
  },
  TURN_OFF_LIGHTHOUSES_ON_STEAMVR_STOP: {
    enabled: false,
  },
  // OSC AUTOMATIONS
  OSC_GENERAL: {
    enabled: true,
  },
  SLEEPING_ANIMATIONS: {
    enabled: false,
    preset: null,
    onlyIfSleepModeEnabled: true,
    onlyIfAllTrackersTurnedOff: true,
    lockFeetOnSleepModeEnable: true,
    unlockFeetOnSleepModeDisable: true,
    unlockFeetOnAutomationDisable: true,
    releaseFootLockOnPoseChange: true,
    footLockReleaseWindow: 600,
    oscScripts: {},
  },
  // STATUS AUTOMATIONS
  CHANGE_STATUS_BASED_ON_PLAYER_COUNT: {
    enabled: false,
    limit: 2,
    statusBelowLimit: UserStatus.JoinMe,
    statusAtLimitOrAbove: UserStatus.Busy,
    onlyIfSleepModeEnabled: false,
  },
  // INVITE AUTOMATIONS
  AUTO_ACCEPT_INVITE_REQUESTS: {
    enabled: false,
    onlyIfSleepModeEnabled: false,
    listMode: 'WHITELIST',
    playerIds: [],
  },
  // SHUTDOWN AUTOMATIONS
  SHUTDOWN_AUTOMATIONS: {
    enabled: true,
    triggerOnSleep: false,
    sleepDuration: 15 * 60 * 1000,
    activationWindow: false,
    activationWindowStart: [23, 0],
    activationWindowEnd: [7, 0],
    quitSteamVR: true,
    turnOffControllers: true,
    turnOffTrackers: true,
    turnOffBaseStations: true,
    shutdownWindows: true,
  },
  // WINDOWS POWER POLICY AUTOMATIONS
  WINDOWS_POWER_POLICY_ON_SLEEP_MODE_ENABLE: {
    enabled: false,
  },
  WINDOWS_POWER_POLICY_ON_SLEEP_MODE_DISABLE: {
    enabled: false,
  },
};

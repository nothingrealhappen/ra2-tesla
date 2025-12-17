import type { CategoryDefinition } from '~/types/category';

export const categoryDefinitions: CategoryDefinition[] = [
  // Special Collections
  {
    id: 'tesla',
    name: { en: '⚡ Tesla Collection', cn: '⚡ 特斯拉系列' },
    description: {
      en: 'All things electric and shocking!',
      cn: '所有电力和震撼的声音！'
    },
    color: '#00FFFF',
    group: 'special',
  },
  {
    id: 'iconic',
    name: { en: '⭐ Iconic Sounds', cn: '⭐ 经典声音' },
    description: {
      en: 'The most memorable RA2 moments',
      cn: '最难忘的红警2时刻'
    },
    color: '#FFD700',
    group: 'special',
  },
  {
    id: 'meme-worthy',
    name: { en: '😂 Meme-Worthy', cn: '😂 梗图专用' },
    description: {
      en: 'Internet famous sounds',
      cn: '网络名声大噪'
    },
    color: '#FF69B4',
    group: 'special',
  },
  {
    id: 'multiplayer',
    name: { en: '🎮 Multiplayer Gems', cn: '🎮 多人游戏精选' },
    description: {
      en: 'Perfect for trolling friends',
      cn: '完美的朋友恶搞音效'
    },
    color: '#9370DB',
    group: 'special',
  },

  // Factions
  {
    id: 'allied',
    name: { en: '🇺🇸 Allied Forces', cn: '🇺🇸 盟军阵营' },
    description: {
      en: 'For freedom and democracy!',
      cn: '为了自由和民主！'
    },
    color: '#0066CC',
    group: 'faction',
  },
  {
    id: 'soviet',
    name: { en: '⚒️ Soviet Forces', cn: '⚒️ 苏联阵营' },
    description: {
      en: 'For the glory of the Soviet Union!',
      cn: '为了苏联的荣耀！'
    },
    color: '#CC0000',
    group: 'faction',
  },
  {
    id: 'yuri',
    name: { en: '🧠 Yuri Faction', cn: '🧠 尤里阵营' },
    description: {
      en: 'Mind control everything',
      cn: '控制一切的意志'
    },
    color: '#9900FF',
    group: 'faction',
  },

  // Unit Types
  {
    id: 'infantry',
    name: { en: '🪖 Infantry', cn: '🪖 步兵单位' },
    description: {
      en: 'Ground soldiers',
      cn: '地面士兵'
    },
    color: '#8B4513',
    group: 'unit',
  },
  {
    id: 'vehicle',
    name: { en: '🚗 Vehicles', cn: '🚗 车辆单位' },
    description: {
      en: 'Tanks and ground vehicles',
      cn: '坦克和地面车辆'
    },
    color: '#696969',
    group: 'unit',
  },
  {
    id: 'aircraft',
    name: { en: '✈️ Aircraft', cn: '✈️ 空军单位' },
    description: {
      en: 'Planes and airships',
      cn: '飞机和飞艇'
    },
    color: '#87CEEB',
    group: 'unit',
  },
  {
    id: 'naval',
    name: { en: '⚓ Naval', cn: '⚓ 海军单位' },
    description: {
      en: 'Ships and submarines',
      cn: '舰船和潜艇'
    },
    color: '#4682B4',
    group: 'unit',
  },
  {
    id: 'structure',
    name: { en: '🏢 Structures', cn: '🏢 建筑单位' },
    description: {
      en: 'Buildings and defenses',
      cn: '建筑和防御'
    },
    color: '#A0522D',
    group: 'unit',
  },
  {
    id: 'hero',
    name: { en: '🦸 Hero Units', cn: '🦸 英雄单位' },
    description: {
      en: 'Special hero units',
      cn: '特殊英雄单位'
    },
    color: '#FFD700',
    group: 'unit',
  },

  // Actions
  {
    id: 'acknowledgment',
    name: { en: '✅ Acknowledgment', cn: '✅ 确认指令' },
    description: {
      en: 'Confirmation responses',
      cn: '确认回应'
    },
    color: '#32CD32',
    group: 'action',
  },
  {
    id: 'movement',
    name: { en: '🏃 Movement', cn: '🏃 移动指令' },
    description: {
      en: 'Moving and positioning',
      cn: '移动和定位'
    },
    color: '#4169E1',
    group: 'action',
  },
  {
    id: 'combat',
    name: { en: '⚔️ Combat', cn: '⚔️ 战斗指令' },
    description: {
      en: 'Fighting and attacking',
      cn: '战斗和攻击'
    },
    color: '#DC143C',
    group: 'action',
  },
  {
    id: 'readiness',
    name: { en: '🎯 Ready', cn: '🎯 就绪状态' },
    description: {
      en: 'Unit ready states',
      cn: '单位就绪状态'
    },
    color: '#FF8C00',
    group: 'action',
  },
  {
    id: 'alert',
    name: { en: '🚨 Alert', cn: '🚨 警报状态' },
    description: {
      en: 'Warnings and emergencies',
      cn: '警告和紧急情况'
    },
    color: '#FF4500',
    group: 'action',
  },
  {
    id: 'humor',
    name: { en: '😄 Humor', cn: '😄 幽默搞笑' },
    description: {
      en: 'Funny and memorable lines',
      cn: '搞笑和难忘的台词'
    },
    color: '#FFD700',
    group: 'action',
  },

  // Moods
  {
    id: 'confident',
    name: { en: '💪 Confident', cn: '💪 自信满满' },
    description: {
      en: 'Bold and assertive',
      cn: '大胆而坚定'
    },
    color: '#FF6347',
    group: 'mood',
  },
  {
    id: 'panicked',
    name: { en: '😱 Panicked', cn: '😱 惊慌失措' },
    description: {
      en: 'Emergency and scared',
      cn: '紧急和恐惧'
    },
    color: '#FF1493',
    group: 'mood',
  },
  {
    id: 'professional',
    name: { en: '🎖️ Professional', cn: '🎖️ 专业军人' },
    description: {
      en: 'Military discipline',
      cn: '军事纪律'
    },
    color: '#2F4F4F',
    group: 'mood',
  },
  {
    id: 'quirky',
    name: { en: '🤪 Quirky', cn: '🤪 古怪独特' },
    description: {
      en: 'Unique character moments',
      cn: '独特的角色时刻'
    },
    color: '#DA70D6',
    group: 'mood',
  },
];

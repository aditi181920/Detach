export const quests = [
  // HYDRATION (8 quests)
  { id: 1, title: "Drink a full glass of water", type: "Hydration", emoji: "💧", points: 5, time: 60 },
  { id: 2, title: "Drink water + 5 deep breaths", type: "Hydration", emoji: "💧", points: 6, time: 75 },
  { id: 3, title: "Hydrate & splash cold water on face", type: "Hydration", emoji: "💧", points: 7, time: 90 },
  { id: 4, title: "Green tea break", type: "Hydration", emoji: "🍵", points: 5, time: 60 },
  { id: 5, title: "Water + stretch your neck", type: "Hydration", emoji: "💧", points: 6, time: 75 },
  { id: 6, title: "Drink water while standing", type: "Hydration", emoji: "💧", points: 4, time: 45 },
  { id: 7, title: "Refill your water bottle", type: "Hydration", emoji: "💧", points: 3, time: 30 },
  { id: 8, title: "Sip water slowly for 1 minute", type: "Hydration", emoji: "💧", points: 5, time: 60 },

  // MOVEMENT (12 quests)
  { id: 9, title: "10 squats", type: "Movement", emoji: "🏃", points: 8, time: 60 },
  { id: 10, title: "20 jumping jacks", type: "Movement", emoji: "🤸", points: 7, time: 45 },
  { id: 11, title: "1-minute walk around", type: "Movement", emoji: "🚶", points: 6, time: 60 },
  { id: 12, title: "15 desk push-ups", type: "Movement", emoji: "💪", points: 9, time: 75 },
  { id: 13, title: "10 lunges (each leg)", type: "Movement", emoji: "🦵", points: 10, time: 90 },
  { id: 14, title: "Climb stairs 2 flights", type: "Movement", emoji: "🪜", points: 10, time: 90 },
  { id: 15, title: "Wall sit for 30 seconds", type: "Movement", emoji: "🧍", points: 8, time: 30 },
  { id: 16, title: "10 arm circles forward + backward", type: "Movement", emoji: "🔄", points: 5, time: 45 },
  { id: 17, title: "Touch your toes 10 times", type: "Movement", emoji: "🤸", points: 5, time: 45 },
  { id: 18, title: "March in place for 1 minute", type: "Movement", emoji: "🚶", points: 6, time: 60 },
  { id: 19, title: "5 burpees", type: "Movement", emoji: "🔥", points: 12, time: 60 },
  { id: 20, title: "Shadow boxing for 30 seconds", type: "Movement", emoji: "🥊", points: 7, time: 30 },

  // MINDFULNESS (8 quests)
  { id: 21, title: "Box breathing 4-4-4-4 (3 rounds)", type: "Mindfulness", emoji: "🧘", points: 7, time: 60 },
  { id: 22, title: "Close eyes & breathe for 30 seconds", type: "Mindfulness", emoji: "😌", points: 5, time: 30 },
  { id: 23, title: "1-minute meditation", type: "Mindfulness", emoji: "🧘", points: 8, time: 60 },
  { id: 24, title: "Gratitude: think of 3 things", type: "Mindfulness", emoji: "🙏", points: 6, time: 45 },
  { id: 25, title: "Body scan: notice tension & release", type: "Mindfulness", emoji: "🧘", points: 7, time: 60 },
  { id: 26, title: "Mindful breathing: 5 deep breaths", type: "Mindfulness", emoji: "🌬️", points: 4, time: 30 },
  { id: 27, title: "Visualize a calm place", type: "Mindfulness", emoji: "🏝️", points: 6, time: 45 },
  { id: 28, title: "Count breaths to 10 & back", type: "Mindfulness", emoji: "🧘", points: 5, time: 60 },

  // RESET / FOCUS (10 quests)
  { id: 29, title: "Look away from screen: 20-20-20 rule", type: "Focus", emoji: "👀", points: 4, time: 20 },
  { id: 30, title: "Eye exercises: roll eyes 10 times", type: "Focus", emoji: "👁️", points: 4, time: 30 },
  { id: 31, title: "Massage your temples", type: "Focus", emoji: "💆", points: 5, time: 30 },
  { id: 32, title: "Shake out your hands vigorously", type: "Reset", emoji: "🙌", points: 3, time: 20 },
  { id: 33, title: "Shoulder shrugs: 10 reps", type: "Reset", emoji: "🤷", points: 4, time: 30 },
  { id: 34, title: "Wrist rotations: 10 each direction", type: "Reset", emoji: "🔄", points: 3, time: 30 },
  { id: 35, title: "Stand up + sit down 5 times", type: "Reset", emoji: "🪑", points: 5, time: 45 },
  { id: 36, title: "Face stretches: smile wide, frown deep", type: "Reset", emoji: "😊", points: 4, time: 30 },
  { id: 37, title: "Neck rolls: 5 each direction", type: "Reset", emoji: "🔄", points: 5, time: 45 },
  { id: 38, title: "Clench & release fists 10 times", type: "Reset", emoji: "✊", points: 3, time: 30 },

  // FUN / ENERGY (8 quests)
  { id: 39, title: "Dance for 30 seconds", type: "Fun", emoji: "💃", points: 7, time: 30 },
  { id: 40, title: "Do your best superhero pose for 20s", type: "Fun", emoji: "🦸", points: 5, time: 20 },
  { id: 41, title: "Laugh out loud for 10 seconds", type: "Fun", emoji: "😂", points: 4, time: 10 },
  { id: 42, title: "Sing your favorite chorus", type: "Fun", emoji: "🎤", points: 6, time: 30 },
  { id: 43, title: "Air guitar solo", type: "Fun", emoji: "🎸", points: 5, time: 20 },
  { id: 44, title: "Make 5 funny faces in mirror", type: "Fun", emoji: "🤪", points: 5, time: 30 },
  { id: 45, title: "High-five yourself 10 times", type: "Fun", emoji: "🙌", points: 3, time: 20 },
  { id: 46, title: "Victory dance", type: "Fun", emoji: "🎉", points: 5, time: 20 },

  // POSTURE / ERGONOMICS (4 quests)
  { id: 47, title: "Posture check: sit/stand tall for 1 min", type: "Posture", emoji: "🧍", points: 5, time: 60 },
  { id: 48, title: "Adjust your chair & monitor height", type: "Posture", emoji: "💺", points: 4, time: 60 },
  { id: 49, title: "Shoulder blade squeezes: 15 reps", type: "Posture", emoji: "💪", points: 6, time: 45 },
  { id: 50, title: "Cat-cow stretch (sitting version)", type: "Posture", emoji: "🐱", points: 6, time: 45 },
];

export const questTypes = [
  { name: "Hydration", emoji: "💧", color: "#7ca9ff" },
  { name: "Movement", emoji: "🏃", color: "#7cffd1" },
  { name: "Mindfulness", emoji: "🧘", color: "#ffd166" },
  { name: "Focus", emoji: "👀", color: "#ff6b6b" },
  { name: "Reset", emoji: "🔄", color: "#7cffd1" },
  { name: "Fun", emoji: "🎉", color: "#ffd166" },
  { name: "Posture", emoji: "🧍", color: "#7ca9ff" },
];

export const questEnvironments = [
  { id: 'desk', name: 'At Desk', emoji: '🖥️', description: 'Sitting, camera-safe' },
  { id: 'office', name: 'Office', emoji: '🏢', description: 'Subtle movements' },
  { id: 'anywhere', name: 'Anywhere', emoji: '🌍', description: 'Any space' },
  { id: 'privacy', name: 'Privacy', emoji: '🏠', description: 'Home/private' },
  { id: 'space', name: 'Need Space', emoji: '💪', description: 'Floor space' },
];

export function getQuestsByEnvironment(environment) {
  if (environment === 'random') {
    return quests;
  }
  
  // Filter quests by environment (this can be customized based on your logic)
  // For now, return all quests as they're environment-agnostic
  return quests;
}
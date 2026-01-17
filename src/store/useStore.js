import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const getTodayKey = () => new Date().toISOString().slice(0, 10);

export const useStore = create(
  persist(
    (set, get) => ({
      // User stats
      username: 'Guest',
      streak: 0,
      totalScore: 0,
      todayScore: 0,
      todayCompleted: 0,
      lastSpinDate: null,
      
      // Quest history (last 30 days)
      questHistory: [],
      
      // Badges earned
      badges: [],
      
      // Current quest
      currentQuest: null,
      
      // Initialize/normalize stats based on date
      normalizeStats: () => {
        const today = getTodayKey();
        const state = get();
        
        if (state.lastSpinDate !== today) {
          const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          
          // Update streak
          let newStreak = state.streak;
          if (state.lastSpinDate === yesterday) {
            newStreak += 1;
          } else if (state.lastSpinDate !== null && state.lastSpinDate !== today) {
            newStreak = 1;
          } else if (state.lastSpinDate === null) {
            newStreak = 1;
          }
          
          set({
            streak: newStreak,
            todayCompleted: 0,
            todayScore: 0,
            lastSpinDate: today,
          });
        } else if (state.streak === 0 && state.lastSpinDate === today) {
          set({ streak: 1 });
        }
      },
      
      // Set current quest
      setCurrentQuest: (quest) => set({ currentQuest: quest }),
      
      // Complete a quest
      completeQuest: (quest) => {
        const state = get();
        const today = getTodayKey();
        
        // Add to history
        const newHistory = [
          ...state.questHistory,
          {
            ...quest,
            completedAt: new Date().toISOString(),
            date: today,
          }
        ].slice(-30); // Keep last 30 days only
        
        // Update stats
        set({
          totalScore: state.totalScore + quest.points,
          todayScore: state.todayScore + quest.points,
          todayCompleted: state.todayCompleted + 1,
          questHistory: newHistory,
          lastSpinDate: today,
        });
        
        // Check for badges
        get().checkBadges();
      },
      
      // Check and award badges
      checkBadges: () => {
        const state = get();
        const newBadges = [...state.badges];
        
        // First Quest Badge
        if (state.todayCompleted === 1 && !newBadges.includes('first-quest')) {
          newBadges.push('first-quest');
        }
        
        // 7-Day Streak Badge
        if (state.streak >= 7 && !newBadges.includes('week-warrior')) {
          newBadges.push('week-warrior');
        }
        
        // 100 Total Quests Badge
        if (state.questHistory.length >= 100 && !newBadges.includes('century-club')) {
          newBadges.push('century-club');
        }
        
        // 500 Points Badge
        if (state.totalScore >= 500 && !newBadges.includes('point-master')) {
          newBadges.push('point-master');
        }
        
        if (newBadges.length > state.badges.length) {
          set({ badges: newBadges });
        }
      },
      
      // Set username
      setUsername: (username) => set({ username }),
    }),
    {
      name: 'reel-roulette-storage',
    }
  )
);
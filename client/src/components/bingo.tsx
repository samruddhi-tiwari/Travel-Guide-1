import React, { useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const BINGO_ITEMS = [
  'Ate Lechon', 'Whaleshark spotting', 'Kawasan Falls swim', 'Ate dried mangoes', 'Learn Bisaya word',
  'Island hopping', 'Temple of Leah', 'Snorkeling', 'Sunset at beach', 'Street food at night',
  'Took waterfall photos', 'Said Salamat all day', 'FREE SPACE', 'Sang karaoke with locals', 'Tried puso',
  'Took a tricycle ride', 'Saw Magellan’s cross', 'Bought pasalubong', 'Tried Tuslob Buwa', 'Took a boat ride',
  'Visit Simala Church', 'Badian Canyoneering', 'Visit Sugbo Mercado', 'Ate at Carenderia', 'Cliff dive fear'
];

export function CebuBingo() {
  const [checkedItems, setCheckedItems] = useLocalStorage<boolean[]>("cebu-bingo", new Array(25).fill(false));
  const { toast } = useToast();

  const handleToggle = (index: number) => {
    if (index === 12) return; // Free space cannot be toggled
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
    checkForBingo(newChecked);
  };

  const checkForBingo = (board: boolean[]) => {
    // Treat free space (12) as always true for win conditions
    const isChecked = (i: number) => i === 12 || board[i];

    const lines = [
      // Rows
      [0,1,2,3,4], [5,6,7,8,9], [10,11,12,13,14], [15,16,17,18,19], [20,21,22,23,24],
      // Cols
      [0,5,10,15,20], [1,6,11,16,21], [2,7,12,17,22], [3,8,13,18,23], [4,9,14,19,24],
      // Diagonals
      [0,6,12,18,24], [4,8,12,16,20]
    ];

    const hasBingo = lines.some(line => line.every(isChecked));

    if (hasBingo) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#3cc4b3', '#f28c38', '#f3d84b']
      });
      toast({
        title: "🎉 BINGO! 🎉",
        description: "You're a true Cebu traveler!",
        className: "bg-secondary text-white border-4 border-foreground font-display font-bold text-xl",
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-4 md:p-8 border-4 border-foreground brutal-shadow w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-2 uppercase tracking-widest drop-shadow-[2px_2px_0px_rgba(34,34,34,1)]">
          Cebu Bingo
        </h2>
        <p className="text-muted-foreground font-medium">Mark off what you've done to get a BINGO!</p>
      </div>

      <div className="grid grid-cols-5 gap-1 md:gap-3">
        {BINGO_ITEMS.map((item, i) => {
          const isFreeSpace = i === 12;
          const isChecked = isFreeSpace || checkedItems[i];

          return (
            <button
              key={i}
              onClick={() => handleToggle(i)}
              className={cn(
                "aspect-square p-1 md:p-2 rounded-xl flex flex-col items-center justify-center text-center transition-all border-2 md:border-4 border-foreground relative overflow-hidden group",
                isChecked 
                  ? "bg-primary text-primary-foreground brutal-shadow-sm translate-y-0.5 translate-x-0.5" 
                  : "bg-accent/20 hover:bg-accent text-foreground hover:brutal-shadow-sm"
              )}
            >
              {isFreeSpace ? (
                <div className="flex flex-col items-center justify-center">
                  <Star className="w-6 h-6 md:w-10 md:h-10 mb-1 text-secondary fill-secondary" />
                  <span className="font-display font-bold text-[8px] md:text-sm uppercase">{item}</span>
                </div>
              ) : (
                <span className="font-display font-medium text-[8px] md:text-sm leading-tight md:leading-snug">{item}</span>
              )}
              
              {isChecked && !isFreeSpace && (
                <div className="absolute inset-0 bg-black/10 z-10 flex items-center justify-center pointer-events-none">
                  <div className="w-full h-1 bg-secondary rotate-45 transform origin-center absolute"></div>
                  <div className="w-full h-1 bg-secondary -rotate-45 transform origin-center absolute"></div>
                </div>
              )}
            </button>
          );
        })}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button 
          onClick={() => setCheckedItems(new Array(25).fill(false))}
          className="text-sm font-bold text-muted-foreground hover:text-foreground underline underline-offset-4"
        >
          Reset Board
        </button>
      </div>
    </div>
  );
}

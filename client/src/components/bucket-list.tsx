import React from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Check, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

const BUCKET_LIST_ITEMS = [
  "Kawasan Falls", "Sardine Run in Moalboal", "Osmeña Peak Sunrise", 
  "Lechon Feast", "Whale Shark Encounter in Oslob", "Bantayan Island Beach", 
  "Magellan's Cross", "TOPS Lookout Night View", "Sumilon Island Sandbar", 
  "Taoist Temple", "Fort San Pedro", "Canyoneering", "Tumalog Falls", 
  "Sirao Flower Garden", "Sugbo Mercado", "Temple of Leah", "Cebu Safari", 
  "Puso Village", "10,000 Roses", "Little Kyoto"
];

export function BucketList() {
  const [checked, setChecked] = useLocalStorage<string[]>("cebu-bucket-list", []);

  const toggleItem = (item: string) => {
    if (checked.includes(item)) {
      setChecked(checked.filter(i => i !== item));
    } else {
      setChecked([...checked, item]);
    }
  };

  const progress = Math.round((checked.length / BUCKET_LIST_ITEMS.length) * 100);

  return (
    <div className="bg-accent rounded-3xl p-6 md:p-10 border-4 border-foreground brutal-shadow w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-white p-3 rounded-2xl border-2 border-foreground">
          <Compass className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground">Ultimate Bucket List</h2>
          <p className="text-foreground/80 font-medium">Conquer the best of Cebu!</p>
        </div>
      </div>

      <div className="bg-white/50 p-4 rounded-2xl border-2 border-foreground mb-8">
        <div className="flex justify-between items-end mb-2">
          <span className="font-bold text-foreground font-display">Your Journey</span>
          <span className="font-bold text-primary font-display text-xl">{checked.length} / 20</span>
        </div>
        <Progress value={progress} className="h-4 border-2 border-foreground" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {BUCKET_LIST_ITEMS.map((item) => {
          const isDone = checked.includes(item);
          return (
            <button
              key={item}
              onClick={() => toggleItem(item)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl border-2 border-foreground transition-all text-left",
                isDone 
                  ? "bg-primary text-white opacity-90 shadow-[inset_0_0_0_2px_rgba(0,0,0,0.1)]" 
                  : "bg-white hover:bg-white/80"
              )}
            >
              <div className={cn(
                "w-6 h-6 rounded-md border-2 border-foreground flex items-center justify-center shrink-0 transition-colors",
                isDone ? "bg-secondary" : "bg-white"
              )}>
                {isDone && <Check className="w-4 h-4 text-foreground stroke-[4]" />}
              </div>
              <span className={cn(
                "font-medium leading-tight flex-1",
                isDone && "line-through decoration-foreground/30"
              )}>
                {item}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
